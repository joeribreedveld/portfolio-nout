interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ className, onClick, children, variant }: IButtonProps) => {
  return (
    <button
      className={`${className} btn ${
        variant && variant === "primary" ? "btn-primary" : "btn-secondary"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
