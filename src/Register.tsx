import { useState } from "react";
import type { FormEvent } from "react";

type RegisterProps = {
  onSignIn: () => void;
};

export default function Register({ onSignIn }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      setMessage("Your passwords do not match.");
      return;
    }

    setMessage("Registration is not connected yet.");
  }

  return (
    

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
            placeholder="Jane Doe"
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
            placeholder="you@gmail.com"
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
              className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 pr-16 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
              id="register-password"
              minLength={8}
              name="password"
              placeholder="At least 8 characters"
              required
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-[#718074] hover:text-[#35543b]"
              onClick={() => setShowPassword((visible) => !visible)}
              type="button"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="register-confirm-password" className="mb-2 block text-sm font-medium text-[#35443a]">
            Confirm password
          </label>
          <div className="relative">
            <input
              autoComplete="new-password"
              className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 pr-16 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
              id="register-confirm-password"
              minLength={8}
              name="confirmPassword"
              placeholder="Repeat your password"
              required
              type={showConfirmPassword ? "text" : "password"}
            />
            <button
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-[#718074] hover:text-[#35543b]"
              onClick={() => setShowConfirmPassword((visible) => !visible)}
              type="button"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#35543b] px-4 text-sm font-semibold text-white transition hover:bg-[#29452f] focus:outline-none focus:ring-4 focus:ring-[#638368]/25"
          type="submit"
        >
          Register
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
            <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="text-center text-sm text-[#5f6f60]">
          {" "}
          <button className="font-medium text-[#35543b] transition hover:text-[#29452f]" onClick={onSignIn} type="button">
            Login
          </button>
        </p>

        {message && (
          <p aria-live="polite" className="rounded-lg bg-[#f1f5ef] px-4 py-3 text-sm text-[#49634d]">
            {message}
          </p>
        )}
      </form>
  );
}
