import { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Trash2, Plus, Minus, Package, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
    const [step, setStep] = useState<"cart" | "checkout">("cart");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
    });

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // PROXY WEBHOOK INTEGRATION
            // Sending to the existing n8n instance for order processing
            const response = await fetch("/api/contact-webhook", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "commerceOrder",
                    customer: formData,
                    items: cart,
                    subtotal,
                    timestamp: new Date().toISOString(),
                    page_url: window.location.href,
                }),
            });

            if (response.ok) {
                toast.success("Order request sent! Kim will contact you for payment details soon.", {
                    duration: 10000,
                });
                // We'll simulate a redirect to a payment processor here 
                // In a real setup, this would be window.location.href = stripeUrl;
                setStep("cart");
                onClose();
            } else {
                throw new Error("Failed to process order");
            }
        } catch (error) {
            toast.error("There was an issue processing your order. Please call us at (705) 445-8001.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l border-border">
                <SheetHeader className="pb-6 border-b border-border">
                    <SheetTitle className="font-display text-2xl flex items-center gap-2">
                        <ShoppingCart className="w-6 h-6 text-primary" />
                        {step === "cart" ? "Your Shopping Bag" : "Checkout Details"}
                    </SheetTitle>
                </SheetHeader>

                {step === "cart" ? (
                    <>
                        <ScrollArea className="flex-1 mt-4">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                                    <Package className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                                    <p className="text-muted-foreground font-body italic">
                                        Your bag is empty...
                                    </p>
                                    <Button variant="link" onClick={onClose} className="mt-2 text-primary">
                                        Start Shopping
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-6 pr-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-start">
                                            <div className="w-20 h-20 rounded-md overflow-hidden bg-secondary border border-border flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                                                <p className="text-sm text-primary font-semibold mt-1">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                                <div className="flex items-center gap-3 mt-3">
                                                    <div className="flex items-center border border-border rounded-full overflow-hidden">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 px-2 hover:bg-secondary transition-colors"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-xs font-medium w-6 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 px-2 hover:bg-secondary transition-colors"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-muted-foreground hover:text-destructive transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ScrollArea>

                        {cart.length > 0 && (
                            <SheetFooter className="mt-auto border-t border-border pt-6 flex-col gap-4">
                                <div className="w-full space-y-2">
                                    <div className="flex justify-between text-muted-foreground text-sm uppercase tracking-wider font-light">
                                        <span>Subtotal ({totalItems} items)</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-foreground font-display text-xl font-semibold border-t border-border/50 pt-2">
                                        <span>Total</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground italic text-center mt-2">
                                        Shipping calculated at next step. Tax included where applicable.
                                    </p>
                                </div>
                                <Button
                                    className="w-full h-12 text-lg font-medium tracking-wide"
                                    onClick={() => setStep("checkout")}
                                >
                                    Proceed to Checkout
                                </Button>
                            </SheetFooter>
                        )}
                    </>
                ) : (
                    <form onSubmit={handleCheckout} className="flex-1 flex flex-col gap-6 mt-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    Full Name
                                </label>
                                <Input
                                    required
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    Email Address
                                </label>
                                <Input
                                    required
                                    type="email"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                    Shipping Address
                                </label>
                                <Input
                                    required
                                    placeholder="123 Cottage Lane"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        City
                                    </label>
                                    <Input
                                        required
                                        placeholder="Collingwood"
                                        value={formData.city}
                                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Postal Code
                                    </label>
                                    <Input
                                        required
                                        placeholder="L9Y 2M1"
                                        value={formData.postalCode}
                                        onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto border-t border-border pt-6 space-y-4">
                            <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                                <p className="text-xs text-muted-foreground leading-relaxed italic text-center">
                                    Clicking "Complete Order" will send your order to Kim at Grapevine Cottage.
                                    We will verify shipping and contact you for secure payment via Stripe.
                                </p>
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Processing..." : (
                                    <span className="flex items-center gap-2">
                                        Complete Order <Send className="w-4 h-4" />
                                    </span>
                                )}
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onClick={() => setStep("cart")}
                                disabled={isSubmitting}
                            >
                                Back to Cart
                            </Button>
                        </div>
                    </form>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
