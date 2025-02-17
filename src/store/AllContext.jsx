import React, { createContext, useEffect, useRef, useState } from "react";

export const UseContextApi = createContext({
  container1Visible: false,
  container2Visible: false,
  container3Visible: false,
  container1Ref: { current: null },
  container2Ref: { current: null },
  container3Ref: { current: null },
});

const AllContext = ({ children }) => {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);

  const timerRef = useRef({
    container1: null,
    container2: null,
    container3: null,
  });

  const observerRef = useRef(null);

  const [container1Visible, setcontainer1RefVisible] = useState(false);
  const [container2Visible, setcontainer2RefVisible] = useState(false);
  const [container3Visible, setcontainer3RefVisible] = useState(false);

  useEffect(() => {
    const startObserving = () => {
      if (
        !container1Ref.current ||
        !container2Ref.current ||
        !container3Ref.current
      ) {
        setTimeout(startObserving, 50);
        return;
      }
    };

    const callbackFunction = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === container1Ref.current) {
            clearTimeout(timerRef.current.container1);
            timerRef.current.container1 = setTimeout(() => {
              setcontainer1RefVisible(true);
            }, 0);
          }

          if (entry.target === container2Ref.current) {
            clearTimeout(timerRef.current.container2);
            timerRef.current.container2 = setTimeout(() => {
              setcontainer2RefVisible(true);
            }, 250);
          }

          if (entry.target === container3Ref.current) {
            clearTimeout(timerRef.current.container3);
            timerRef.current.container3 = setTimeout(() => {
              setcontainer3RefVisible(true);
            }, 500);
          }
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(callbackFunction, options);
    observerRef.current.observe(container1Ref.current);
    observerRef.current.observe(container2Ref.current);
    observerRef.current.observe(container3Ref.current);

    startObserving();
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      Object.values(timerRef.current).forEach(clearTimeout);
    };
  }, []);
  return (
    <>
      <UseContextApi.Provider
        value={{
          container1Visible,
          container2Visible,
          container3Visible,
          container1Ref,
          container2Ref,
          container3Ref,
        }}
      >
        {children}
      </UseContextApi.Provider>
    </>
  );
};

export default AllContext;
