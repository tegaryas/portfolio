import { useEffect, useState } from "react";

export function useCycle(length, intervalMs = 3500) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs, active]);

  return [active, setActive];
}
