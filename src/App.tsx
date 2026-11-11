import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

type AuthMode = "login" | "register";

function App() {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <>
    <main>
      <section className="bg-[#35543b] py-12 border-b border-[#29452f]">
        
      
         <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f8f5] px-6 py-12 lg:px-8">
            {mode === "login" ? (
              <Login onRegister={() => setMode("register")} />
            ) : (
              <Register onSignIn={() => setMode("login")} />
            )}
           </div>
           </section>
         </main>
     </>
  );
}

export default App;