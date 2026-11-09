import { useState, type FormEvent } from "react";

type RegisterProps = {
  onSignIn: () => void;
};

function Register({ onSignIn }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Registration isn't connected yet.");
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-9">
        <p className="mb-3 text-sm font-medium text-[#718074]">Create your account</p>
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d2b21] sm:text-[2.1rem]">
          Get registration
        </h1>
       
      </div>

      <form className="space-y-5" onSubmit={handleRegister}>
        <div>
          <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-[#35443a]">
            Full name
          </label>
          <input
            autoComplete="name"
            className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
            id="register-name"
            name="name"
            placeholder="pazzo rita"
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
              className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 pr-12 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
              id="register-password"
              name="password"
              placeholder="Create a password"
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
              placeholder="Re-enter your password"
              required
              type={showConfirmPassword ? "text" : "password"}
            />
            <button
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
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

        <p className="text-center text-sm text-[#5f6f60]">
          Already have an account?{' '}
          <button className="font-medium text-[#35543b] transition hover:text-[#29452f]" onClick={onSignIn} type="button">
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
}

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
  }

  function showRegistration() {
    setMessage("");
    setIsRegistering(true);
  }

  function showLogin() {
    setMessage("");
    setIsRegistering(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6f2] p-4 sm:p-8">
      <div className="grid min-h-[min(760px,calc(100vh-4rem))] w-full max-w-6xl overflow-hidden rounded-4xl bg-white shadow-[0_24px_80px_-32px_rgba(27,45,34,0.2)] lg:grid-cols-[1fr_0.92fr]">
        <section className="flex items-center justify-center px-6 py-10 sm:px-12 sm:py-12 lg:px-16">
          {isRegistering ? (
            <Register onSignIn={showLogin} />
          ) : (
            <div className="w-full max-w-md">
              <div className="mb-9">
                <p className="mb-3 text-sm font-medium text-[#718074]">Welcome back</p>
                <h1 className="text-3xl font-semibold tracking-tight text-[#1d2b21] sm:text-[2.1rem]">
                  Sign in to your account
                </h1>
               
              </div>

              <form className="space-y-5" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-[#35443a]">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
                    id="login-email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="login-password" className="block text-sm font-medium text-[#35443a]">
                      Password
                    </label>
                    <button
                      className="text-sm font-medium text-[#52785a] transition hover:text-[#314d38]"
                      onClick={() => setMessage("Password recovery isn't available.")}
                      type="button"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="current-password"
                      className="h-12 w-full rounded-xl border border-[#dfe5df] bg-white px-4 pr-12 text-sm text-[#24352a] outline-none transition placeholder:text-[#a3ada5] hover:border-[#bac8bc] focus:border-[#638368] focus:ring-4 focus:ring-[#638368]/10"
                      id="login-password"
                      name="password"
                      placeholder="Enter your password"
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
                </div>

                <button
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#35543b] px-4 text-sm font-semibold text-white transition hover:bg-[#29452f] focus:outline-none focus:ring-4 focus:ring-[#638368]/25"
                  type="submit"
                >
                  Sign in
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
                    <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-center text-sm text-[#5f6f60]">
                  New here?{' '}
                  <button className="font-medium text-[#35543b] transition hover:text-[#29452f]" onClick={showRegistration} type="button">
                    Create an account
                  </button>
                </p>

                {message && (
                  <p aria-live="polite" className="rounded-lg bg-[#f1f5ef] px-4 py-3 text-sm text-[#49634d]">
                    {message}
                  </p>
                )}
              </form>
            </div>
          )}
        </section>

        
      </div>
    </main>
  );
}

export default App;
