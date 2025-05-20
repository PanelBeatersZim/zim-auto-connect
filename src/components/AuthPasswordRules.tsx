
import { CheckCircle, XCircle } from "lucide-react";

interface PasswordRulesStatus {
  lowercase: boolean;
  uppercase: boolean;
  number: boolean;
  symbol: boolean;
  minLength: boolean;
}

type Props = {
  status: PasswordRulesStatus;
};

const rules = [
  { key: "lowercase", desc: "At least 1 lowercase letter" },
  { key: "uppercase", desc: "At least 1 uppercase letter" },
  { key: "number", desc: "At least 1 number" },
  { key: "symbol", desc: "At least 1 symbol" },
  { key: "minLength", desc: "At least 8 characters" },
] as const;

export default function AuthPasswordRules({ status }: Props) {
  return (
    <ul className="mb-2 space-y-1 text-sm" aria-live="polite">
      {rules.map(r => (
        <li key={r.key} className="flex items-center gap-2">
          {status[r.key as keyof PasswordRulesStatus] ? (
            <CheckCircle className="text-green-600" size={18} aria-label="Rule satisfied" />
          ) : (
            <XCircle className="text-red-400" size={18} aria-label="Rule not satisfied" />
          )}
          <span>{r.desc}</span>
        </li>
      ))}
    </ul>
  );
}

