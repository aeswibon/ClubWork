import React from 'react';

const CountDownTimer = ({hoursMinSecs}) => {
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div className="relative flex-1 flex flex-col px-4">
            <i className="fas fa-clock fa-3x -mb-3 lg:hidden"></i>
            <i className="hidden lg:block fas fa-clock fa-5x mb-5"></i>
            <label className="text-[#151515] mt-5 text-3xl lg:text-4xl font-bold">{`${hrs.toString().padStart(2, '0')}:${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</label>
            <label className="text-[#151515] font-semibold tracking-tight -pt-3 lg:pt-6 mb-5 lg:mb-0 text-3xl lg:text-4xl">Count Down</label>
        </div>
    );
}

export default CountDownTimer;