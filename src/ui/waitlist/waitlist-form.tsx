"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  Ticket,
} from "lucide-react";
import { Link } from "@/components/ui/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FieldName = "name" | "email" | "campus" | "role";

interface FormValues {
  name: string;
  email: string;
  campus: string;
  role: string;
}

type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  campus: "",
  role: "",
};

const roleOptions = [
  { value: "student", label: "Student" },
  { value: "campus-dining", label: "Campus dining team" },
  { value: "vendor", label: "Vendor or student seller" },
  { value: "service-provider", label: "Service provider" },
  { value: "campus-staff", label: "Campus staff or faculty" },
  { value: "other", label: "Other campus partner" },
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That email doesn’t look right — check it and try again.";
  }

  if (values.campus.trim().length < 2) {
    errors.campus = "Tell us which campus you’re on.";
  }

  if (!values.role) {
    errors.role = "Pick the option that fits you best.";
  }

  return errors;
}

const fieldBaseClass =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary/15 dark:border-input dark:focus:border-ring dark:focus:ring-ring/20";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className="text-destructive mt-1.5 flex items-center gap-1.5 text-xs"
    >
      <AlertCircle className="size-3.5 shrink-0" />
      {message}
    </p>
  );
}

export default function WaitlistForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) {
      successHeadingRef.current?.focus();
    }
  }, [submitted]);

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleBlur(field: FieldName) {
    const fieldError = validate(values)[field];
    if (fieldError) {
      setErrors((current) => ({ ...current, [field]: fieldError }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    const firstName = values.name.trim().split(" ")[0] || "friend";
    const selectedRole =
      roleOptions.find((option) => option.value === values.role)?.label ??
      values.role;

    return (
      <div className="border-border bg-card shadow-card rounded-2xl border p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <span className="bg-primary shadow-card grid size-16 place-items-center rounded-full text-white">
            <Check className="size-7" strokeWidth={3} />
          </span>
          <p className="text-primary dark:bg-secondary mt-5 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[0.62rem] font-bold tracking-[0.12em] uppercase dark:text-blue-300">
            <Ticket className="size-3" />
            You’re in
          </p>
          <h2
            ref={successHeadingRef}
            tabIndex={-1}
            className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-balance outline-none"
          >
            You’re on the list, {firstName}.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
            We’ll email{" "}
            <span className="text-foreground font-semibold">
              {values.email}
            </span>{" "}
            the moment CampuzSquare goes live at{" "}
            <span className="text-foreground font-semibold">
              {values.campus}
            </span>
            . Keep an eye on your inbox — early campuses get first access.
          </p>
        </div>

        <div className="border-border bg-muted/60 mt-6 grid gap-2 rounded-xl border p-4 text-sm sm:grid-cols-2">
          <div>
            <p className="text-muted-foreground text-[0.62rem] font-semibold tracking-[0.12em] uppercase">
              Campus
            </p>
            <p className="mt-1 font-semibold">{values.campus}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-[0.62rem] font-semibold tracking-[0.12em] uppercase">
              Role
            </p>
            <p className="mt-1 font-semibold">{selectedRole}</p>
          </div>
        </div>

        <div className="border-border mt-6 space-y-3 border-t pt-5">
          <p className="text-muted-foreground text-[0.62rem] font-semibold tracking-[0.14em] uppercase">
            What happens next
          </p>
          {[
            "We review demand for your campus.",
            "You get a launch email with your early-access link.",
            "Verify your student email and pick your campus.",
          ].map((step, index) => (
            <div key={step} className="flex items-start gap-2.5 text-sm">
              <span className="bg-primary/10 text-primary dark:bg-secondary dark:text-secondary-foreground grid size-5 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold">
                {index + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={resetForm}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 flex-1 rounded-full text-sm",
            )}
          >
            Add another person
          </button>
          <Link
            href="/features"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary hover:bg-primary/90 h-11 flex-1 rounded-full text-sm text-white",
            )}
          >
            Explore features
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-border bg-card shadow-card rounded-2xl border p-6 sm:p-8"
      data-reveal="up"
      data-reveal-delay={0.12}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight">
            Join the waitlist
          </h2>
          <p className="text-muted-foreground mt-1.5 text-sm">
            Takes about 30 seconds. No spam, ever.
          </p>
        </div>
        <span className="text-primary dark:bg-secondary hidden rounded-full bg-blue-50 px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.1em] uppercase sm:inline-flex dark:text-blue-300">
          Early access
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
        <div>
          <label
            htmlFor="waitlist-name"
            className="mb-1.5 block text-sm font-medium"
          >
            Full name
          </label>
          <input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Maya Rivera"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "waitlist-name-error" : undefined}
            className={cn(
              fieldBaseClass,
              errors.name &&
                "border-destructive focus:border-destructive focus:ring-destructive/20",
            )}
          />
          <FieldError id="waitlist-name-error" message={errors.name} />
        </div>

        <div>
          <label
            htmlFor="waitlist-email"
            className="mb-1.5 block text-sm font-medium"
          >
            Email address
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@university.edu"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "waitlist-email-error" : "waitlist-email-hint"
            }
            className={cn(
              fieldBaseClass,
              errors.email &&
                "border-destructive focus:border-destructive focus:ring-destructive/20",
            )}
          />
          {errors.email ? (
            <FieldError id="waitlist-email-error" message={errors.email} />
          ) : (
            <p
              id="waitlist-email-hint"
              className="text-muted-foreground mt-1.5 text-xs"
            >
              Student emails get priority, but any email works.
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="waitlist-campus"
              className="mb-1.5 block text-sm font-medium"
            >
              Campus or college
            </label>
            <input
              id="waitlist-campus"
              name="campus"
              type="text"
              autoComplete="organization"
              placeholder="State University"
              value={values.campus}
              onChange={(event) => updateField("campus", event.target.value)}
              onBlur={() => handleBlur("campus")}
              aria-invalid={Boolean(errors.campus)}
              aria-describedby={
                errors.campus ? "waitlist-campus-error" : undefined
              }
              className={cn(
                fieldBaseClass,
                errors.campus &&
                  "border-destructive focus:border-destructive focus:ring-destructive/20",
              )}
            />
            <FieldError id="waitlist-campus-error" message={errors.campus} />
          </div>

          <div>
            <label
              htmlFor="waitlist-role"
              className="mb-1.5 block text-sm font-medium"
            >
              I’m joining as
            </label>
            <div className="relative">
              <select
                id="waitlist-role"
                name="role"
                value={values.role}
                onChange={(event) => updateField("role", event.target.value)}
                onBlur={() => handleBlur("role")}
                aria-invalid={Boolean(errors.role)}
                aria-describedby={
                  errors.role ? "waitlist-role-error" : undefined
                }
                className={cn(
                  fieldBaseClass,
                  "appearance-none pr-10",
                  values.role ? "text-foreground" : "text-muted-foreground/70",
                  errors.role &&
                    "border-destructive focus:border-destructive focus:ring-destructive/20",
                )}
              >
                <option value="" disabled>
                  Select a role
                </option>
                {roleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2"
              />
            </div>
            <FieldError id="waitlist-role-error" message={errors.role} />
          </div>
        </div>

        <button
          type="submit"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-primary shadow-card hover:bg-primary/90 h-12 w-full rounded-full text-sm font-semibold text-white transition-colors",
          )}
        >
          Save my spot
          <ArrowRight className="size-4" />
        </button>

        <p className="text-muted-foreground text-center text-xs leading-relaxed">
          By joining, you agree to receive occasional launch updates from Campus
          Chow. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
