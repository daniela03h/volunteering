
interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function IconButton({ children, className, onClick, disabled = false}: IProps) {
  return (
    <button className={`${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}