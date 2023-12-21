import React, { useEffect, useRef } from 'react';
import './Counter.css';

function Counter() {
  const counterRef = useRef(null);

  const handleScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = document.querySelectorAll('.counter-content');
        elements.forEach(element => {
          const targetText = element.getAttribute('data-target');
          const target = parseInt(targetText, 10); // Get the target number
          let count = 0;
          const updateCounter = () => {
            const increment = Math.ceil(target / 100);
            if (count < target) {
              count += increment;
              element.innerHTML = `${count}+<br/>${element.getAttribute('data-text')}`;
              setTimeout(updateCounter, 15);
            } else {
              element.innerHTML = `${target}+<br/>${element.getAttribute('data-text')}`;
            }
          };
          updateCounter();
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8 // Adjust threshold based on when you want the animation to trigger
    };

    const observer = new IntersectionObserver(handleScroll, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="Countercontainer" ref={counterRef}>
      <div className="counter-content" data-target="20" data-text="Years of Experience">0+<br/>Years of Experience</div>
      <div className="counter-content" data-target="50" data-text="Complete Projects">0+<br/>Complete Projects</div>
      <div className="counter-content" data-target="100" data-text="Employees">0+<br/>Employees</div>
      <div className="counter-content" data-target="300" data-text="5 Star Rating">0+<br/>5 Star Rating</div>
    </div>
  );
}

export default Counter;
