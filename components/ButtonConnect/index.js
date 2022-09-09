import { useWallet } from "../../hooks/useWallet";
import { button, connected, connecting } from "./index.module.css";

export default function Button({ variant, className, size }) {
  const { connect, isActive, isActivating } = useWallet();

  return (
    <button
      disabled={isActive}
      onClick={connect}
      className={`default-button ${[button , connected]}`}
      variant={variant}
      size={size}
    >
      {isActivating ? "" : !isActive ? "Conecta tu wallet" : "Conectado"}
    </button>
  );
}
