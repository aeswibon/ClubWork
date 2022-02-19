import Image from "next/image";
const Contact = () => {
    let details = [
        {
            id:1,
            name: "Neha Kshirsagar",
            ph_no: "9673147495",
            photo: "https://media-exp1.licdn.com/dms/image/C4D03AQF-MmxqQcOJtA/profile-displayphoto-shrink_200_200/0/1623919597373?e=1639612800&v=beta&t=D25X6sv9sfN64EgpA8c1xa1osvpn8hgsqeyMbjZSdjw"
        },
        {
            id:2,
            name: "Tanmay Nagrale",
            ph_no: "9146188972",
            photo: "https://media-exp1.licdn.com/dms/image/C5603AQH5OJMr46KFog/profile-displayphoto-shrink_200_200/0/1624233720908?e=1639612800&v=beta&t=pjJcmzkwIsTfLKqlSk9Vs81gmlUSvFUmwagcjS3a_wU"
        },
        {
            id:3,
            name: "Harsh Kaabra",
            ph_no: "7620216041",
            photo: "https://media-exp1.licdn.com/dms/image/C5603AQEbsNH1BHmT5w/profile-displayphoto-shrink_200_200/0/1627669260288?e=1639612800&v=beta&t=AjM-v9CZa8s9prSa8ySlrhEtPtCOnSpW9FmFBrwv8vw"
        },
        {
            id:4,
            name: "Dweeja Reddy",
            ph_no: "8317567940",
            photo: "https://media-exp1.licdn.com/dms/image/C4E03AQHmZZ6ZXKi-hg/profile-displayphoto-shrink_200_200/0/1627713525285?e=1639612800&v=beta&t=xqwtEpVrUIGyfKaEfO7KAez4qsj6tNmcsZLl_JbezEI"
        },
        {
            id:5,
            name: "Kushagra Upadhyaya",
            ph_no: "9414741300",
            photo: "https://media-exp1.licdn.com/dms/image/C4E03AQGLM1-qkDaGuQ/profile-displayphoto-shrink_200_200/0/1627842975639?e=1639612800&v=beta&t=g7ECC1FB2ofZGUcs5jdyB5W0OkzIkGBVC6Z_Ri9GDC8"
        },
        {
            id:6,
            name: "Vandana Amgoth",
            ph_no: "6281691916",
            photo: "https://media-exp1.licdn.com/dms/image/C4E03AQFQVzHfAblEtA/profile-displayphoto-shrink_200_200/0/1634144830247?e=1639612800&v=beta&t=IJVUjKlotS_LAnJxXTOKRF-E8Ev_4HKiayd-hG8LNrU"
        }
    ];
    return (
        <div className="" id="contact">
        <section className="w-screen mx-auto px-4 sm:px-6 lg:px-4 py-20">
            <div data-aos="fade-up" className="text-center pb-12">
                <h1 className="font-bold text-3xl lg:text-6xl font-heading text-[#ff8605]">
                    Event Managers
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center lg:mx-10">
            {details.map((dt) => (
                <div key={dt.id} data-aos="fade-up" className="w-56 lg:w-96 rounded-lg bg-[#d8d8d8] p-4 flex flex-col justify-center items-center">
                    <div className="text-center ">
                        <p className="text-xl lg:text-2xl font-bold mb-2 text-[#ff8605]">{dt.name}</p>
                        <p className="text-lg lg:text-xl font-normal text-[#171717]">{dt.ph_no}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>
        </div>
    );
}

export default Contact;