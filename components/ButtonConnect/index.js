import { useWallet } from "../../hooks/useWallet";
import { button, connected } from "./index.module.css";

export default function ButtonConnect({ variant, className, size }) {
  const { connect, isActive } = useWallet();
  return (
    <button
      disabled={isActive}
      onClick={connect}
      className={`default-button ${button} ${isActive && connected}`}
      variant={variant}
      size={size}
    >
      {!isActive && "Conecta tu wallet"}
      {isActive && "Conectado"}
    </button>
  );
}
