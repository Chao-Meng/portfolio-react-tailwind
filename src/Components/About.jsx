export default function About(){

    return(
        <>
        <section className="">
            <h2 className="text-3xl font-bold mb-10 text-center pt-16"> About Me</h2>
            <div className="mx-auto max-w-7xl grid items-start gap-10 grid-cols-[20%_80%]">
                <div className="flex flex-col gap-6 shrink-0 mx-auto px-4">
                    <div className="w-28 sm:w-32 md:w-40 lg:w-48 rounded-full overflow-hidden shadow-xl ring-1 ring-black/5
                        bg-white dark:bg-zinc-900">
                        <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="avatar" />
                    </div>
                    <div className="inline-flex gap-4 ">
                         <a 
                        href="https://www.linkedin.com/in/athena-meng-93a970173/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10"
                        >
                        <img src={`${import.meta.env.BASE_URL}LinkedIn.png`} alt="Linkedin" />
                        </a>
                        <a 
                        href="https://github.com/Chao-Meng" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10"
                        >
                        <img src={`${import.meta.env.BASE_URL}github.svg.png`}alt="Github" />
                        </a>

                        
                    </div>
                </div>
                <div className="flex flex-col gap-6 max-w-3xl mx-auto px-4">
                    <div>
                    {/* <h3 className="text-1xl/tight md:text-2xl/tight font-bold">About Me</h3> */}
                    <p className="text-zinc-600 dark:text-zinc-300 max-w-prose text-left space-y-4 py-6">As a software developer with a strong foundation in engineering, I bring a unique perspective to building digital solutions. My career began in the energy and construction industry, where I designed HVAC and energy systems and managed complex projects.

                        Driven by a passion for technology, I transitioned into software development, completing a Computer Programming diploma at Seneca College and advancing my skills at BrainStation in web development with React, JavaScript, and Node.js. Alongside front-end expertise, I also gained hands-on experience in data analysis and optimization.

                        Currently, I am pursuing a Master’s in Electrical and Computer Engineering at Ontario Tech University, focusing on advanced computing, software systems, and applied optimization. My interdisciplinary background allows me to bridge hardware and software, technical systems and user-focused design.

                        I am seeking opportunities in software development or data analysis, where I can apply my problem-solving skills and technical knowledge to create impactful, scalable solutions.</p>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl  bg-slate-100 dark:bg-slate-900  dark:text-white-600 py-4 grid items-center " >
                
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-slate-400 z-0" />
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-slate-400 z-0" />
                    <div className="relative grid items-start gap-10 md:grid-cols-2 md:col-span-2 py-2">
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 items-center justify-center z-10">
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-teal-600">
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-1xl/tight md:text-2xl/tight font-bold">MEng, Electrical & Computer Engineering </p>
                            <p>GPA:4.22/4.3</p>
                        </div>
                        <div className="text-left space-y-4">
                            <p className="text-1xl/tight md:text-2xl/tight font-bold">Ontario Tech University</p>
                            
                            <div className="list-disc max-w-prose">
                                <li>Foundation of Software Engineering</li>
                                <li>Software Testing and QA </li>
                                <li>Software Security and Dependability</li>
                                <li>Programming Methodology and Abstraction for Engineers</li>
                                <li>Mobile & Pervasive Computing</li>
                                <li>Advanced Engineering Mathematics</li>
                                <li>Engineering Communication and Ethics</li>
                                <li>Project Management</li>
                            </div>
                        </div>
                </div> 
                 <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-slate-400 z-0" />
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-slate-400 z-0" />
                    <div className="relative grid items-start gap-10 md:grid-cols-2 md:col-span-2 py-2">
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 items-center justify-center z-10">
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-teal-600">
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-1xl/tight md:text-2xl/tight font-bold">Diploma,Computer Programming </p>
                            <p>Seneca President's Honour List</p>
                            <p>GPA:3.8/4.0</p>
                        </div>
                        <div className="text-left space-y-4">
                            <p className="text-1xl/tight md:text-2xl/tight font-bold">Seneca College</p>
                            <div className="list-disc max-w-prose">
                                <li>Database Systems</li>
                                <li>Web Programming</li>
                                <li>Object Oriented Programming</li>
                                <li>Software Development Using C++</li>
                                <li>Software Analysis and Design</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Web Programming Tools and Frameworks</li>
                                <li>Data Communications Fund</li>
                                <li>Intro UNIX/Linux and Internet</li>
                            </div>
                        </div>
                </div> 
            
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-slate-400 z-0" />
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l-2 border-dashed border-slate-400 z-0" />
                    <div className="relative grid items-start gap-10 md:grid-cols-2 md:col-span-2 py-2">
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 items-center justify-center z-10">
                            <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-teal-600">
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-1xl/tight md:text-2xl/tight font-bold">MEng, Engineering </p>
                            
                        </div>
                        <div className="text-left space-y-4">
                            <p className="text-1xl/tight md:text-2xl/tight font-bold">Beijing University of Technology</p>
                            <div className="list-disc max-w-prose">
                                <li>Computational Modeling</li>
                                <li>Advanced Thermodynamics</li>
                                <li>Heat Transfer & Fluid Dynamics</li>
                                <li>Energy Systems Design</li>
                            </div>
                        </div>
                </div> 

            </div>

              <div className="flex justify-between gap-10 py-10 ">
                <div className="rounded-xl shadow-md w-[45%] shrink-0 bg-white p-4 ">
                    <div className="h-60">
                        <a href="https://www.coursera.org/account/accomplishments/professional-cert/JUYJTXXFXG46" target="_blank" rel="noopener noreferrer">
                        <img className="w-full h-full object-cover object-center" src="./IBM-DataAnapysis.png" alt="IBM-Data Analyst Professional Certificate" /></a>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold dark:text-zinc-600">IBM-Data Analyst Professional Certificate </h3>
                </div>
                <div className="rounded-xl shadow-md w-[45%] shrink-0 bg-white p-4">
                <div className="h-60">
                    <a href="https://learn.microsoft.com/en-us/users/chaomeng-9095/credentials/4c257564b3212c42?ref=https%3A%2F%2Fwww.linkedin.com%2F " target="_blank" rel="noopener noreferrer">
                        <img className="w-full h-full object-cover object-center" src="./AI-foundation.png" alt="Microsoft-Azure AI Fundamentals" /></a>
                    </div> 
                    <h3 className="mt-2 text-lg font-semibold dark:text-zinc-600">Microsoft-Azure AI Fundamentals</h3>
                </div>   
            </div>


            <div className="space-y-6">
                <h3 className="text-xl font-bold">Tech Stack</h3>

                {/* Frontend */}
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#61DAFB', color:'#000'}}>React</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#38BDF8'}}>Tailwind CSS</span>
                    <span className="px-3 py-1 rounded-lg text-black" style={{background:'#F7DF1E'}}>JavaScript</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#764ABC'}}>Redux</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#646CFF'}}>Vite</span>
                </div>

                {/* Backend */}
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#3776AB'}}>Python</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#000000'}}>Flask</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#FF9800'}}>REST APIs</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#00599C'}}>C++</span>
                    
                </div>

                {/* Data & Optimization */}
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#4D77CF'}}>NumPy</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#150458'}}>Pandas</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#E16737'}}>MATLAB</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#009688'}}>PSO/GA/DE</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#F80000'}}>Oracle</span>
                </div>

                {/* Cloud & Tools */}
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#181717'}}>Git/GitHub</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#FF9900'}}>AWS</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#2496ED'}}>Docker</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#0F9D58'}}>CI/CD</span>
                    <span className="px-3 py-1 rounded-lg text-white" style={{background:'#F24E1E'}}>Figma</span>
                </div>
            </div>

        </section>
        </>
    )
}