import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import AuthSignUpForm from "@/components/AuthSignUpForm";
import AuthSignInForm from "@/components/AuthSignInForm";
import { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <div className="flex gap-5 justify-center mb-5 mt-4">
          <button
            className={`font-semibold px-5 py-2 rounded ${mode === "login" ? "bg-primary text-white" : "bg-white border border-primary text-primary"}`}
            onClick={() => setMode("login")}
            aria-current={mode === "login"}
          >
            Sign In
          </button>
          <button
            className={`font-semibold px-5 py-2 rounded ${mode === "register" ? "bg-primary text-white" : "bg-white border border-primary text-primary"}`}
            onClick={() => setMode("register")}
            aria-current={mode === "register"}
          >
            Sign Up
          </button>
        </div>
        {mode === "login" ? <AuthSignInForm /> : <AuthSignUpForm />}
      </div>
    </div>
  );
}
