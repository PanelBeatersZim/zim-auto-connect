
import { useState } from "react";
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
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const allValid = Object.values(status).every(Boolean) && password === confirm;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!allValid) return;

    setSubmitting(true);
    try {
      // Basic input sanitization
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email address");
      // Supabase sign up
      const { error: regErr } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + "/auth" }
      });
      if (regErr) throw new Error(regErr.message);

      setSuccess("Check your email to verify and complete sign up.");
    } catch (err: any) {
      setError(err.message);
    }
    setSubmitting(false);
  }

  function onPassChange(val: string) {
    setPassword(val);
    setStatus(validatePassword(val));
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white rounded shadow max-w-sm mx-auto space-y-2" aria-labelledby="signup-title" autoComplete="off">
      <h2 id="signup-title" className="text-xl font-bold mb-2">Create Your Account</h2>

      <label className="flex items-center mb-1 text-sm gap-1 text-gray-600">
        <Info size={16} className="text-primary" aria-hidden /> 
        <span>Password must meet all rules below</span>
      </label>
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
      <PasswordInput
        label="Confirm Password"
        id="signup-confirm"
        value={confirm}
        required
        onChange={e => setConfirm(e.target.value)}
        error={confirm && confirm !== password ? "Passwords do not match" : undefined}
      />
      <div>
        <label htmlFor="signup-email" className="block font-medium mb-1">Email</label>
        <input
          id="signup-email"
          type="email"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-primary"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          autoComplete="off"
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
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
