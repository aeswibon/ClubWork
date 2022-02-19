import { useEffect, useState } from "react";
import { classNames } from "./classNames";

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
        <div className="fixed bottom-5 right-5 cursor-pointer z-[100] ">
            <button onClick={handleScrollUp} className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0',
                ' rounded-full text-white bg-[#ff8605] text-2xl p-2 border-2 border-white transition-opacity'
            )}>
                    <i className="fa fa-arrow-up w-7 h-7" aria-hidden='true'></i>
             </button>
        </div>
    );
}

export default GoTop;
