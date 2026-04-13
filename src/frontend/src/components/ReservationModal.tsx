import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ReservationFields {
  date: string;
  time: string;
  partySize: string;
  name: string;
  email: string;
}

type FieldErrors = Partial<Record<keyof ReservationFields, string>>;

const TIME_SLOTS = [
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function validateReservation(values: ReservationFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.date) errors.date = "Please choose a date.";
  if (!values.time) errors.time = "Please select a time.";
  if (!values.partySize) errors.partySize = "Please select party size.";
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }
  return errors;
}

const EMPTY: ReservationFields = {
  date: "",
  time: "",
  partySize: "",
  name: "",
  email: "",
};

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReservationModal({
  open,
  onOpenChange,
}: ReservationModalProps) {
  const [values, setValues] = useState<ReservationFields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  function handleTextField(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ReservationFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSelect(field: keyof ReservationFields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validateReservation(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setConfirmed(true);
  }

  function handleClose() {
    onOpenChange(false);
    setTimeout(() => {
      setValues(EMPTY);
      setErrors({});
      setConfirmed(false);
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-md rounded-2xl bg-card border border-border shadow-elevated p-6"
        data-ocid="reservation-modal"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Reserve a Table
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Book your spot at Brew Haven — we'd love to have you.
          </DialogDescription>
        </DialogHeader>

        {confirmed ? (
          <div
            className="flex flex-col items-center text-center gap-4 py-4"
            data-ocid="reservation-success"
          >
            <CheckCircle2 className="h-14 w-14 text-accent" />
            <p className="font-display text-lg font-semibold text-foreground">
              Table Reserved!
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your table has been reserved! We'll confirm by email shortly.
            </p>
            <Button
              onClick={handleClose}
              className="mt-2 w-full rounded-xl"
              data-ocid="reservation-close"
            >
              Done
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 pt-2"
            noValidate
            data-ocid="reservation-form"
          >
            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="res-date" className="text-sm font-medium">
                  Date
                </Label>
                <Input
                  id="res-date"
                  name="date"
                  type="date"
                  min={getTodayStr()}
                  value={values.date}
                  onChange={handleTextField}
                  aria-invalid={!!errors.date}
                  className={`rounded-xl transition-smooth ${errors.date ? "border-destructive" : ""}`}
                  data-ocid="reservation-date"
                />
                {errors.date && (
                  <p className="text-xs text-destructive" role="alert">
                    {errors.date}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="res-time" className="text-sm font-medium">
                  Time
                </Label>
                <Select
                  value={values.time}
                  onValueChange={(v) => handleSelect("time", v)}
                >
                  <SelectTrigger
                    id="res-time"
                    className={`rounded-xl ${errors.time ? "border-destructive" : ""}`}
                    data-ocid="reservation-time"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && (
                  <p className="text-xs text-destructive" role="alert">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            {/* Party Size */}
            <div className="space-y-1.5">
              <Label htmlFor="res-party" className="text-sm font-medium">
                Party Size
              </Label>
              <Select
                value={values.partySize}
                onValueChange={(v) => handleSelect("partySize", v)}
              >
                <SelectTrigger
                  id="res-party"
                  className={`rounded-xl ${errors.partySize ? "border-destructive" : ""}`}
                  data-ocid="reservation-party-size"
                >
                  <SelectValue placeholder="How many guests?" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.partySize && (
                <p className="text-xs text-destructive" role="alert">
                  {errors.partySize}
                </p>
              )}
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="res-name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="res-name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={values.name}
                onChange={handleTextField}
                aria-invalid={!!errors.name}
                className={`rounded-xl transition-smooth ${errors.name ? "border-destructive" : ""}`}
                data-ocid="reservation-name"
              />
              {errors.name && (
                <p className="text-xs text-destructive" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="res-email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="res-email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={values.email}
                onChange={handleTextField}
                aria-invalid={!!errors.email}
                className={`rounded-xl transition-smooth ${errors.email ? "border-destructive" : ""}`}
                data-ocid="reservation-email"
              />
              {errors.email && (
                <p className="text-xs text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl font-semibold transition-smooth mt-1"
              data-ocid="reservation-submit"
            >
              {loading ? (
                "Reserving…"
              ) : (
                <>
                  <CalendarDays className="h-4 w-4 mr-2" />
                  Confirm Reservation
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

interface ReserveButtonProps {
  className?: string;
  label?: string;
}

export function ReserveButton({
  className = "",
  label = "Reserve a Table",
}: ReserveButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`rounded-xl font-semibold transition-smooth ${className}`}
        data-ocid="reserve-table-btn"
      >
        <CalendarDays className="h-4 w-4 mr-2" />
        {label}
      </Button>
      <ReservationModal open={open} onOpenChange={setOpen} />
    </>
  );
}
