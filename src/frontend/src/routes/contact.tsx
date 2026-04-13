import { ContactForm } from "@/components/ContactForm";
import { OpeningHours } from "@/components/OpeningHours";
import { ReservationModal, ReserveButton } from "@/components/ReservationModal";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "12 Willow Lane, Brooklyn, NY 11201",
    href: "https://maps.google.com/?q=12+Willow+Lane+Brooklyn+NY+11201",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (718) 555-0192",
    href: "tel:+17185550192",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@brewhaven.com",
    href: "mailto:hello@brewhaven.com",
  },
];

function MapPlaceholder() {
  return (
    <div
      className="w-full rounded-2xl border border-border bg-muted/40 flex flex-col items-center justify-center gap-3 py-12 px-6 shadow-soft"
      aria-label="Map location placeholder"
      data-ocid="map-placeholder"
    >
      <div className="bg-primary/10 rounded-full p-4">
        <MapPin className="h-8 w-8 text-primary" />
      </div>
      <p className="font-display text-base font-semibold text-foreground text-center">
        12 Willow Lane, Brooklyn, NY 11201
      </p>
      <p className="text-xs text-muted-foreground text-center">
        A short walk from Atlantic Ave–Barclays Center station
      </p>
      <a
        href="https://maps.google.com/?q=12+Willow+Lane+Brooklyn+NY+11201"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-primary hover:underline transition-smooth font-medium mt-1"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}

function ContactPage() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      {/* Hero banner */}
      <section className="bg-card border-b border-border py-14 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            We would love to hear from you. Stop by, give us a call, or drop us
            a message — we always have a warm cup waiting.
          </p>
          <div className="mt-8">
            <ReserveButton
              label="Reserve a Table"
              className="px-7 py-3 text-base"
            />
          </div>
        </motion.div>
      </section>

      {/* Main grid */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left column: contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Right column: info + hours + map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Contact info */}
            <div
              className="bg-card rounded-2xl shadow-soft border border-border p-6 md:p-8"
              data-ocid="contact-info"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">
                Find Us
              </h3>
              <ul className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 bg-primary/10 rounded-full p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <a
                        href={href}
                        target={label === "Address" ? "_blank" : undefined}
                        rel={
                          label === "Address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-foreground hover:text-primary transition-smooth break-words"
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening hours */}
            <OpeningHours />

            {/* Map placeholder */}
            <MapPlaceholder />

            {/* Reserve CTA */}
            <div
              className="bg-muted/40 rounded-2xl border border-border p-6 text-center"
              data-ocid="reservation-cta"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Ready to visit?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Secure your spot in advance — we fill up fast on weekends.
              </p>
              <button
                type="button"
                onClick={() => setReservationOpen(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-xl shadow-soft hover:bg-primary/90 transition-smooth"
                data-ocid="contact-reserve-btn"
              >
                Reserve a Table
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation modal (for contact-page CTA button) */}
      <ReservationModal
        open={reservationOpen}
        onOpenChange={setReservationOpen}
      />
    </>
  );
}
