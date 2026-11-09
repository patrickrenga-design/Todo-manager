import { useState, type FormEvent } from "react";

type RegisterProps = {
  onSignIn: () => void;
};

function Register({ onSignIn }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setMessage("Passwords don't match. Please check them and try again.");
      return;
    }

    setMessage("Your details are ready. Account creation isn't connected yet.");
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-7">
        <p className="mb-3 text-sm font-medium text-[#718074]">Get started with Grove</p>
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d2b21] sm:text-[2.1rem]">
          Create your account
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#77827a]">
          A few details and you&apos;ll be ready to go.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-[#35443a]">
            Full name
          </label>
          <input
            autoComplete="name"
            className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
            id="register-name"
            name="name"
            placeholder="Alex Morgan"
            required
            type="text"
          />
        </div>

        <div>
          <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-[#35443a]">
            Email address
          </label>
          <input
            autoComplete="email"
            className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
            id="register-email"
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
        </div>

        <div>
          <label htmlFor="register-password" className="mb-2 block text-sm font-medium text-[#35443a]">
            Password
          </label>
          <div className="relative">
            <input
              autoComplete="new-password"
              className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 pr-12 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
              id="register-password"
              minLength={8}
              name="password"
              placeholder="At least 8 characters"
              required
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 flex items-center px-4 text-[#89958b] transition hover:text-[#405947]"
              onClick={() => setShowPassword((visible) => !visible)}
              type="button"
            >
              {showPassword ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                  <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.5 0 9 7 9 7a15.7 15.7 0 0 1-3.1 3.9M6.2 6.2C3.9 7.8 3 12 3 12s3.5 7 9 7c1.2 0 2.3-.3 3.3-.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                  <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              )}
            </button>
          </div>
          <p className="mt-2 text-xs text-[#879288]">Use at least 8 characters.</p>
        </div>

        <div>
          <label htmlFor="register-confirm-password" className="mb-2 block text-sm font-medium text-[#35443a]">
            Confirm password
          </label>
          <div className="relative">
            <input
              autoComplete="new-password"
              className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 pr-12 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
              id="register-confirm-password"
              name="confirmPassword"
              placeholder="Enter your password again"
              required
              type={showConfirmPassword ? "text" : "password"}
            />
            <button
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              className="absolute inset-y-0 right-0 flex items-center px-4 text-[#89958b] transition hover:text-[#405947]"
              onClick={() => setShowConfirmPassword((visible) => !visible)}
              type="button"
            >
              {showConfirmPassword ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                  <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.5 0 9 7 9 7a15.7 15.7 0 0 1-3.1 3.9M6.2 6.2C3.9 7.8 3 12 3 12s3.5 7 9 7c1.2 0 2.3-.3 3.3-.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                  <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-sm leading-5 text-[#68766b]">
          <input
            className="mt-0.5 size-4 shrink-0 rounded border-[#ccd6cd] accent-[#52785a] focus:ring-[#638368]/20"
            name="terms"
            required
            type="checkbox"
          />
          <span>I agree to the terms of service and privacy policy.</span>
        </label>

        <button
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#35543b] px-4 text-sm font-semibold text-white transition hover:bg-[#29452f] focus:outline-none focus:ring-4 focus:ring-[#638368]/25"
          type="submit"
        >
          Create account
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
            <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {message && (
          <p aria-live="polite" className="rounded-lg bg-[#f1f5ef] px-4 py-3 text-sm text-[#49634d]">
            {message}
          </p>
        )}
      </form>

      <p className="mt-7 text-center text-sm text-[#7d887f]">
        Already have an account?{" "}
        <button
          className="font-medium text-[#52785a] transition hover:text-[#314d38]"
          onClick={onSignIn}
          type="button"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}

export default Register;
