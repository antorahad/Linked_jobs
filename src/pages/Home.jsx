import { RiSearchLine } from 'react-icons/ri';
import { HiOutlineLocationMarker } from "react-icons/hi";
const Home = () => {
    return (
        <main>
            <section className="bg-slate-100 px-5 py-10">
                <div className="min-h-screen md:min-h-[350px] w-full container mx-auto flex flex-col justify-center gap-7">
                    <h1 className="text-[56px] font-[700] capitalize">Find your <span className="text-textBase">new job</span> today</h1>
                    <p className="text-[18px] text-[#000000B2] font-[400]">Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
                    <div className="hidden lg:flex join rounded-none">
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="input input-bordered join-item border-none focus:outline-none outline-none pl-10"
                                    placeholder="Search Jobs"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <RiSearchLine className="h-5 w-5 text-textBase" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="input input-bordered join-item border-none focus:outline-none outline-none pl-10"
                                    placeholder="Your Location"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <HiOutlineLocationMarker className="h-5 w-5 text-textBase" />
                                </div>
                            </div>
                        </div>
                        <button className="btn join-item px-7 py-1 bg-textBase hover:bg-textBase focus:bg-textBase text-white">Search</button>
                    </div>
                    <div className='flex flex-col lg:hidden gap-5'>
                        <div className="relative">
                            <input
                                type="text"
                                className="input input-bordered border-none focus:outline-none outline-none pl-10 w-full"
                                placeholder="Search Jobs"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <RiSearchLine className="h-5 w-5 text-textBase" />
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                className="input input-bordered border-none focus:outline-none outline-none pl-10 w-full"
                                placeholder="Search Jobs"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <HiOutlineLocationMarker className="h-5 w-5 text-textBase" />
                            </div>
                        </div>
                        <button className="btn join-item px-7 py-1 bg-textBase hover:bg-textBase focus:bg-textBase text-white">Search</button>
                    </div>
                </div>
            </section>
            <section className='flex items-center justify-between container mx-auto px-5 py-10'>
                <div>Left</div>
                <div>Middle</div>
                <div>Right</div>
            </section>
        </main>
    );
};

export default Home;