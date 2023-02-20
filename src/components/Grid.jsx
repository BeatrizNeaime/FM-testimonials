const Testimonial = ({ name, title, subtitle, border, color }) => {
    let fName = name.split(' ')
    let nome = fName[0].toLowerCase()

    return (
        <>
            <div className={`flex items-center w-[70%] gap-4 font-barlow`}>
                <img src={require(`../assets/image-${nome}.jpg`)} alt="" className={`rounded-full border-2 border-${border} h-[40px]`} />
                <div className="flex flex-col">
                    <span className={`text-${color} text-[13px] font-[600]`} >{name}</span>
                    <p className={`text-${color} text-[13px] opacity-50 font-[500]`} >Verified Graduate</p>
                </div>
            </div>
            <div className="mt-[1rem] flex flex-col gap-4
            justify-evenly">
                <span className={`text-${color} font-[600] text-xl`} >
                    {title}
                </span>
                <span className={`text-${color} only:font-[500] text-[13px] opacity-70`} >
                    "{subtitle}"
                </span>
            </div>
        </>
    )
}

const Grid = () => {
    return (
        <div className="flex flex-col items-center justify-evenly" >
            <div className="md:grid md:grid-cols-4 md:gap-4 w-[80%] flex flex-col  gap-5">
                <div className="bg-moderate-violet col-span-2 flex flex-col p-5 rounded-xl">
                    <Testimonial
                        name="Daniel Clifford" border="light-violet" color="light-gray"
                        title="I received a job offer mid-course, and the subjects I learned were current, if no more so, in the company I joined. I honestly feel I got every penny's worth."
                        subtitle="I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredbly fun! I enrolled shortly thereafter. The next 12 wweks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."
                    />
                </div>
                <div className="bg-very-dark-grayish-blue flex-col p-5 rounded-xl">
                    <Testimonial
                        name="Jonathan Walters" color="light-gray"
                        title="The team was very supportive and kept me motivated"
                        subtitle="I started as a total newable with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."
                    />
                </div>
                <div className="bg-white row-span-2 flex-col p-5 rounded-xl">
                    <Testimonial 
                    name="Kira Whittle" color="very-dark-grayish-blue"
                    title="Such a life-changing experience. Highly recommended!"
                    subtitle="Before joining the bootcamp, I've never written a line og code. I needed some sctructure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entirecurriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in perticular, was outstanding. It took my learning to the next level in a way that no tutotial could ever have. In fact, I've often referred to it during development experience. Ot certainly helped me land a job as a full-stack developer adter receiving multiple offers. 100% recommend!"
                    />
                </div>
                <div className="bg-white flex-col p-5 rounded-xl">
                    <Testimonial
                    name="Jeanette Harmon" color="very-dark-grayish-blue"
                    title="An overall wonderful and rewarding experience"
                    subtitle="Thank you for the wonrdeful experience! I now have a job I really enjoym and make a good living while doing something I love."
                    />
                </div>
                <div className="bg-very-dark-blackish-blue col-span-2 p-5 rounded-xl">
                    <Testimonial
                        name="Patrick Abrams" border="moderate-violet" color="light-gray"
                        title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
                        subtitle="The staff seems genuinely concerned about my progress wich I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people"
                    />
                </div>
            </div>
        </div>
    )
}

export default Grid