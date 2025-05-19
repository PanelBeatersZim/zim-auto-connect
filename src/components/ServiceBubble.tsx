
type Props = {
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

export function ServiceBubble({ label, icon, selected, onClick }: Props) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shadow hover:scale-105 transition-all duration-150 ${
        selected
          ? "bg-primary text-white border-primary"
          : "bg-white text-primary border-primary"
      }`}
      onClick={onClick}
      type="button"
      style={{ minWidth: 90 }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
