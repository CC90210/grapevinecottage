import { z } from "zod";

// Chat widget validation
export const chatMessageSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(1000, "Message must be less than 1000 characters"),
});

export const webhookResponseSchema = z.object({
  output: z.string().optional(),
  text: z.string().optional(),
  response: z.string().optional(),
  message: z.string().optional(),
  content: z.string().optional(),
});

// Contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ChatMessage = z.infer<typeof chatMessageSchema>;

// Rate limiting helper (simple in-memory for client-side)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (
  key: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): boolean => {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
};

// Sanitize and validate webhook response
export const parseWebhookResponse = (rawText: string): string => {
  const MAX_RESPONSE_LENGTH = 5000;

  if (!rawText || rawText.trim() === "") {
    throw new Error("Empty response from server");
  }

  let botResponse: string;

  try {
    const jsonData = JSON.parse(rawText);
    
    // Validate against schema
    const validationResult = webhookResponseSchema.safeParse(jsonData);
    
    if (validationResult.success) {
      const validated = validationResult.data;
      botResponse =
        validated.output ||
        validated.text ||
        validated.response ||
        validated.message ||
        validated.content ||
        "";
    } else {
      // If it's a string directly, use it
      if (typeof jsonData === "string") {
        botResponse = jsonData;
      } else {
        throw new Error("Invalid response format");
      }
    }
  } catch (parseError) {
    // Not JSON - treat as plain text
    botResponse = rawText;
  }

  // Validate we got a string response
  if (typeof botResponse !== "string" || botResponse.trim() === "") {
    throw new Error("No valid message content in response");
  }

  // Enforce maximum length
  if (botResponse.length > MAX_RESPONSE_LENGTH) {
    botResponse = botResponse.slice(0, MAX_RESPONSE_LENGTH) + "...";
  }

  return botResponse;
};
