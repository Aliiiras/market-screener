// // components/LazyInView.js
// import { useInView } from 'react-intersection-observer';
// import { lazy, Suspense } from 'react';

// export default function LazyInView({ importFunc, fallback = <div>Loading...</div>, threshold = 0.1 }) {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold,
//   });

//   const LazyComponent = lazy(importFunc);

//   return (
//     <div ref={ref}>
//       {inView && (
//         <Suspense fallback={fallback}>
//           <LazyComponent {...props}/>
//         </Suspense>
//       )}
//     </div>
//   );
// }
// ///////////////////////////
// LazyFadeIn.jsx
import { useEffect, useRef, useState, Suspense } from 'react';
// import MarketItemPlaceholder from '../components/MarketItemPlaceholder';
import MarketItem from '../components/MarketItem';


export default function LazyFadeIn({ LazyComponent, item, threshold = 0.2 }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={<MarketItem isSkeleton={true} />}>
          <LazyComponent item={item} />
        </Suspense>
      ) : (
        <MarketItem isSkeleton={true} />

      )}
    </div>
  );
}
