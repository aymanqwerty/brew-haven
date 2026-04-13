import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name } = e.target;
    const fieldErrors = validate(values);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors[name as keyof FormErrors],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setValues({ name: "", email: "", message: "" });
    toast.success("Message sent! We'll get back to you within 24 hours.");
  }

  if (submitted) {
    return (
      <div
        className="bg-card rounded-2xl shadow-soft border border-border p-8 flex flex-col items-center text-center gap-4"
        data-ocid="contact-success"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-display text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We'll get back to you within 24 hours. Thank you for reaching out to
          Brew Haven.
        </p>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => setSubmitted(false)}
          data-ocid="contact-send-another"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl shadow-soft border border-border p-6 md:p-8 space-y-5"
      noValidate
      data-ocid="contact-form"
    >
      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
        Send Us a Message
      </h3>

      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`rounded-xl transition-smooth focus:ring-2 focus:ring-primary/30 ${
            errors.name ? "border-destructive" : ""
          }`}
          data-ocid="contact-name"
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-destructive" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`rounded-xl transition-smooth focus:ring-2 focus:ring-primary/30 ${
            errors.email ? "border-destructive" : ""
          }`}
          data-ocid="contact-email"
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us anything — a question, feedback, or just to say hi…"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`rounded-xl resize-none transition-smooth focus:ring-2 focus:ring-primary/30 ${
            errors.message ? "border-destructive" : ""
          }`}
          data-ocid="contact-message"
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-xs text-destructive"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl font-semibold transition-smooth"
        data-ocid="contact-submit"
      >
        {loading ? (
          "Sending…"
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
