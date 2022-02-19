import Count from './Count';
import CountDownTimer from './CountDownTimer';

const Stats = () => {
    const counts = [
        {
            "id": "1",
            "number": "750",
            "label": "School",
            "duration": "10"
        },
        {
            "id": "2",
            "number": "10000",
            "label": "Participants",
            "duration": "10"
        }
    ]

    const hoursMinSecs = {hours:47, minutes: 20, seconds: 40}
    return (
        <div data-aos="fade-up" className="w-full h-full flex justify-center py-5 bg-[#ff8605]">
            <div className="container flex flex-col gap-4 mx-8 my-6">
                <div className="w-full h-auto py-4 flex flex-col md:flex-row justify-between text-center">
                    <Count key={counts[0].id} data={counts[0]} icon_class="university" /> 
                    <CountDownTimer hoursMinSecs={hoursMinSecs}/>
                    <Count key={counts[1].id} data={counts[1]} icon_class="user-friends"/>
                </div>
            </div>
        </div>
    );
}

export default Stats;