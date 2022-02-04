import { useEffect, useState } from "react";
import classes from "../Cover.module.css";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibleButton = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
    return () => {
      window.removeEventListener('scroll', handleVisibleButton);
    }
  }, []);

  return (
    <>
      <button onClick={handleScrollUp} className={`${isVisible ? 'd-block' : 'd-none'} btn btn-info btn-floating btn-lg ${classes["btn-back-to-top"]}`}>
        <i className="fa fa-arrow-up" aria-hidden='true'></i>
      </button>
    </>
  );
}

export default GoTop;