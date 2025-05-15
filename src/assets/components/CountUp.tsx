import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  separator?: string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 2,
  separator = "",
  className = "",
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const countRef = useRef<number>(from);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const endTime = startTime + duration * 1000;

    const updateCount = (currentTime: number) => {
      if (currentTime >= endTime) {
        setCount(to);
        return;
      }

      const progress = (currentTime - startTime) / (duration * 1000);
      const easeOutProgress = 1 - Math.pow(1 - progress, 2);
      const nextCount = Math.floor(from + (to - from) * easeOutProgress);

      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      frameRef.current = requestAnimationFrame(updateCount);
    };

    frameRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, from, to, duration]);

  const formatNumber = (num: number): string => {
    if (!separator) return num.toString();
    return new Intl.NumberFormat("en-US", {
      useGrouping: true,
    })
      .format(num)
      .replace(/,/g, separator);
  };
  return (
    <span className={className} ref={ref}>
      {formatNumber(count)}
    </span>
  );
};

export default CountUp;
