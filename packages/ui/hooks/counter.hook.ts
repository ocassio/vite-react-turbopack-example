import { useState, useCallback } from "react";

export function useCounter(): [number, () => void] {
  const [value, setValue] = useState<number>(0);

  const increase = useCallback(() => {
    setValue(v => v + 2);
  }, []);

  return [value, increase];
}
