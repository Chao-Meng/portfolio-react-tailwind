export default function Projects(){

    return(
        <> 
        <h2 className="text-3xl font-bold mb-10 text-center pt-16"> My Related Works</h2>
        <section className="overflow-x-auto flex nowrap gap-6  ">
            <div className="rounded-xl shadow-md w-[40%] shrink-0 bg-white p-4 ">
                <div className="h-60">
                    <img className="w-full h-full object-cover object-center" src="./sensor-placement.png" alt="sensor-placement" />
                </div>
                <h3 className="mt-2 text-lg font-semibold dark:text-zinc-600">Smart Building Sensor Placement Simulation Tool </h3>
                <p className="text-sm text-gray-600">Web Application</p>
            </div>
            <div className="rounded-xl shadow-md w-[40%] shrink-0 bg-white p-4">
               <div className="h-60">
                    <img className="w-full h-full object-cover object-center" src="./DashboardPage.png" alt="Energy Monitor Platform" />
                </div> 
                <h3 className="mt-2 text-lg font-semibold dark:text-zinc-600">Energy Monitor Platform</h3>
                <p className="text-sm text-gray-600">Web Application</p>
            </div>
            <div className="rounded-xl shadow-md w-[40%] shrink-0 bg-white p-4">
                <div className="h-60">
                    <img className="w-full h-full object-cover object-center" src="./coffee-shop.png" alt="" />
                </div> 
                <h3 className="mt-2 text-lg font-semibold dark:text-zinc-600">Coffee Shop</h3>
                <p className="text-sm text-gray-600">Web Application</p>
            </div>
            <div className="rounded-xl shadow-md w-[40%] shrink-0 bg-white p-4">
                <div className="h-60">
                    <img className="w-full h-full object-cover object-center" src="./travel-site.png" alt="" />
                </div> 
                <h3 className="mt-2 text-lg font-semibold dark:text-zinc-600">Travel Site</h3>
                <p className="text-sm text-gray-600">Web Application</p>
            </div>
        </section>
        </>
    )
}