import { useEffect, useRef } from "react";

export const FadeInSection = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        threshold: 0.3, // 15% элемента в зоне видимости
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fade-in" ref={ref}>
      {children}
    </div>
  );
};
