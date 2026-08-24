import { useState, useEffect } from "react";

function HistoryCarousel({ historyCarouselItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % historyCarouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [historyCarouselItems.length]);

  return (
    <div className="historyCarousel">
      <p className="cardText">{historyCarouselItems[currentIndex]}</p>
    </div>
  );
}

export default HistoryCarousel;
