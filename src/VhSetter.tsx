import { useEffect } from "react";

export function VhSetter() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh(); // Set initially
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh); // Clean up on unmount
  }, []);

  return null;
}
