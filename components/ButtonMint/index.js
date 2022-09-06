import Button from "react-bootstrap/Button";
import { useNeoFutbol } from "../../hooks/useNeoFutbol";
import { useWallet } from "../../hooks/useWallet";

export default function ButtonConnect({ variant, className, size }) {
  const { provider } = useWallet();
  const { mint } = useNeoFutbol();
  return (
    <Button
      onClick={() => {
        mint(provider);
      }}
      className={className}
      variant={variant}
      size={size}
    >
      Mint
    </Button>
  );
}
