
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  id?: string;
  required?: boolean;
}

export default function PasswordInput({
  label,
  error,
  id,
  ...props
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          className={`w-full px-3 py-2 rounded border focus:ring-2 focus:ring-primary focus:outline-none ${error ? "border-red-500" : "border-gray-300"}`}
          aria-invalid={!!error}
          aria-required={props.required}
          {...props}
        />
        <button
          type="button"
          tabIndex={0}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible(v => !v)}
        >
          {visible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}
