import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, AlertCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, checkRateLimit } from "@/lib/validation";

const CONTACT_WEBHOOK_URL = "/api/contact-webhook";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with zod schema
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Check rate limit (5 submissions per hour)
    if (!checkRateLimit("contact_form", 5, 3600000)) {
      toast({
        title: "Too Many Requests",
        description: "Please wait before sending another message, or call us at (705) 445-8001.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        action: "contactForm",
        name: validation.data.name,
        email: validation.data.email,
        message: validation.data.message,
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
        source: "website_contact_form",
      };

      console.log(`[Contact] Submitting form via proxy: ${CONTACT_WEBHOOK_URL}`);
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify(payload),
      });

      console.log(`[Contact] Response status: ${response.status}`);

      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.statusText}`);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("[Contact] Form submission error:", error);

      // Provide helpful fallback instead of just failing
      toast({
        title: "Couldn't Send Message",
        description: "Please call us at (705) 445-8001 or message us on Facebook/Instagram.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us | Get in Touch with Grapevine Cottage"
        description="Have questions about our unique gifts or artisan treasures? Reach out to Kim at Grapevine Cottage. Call us, send a message, or visit our store in downtown Collingwood."
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-3xl text-primary block mb-2">
              Say Hello
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              Come Find Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We'd love to see you in the store
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Note from Kim */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center bg-secondary/50 rounded-xl p-8"
          >
            <p className="text-lg text-muted-foreground mb-4 italic">
              "I'd love to see you in the store. Stop by, say hello, and let me help
              you find that perfect something."
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              If you can't make it in person, feel free to call or reach out.
              I'm always happy to help.
            </p>
            <p className="font-script text-2xl text-primary">— Kim</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Visit Our Shop
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        191 Hurontario Street, Unit 2<br />
                        Collingwood, Ontario L9Y 2M1
                      </p>
                      <a
                        href="https://maps.google.com/?q=191+Hurontario+Street+Unit+2+Collingwood+Ontario+L9Y+2M1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm underline mt-1 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+17054458001"
                        className="text-primary hover:text-primary/80 transition-colors text-lg"
                      >
                        (705) 445-8001
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        Contact form below or reach us on social media
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Store Hours
                </h3>
                <div className="bg-secondary rounded-lg p-6 space-y-2">
                  <div className="flex justify-between text-foreground">
                    <span>Tuesday – Wednesday</span>
                    <span>10 AM – 4 PM</span>
                  </div>
                  <div className="flex justify-between text-foreground font-medium">
                    <span>Thursday</span>
                    <span>10 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Friday – Saturday</span>
                    <span>10 AM – 4 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground pt-2 border-t border-border/50">
                    <span>Sunday – Monday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Connect With Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  We've started fresh with new social pages for this new chapter. Over 15,000 people
                  followed our story before — join us as we continue the journey!
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/p/Grapevine-Cottage-61577257586575/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-primary-foreground" />
                  </a>
                  <a
                    href="https://www.instagram.com/grapevinecottage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary-foreground" />
                  </a>
                  <span className="text-muted-foreground">@grapevinecottage</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary rounded-lg p-8 shadow-soft">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-background ${errors.name ? "border-red-500" : ""}`}
                      placeholder="Enter your name"
                      maxLength={100}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-background ${errors.email ? "border-red-500" : ""}`}
                      placeholder="Enter your email"
                      maxLength={255}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      className={`bg-background resize-none ${errors.message ? "border-red-500" : ""}`}
                      placeholder="How can we help you?"
                      maxLength={2000}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.6389367845!2d-80.2183!3d44.5004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882a4eaed7555555%3A0x1234567890abcdef!2s191%20Hurontario%20St%20Unit%202%2C%20Collingwood%2C%20ON%20L9Y%202M1%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Grapevine Cottage Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
