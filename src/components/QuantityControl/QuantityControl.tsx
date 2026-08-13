import "./QuantityControl.css";

interface QuantityControlProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

function QuantityControl({
  value,
  onDecrease,
  onIncrease,
}: QuantityControlProps) {
  return (
    <div className="quantity-control">
      <button
        type="button"
        className="quantity-control__btn quantity-control__btn--minus"
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <input
        className="quantity-control__input"
        value={value}
        readOnly
        aria-label="Quantity"
      />

      <button
        type="button"
        className="quantity-control__btn quantity-control__btn--plus"
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
