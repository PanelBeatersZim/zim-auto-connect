import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AuthPasswordRules from "./AuthPasswordRules";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";

function validatePassword(password: string) {
  return {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*()_\-+=~`{}\[\]:;"'<>,.?/\\|]/.test(password),
    minLength: password.length >= 8,
  };
}

export default function AuthSignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState(validatePassword(""));
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);

  const allValid = Object.values(status).every(Boolean) && password === confirm;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setToast(null);

    if (!allValid) {
      setToast({ type: "error", message: "Make sure all password rules are met and fields match." });
      return;
    }

    setSubmitting(true);
    try {
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        throw new Error("Invalid email address");
      }

      const { error: regErr } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + "/auth" },
      });

      if (regErr) throw new Error(regErr.message);

      setToast({ type: "success", message: "✅ Check your email to verify and complete sign up." });
    } catch (err: any) {
      setToast({ type: "error", message: err.message });
    }
    setSubmitting(false);
  }

  function onPassChange(val: string) {
    setPassword(val);
    setStatus(validatePassword(val));
  }

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 bg-white rounded shadow max-w-sm mx-auto space-y-4"
      aria-labelledby="signup-title"
      autoComplete="off"
    >
      <h2 id="signup-title" className="text-xl font-bold mb-2">
        Create Your Account
      </h2>

      {/* Toast Message */}
      {toast && (
        <div
          className={`text-sm px-4 py-2 rounded ${
            toast.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Email Field */}
      <div className="flex flex-col space-y-1 focus-within:ring-2 focus-within:ring-primary rounded">
        <label htmlFor="signup-email" className="block font-medium text-sm">
          Email
        </label>
        <input
          ref={emailRef}
          id="signup-email"
          type="email"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <label className="flex items-center mb-1 text-sm gap-1 text-gray-600">
        <Info size={16} className="text-primary" aria-hidden />
        <span>Password must meet all rules below</span>
      </label>

      {/* Password */}
      <PasswordInput
        label="Password"
        id="signup-pass"
        value={password}
        onChange={e => onPassChange(e.target.value)}
        required
        error={password && !Object.values(status).every(Boolean) ? "Password doesn't meet all rules." : undefined}
        aria-describedby="password-rules"
      />

      <AuthPasswordRules status={status} />

      {/* Confirm Password */}
      <PasswordInput
        label="Confirm Password"
        id="signup-confirm"
        value={confirm}
        required
        onChange={e => setConfirm(e.target.value)}
        error={confirm && confirm !== password ? "Passwords do not match" : undefined}
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded font-semibold mt-3 disabled:opacity-50"
        disabled={!allValid || submitting}
        aria-disabled={!allValid || submitting}
      >
        {submitting ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}
