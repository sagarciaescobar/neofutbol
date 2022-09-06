import Button from "react-bootstrap/Button";
import { useWallet } from "../../hooks/useWallet";

export default function ButtonConnect({ variant, className, size }) {
  const { connect, isActive } = useWallet();
  return (
    <Button
      disabled={isActive}
      onClick={connect}
      className={className}
      variant={variant}
      size={size}
    >
      {!isActive && "Conecta tu wallet"}
      {isActive && "Conectado"}
    </Button>
  );
}
