import React, { useEffect, useState } from 'react';

const Count = (props) => {
    const {label, number, duration } = props.data
    const [count, setCount] = useState("0")

    useEffect(() => {
        let start = 0;
        const end = parseInt(number.substring(0,3))

        if (start === end) return;
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === end) clearInterval(timer)
        }, incrementTime);

    }, [number, duration]);

    return (
        <div className="relative flex-1 flex flex-col px-4">
            <i className={`fas fa-${props.icon_class} fa-3x lg:hidden -mb-3`}></i>
            <i className={`fas fa-${props.icon_class} fa-5x mb-5 hidden lg:block`}></i>
            <label className="text-[#151515] mt-5 text-3xl lg:text-4xl font-bold">{count}+</label>
            <label className="text-[#151515] font-semibold tracking-tight -pt-3 lg:pt-6 mb-5 lg:mb-0 text-3xl lg:text-4xl">{label}</label>
        </div>
    );
}

export default Count;