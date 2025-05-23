type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
