import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for early/late trigger
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (one-time animation)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};

/**
 * Hook for multiple elements with staggered animations
 * @param {number} count - Number of elements to animate
 * @param {number} staggerDelay - Delay between each element (ms)
 * @returns {Array} - Array of [ref, isVisible, delay] tuples
 */
export const useStaggeredAnimation = (count, staggerDelay = 100) => {
  const [containerRef, isContainerVisible] = useScrollAnimation();

  const items = Array.from({ length: count }, (_, index) => ({
    isVisible: isContainerVisible,
    delay: index * staggerDelay,
  }));

  return [containerRef, items];
};

export default useScrollAnimation;
