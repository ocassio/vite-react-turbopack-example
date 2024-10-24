import { FC } from "react";
import { Button } from "@mui/material";

interface CounterProps {
  value: number;
  onClick: () => void;
}

const Counter: FC<CounterProps> = ({ value, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>count: {value}</Button>
  );
};

export default Counter;
