import { useState } from "react"

const QuizQuestions = () => {
    const [change, setChange] = useState(false);
    const [change2, setChange2] = useState(false);
    const [change3, setChange3] = useState(false);
    const [change4, setChange4] = useState(false);
    const [change5, setChange5] = useState(false);
  return (
    <>
        <div className=" shadow-2xl mt-12 rounded-t-xl"> 
            <div className=" rounded-t-2xl">
                <h1 className=" font-bold font-[poppins] border-b-2 p-5 pl-8">Quiz</h1>
                <div>
                    <div className=" p-8 shadow-2xl rounded-t-xl">
                        <div id="1">
                            <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                                <p className=" text-lg font-[poppins]">Question 1</p>
                                <p className=" text-xl font-[poppins] pt-5">You are watching the TV news and see this appear on the screen:</p>
                            </div>
                            <div className="  p-5 rounded-b-lg shadow-lg pt-10">
                                <p className=" font-[poppins] text-[#5C6185]">Select one:</p>
                                <div className=" flex gap-3 pt-5">
                                    <input type="radio" id="1" name="1" value="1" className=" "/>
                                    <p className=" font-[poppins] text-[15px] text-[#5C6185]">a. A tweet</p>
                                </div>
                                <div className=" flex gap-3 pt-5">
                                    <input type="radio" id="1" name="1" value="2" className=" "/>
                                    <p className=" font-[poppins] text-[15px] text-[#5C6185]"> b. A hashtag</p>
                                </div>
                                <div className=" flex gap-3 pt-5">
                                    <input type="radio" id="1" name="1" value="3" className=""/>
                                    <p className=" font-[poppins] text-[15px] text-[#5C6185]"> c. A tag</p>
                                </div>
                                <div className="pt-5">
                                    <div className=" flex justify-end">
                                        <button onClick={()=> setChange(!change)} className="font-bold font-[poppins]">Answer</button>
                                    </div>
                                    <div className={`py-5 ${change?' block transition' : ' hidden '}`}>
                                        <h1 className=" font-bold font-[poppins] pl-3 rounded-t-lg bg-[#1176F0] text-white  py-2">Solution</h1>
                                        <p className=" font-[poppins] text-sm pt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempore vitae, error aut odit facilis sunt reprehenderit quibusdam, explicabo eveniet eos obcaecati autem laboriosam, vel quam velit voluptatibus. A, esse!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className=" pt-10" id="2">
                            <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                                <p className=" text-lg font-[poppins]">Question 2</p>
                                <p className=" text-xl font-[poppins] pt-5">Complete the sentences:</p>
                            </div>
                            <div className="  p-5 rounded-b-lg shadow-lg ">
                                <div className=" flex items-center gap-3 flex-wrap">
                                    <label htmlFor="" className=" font-[poppins] text-[#5C6185] text-wrap pr-16">If I want to send short messages of under 140 characters, I use</label>
                                    <input type="type" className=" outline-none rounded-lg p-4  border-2" placeholder=" Text..."/>
                                </div>
                                <div className=" flex items-center gap-3 py-5 flex-wrap">
                                    <label htmlFor="" className=" font-[poppins] text-[#5C6185] text-wrap pr-16">If I want to quickly share pictures I can use</label>
                                    <input type="type" className=" outline-none rounded-lg p-4 border-2 " placeholder=" Text..."/>
                                </div>
                                <div className=" flex items-center gap-3 pb-5 flex-wrap">
                                    <label htmlFor="" className=" font-[poppins] text-[#5C6185] text-wrap pr-16">If I want to do a videochat on my iPhone I can use</label>
                                    <input type="type" className=" outline-none rounded-lg p-4 border-2 " placeholder=" Text..."/>
                                </div>
                                <div className="pt-5">
                                    <div className=" flex justify-end">
                                        <button onClick={()=>setChange2(!change2)} className="font-bold font-[poppins]">Answer</button>
                                    </div>
                                    <div className={`py-5 ${change2?' block transition' : ' hidden '}`}>
                                        <h1 className=" font-bold font-[poppins] pl-3 rounded-t-lg bg-[#1176F0] text-white  py-2">Solution</h1>
                                        <p className=" font-[poppins] text-sm pt-3 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempore vitae, error aut odit facilis sunt reprehenderit quibusdam, explicabo eveniet eos obcaecati autem laboriosam, vel quam velit voluptatibus. A, esse!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className=" pt-10" id="3">
                            <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                                <p className=" text-lg font-[poppins]">Question 3</p>
                                <p className=" text-xl font-[poppins] pt-5">A short message on Twitter is called a ?????</p>
                            </div>
                            <div className="  p-5 rounded-b-lg shadow-lg ">
                                <div className=" flex items-center gap-3 ">
                                    <label htmlFor="" className=" font-[poppins] text-[#5C6185] text-wrap pr-16">Answer</label>
                                    <input type="type" className=" outline-none rounded-lg p-4  border-2 w-full" placeholder=" Text..."/>
                                </div>
                                <div className="pt-5">
                                    <div className=" flex justify-end">
                                        <button onClick={()=> setChange3(!change3)} className="font-bold font-[poppins]">Answer</button>
                                    </div>
                                    <div className={`py-5 ${change3?' block transition' : ' hidden '}`}>
                                        <h1 className=" font-bold font-[poppins] pl-3 rounded-t-lg bg-[#1176F0] text-white  py-2">Solution</h1>
                                        <p className=" font-[poppins] pt-3 px-3 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempore vitae, error aut odit facilis sunt reprehenderit quibusdam, explicabo eveniet eos obcaecati autem laboriosam, vel quam velit voluptatibus. A, esse!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className=" pt-10" id="4">
                            <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                                <p className=" text-lg font-[poppins]">Question 4</p>
                                <p className=" text-xl font-[poppins] pt-5">Match the icons to their sites.</p>
                            </div>
                            <div className="  p-5 rounded-b-lg shadow-lg ">
                                <div className=" flex items-center gap-3 ">
                                    <label htmlFor="" className=" font-[poppins] text-[#5C6185] text-wrap pr-16">Answer</label>
                                    <input type="type" className=" outline-none rounded-lg p-4  border-2 w-full" placeholder=" Text..."/>
                                </div>
                                <div className="pt-5">
                                    <div className=" flex justify-end">
                                        <button onClick={()=>setChange4(!change4)} className="font-bold font-[poppins]">Answer</button>
                                    </div>
                                    <div className={`py-5 ${change4?' block transition' : ' hidden '}`}>
                                    <h1 className=" font-bold font-[poppins] pl-3 rounded-t-lg bg-[#1176F0] text-white py-2">Solution</h1>
                                        <p className=" px-3 pt-3 font-[poppins] text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempore vitae, error aut odit facilis sunt reprehenderit quibusdam, explicabo eveniet eos obcaecati autem laboriosam, vel quam velit voluptatibus. A, esse!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className=" pt-10" id="5">
                            <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                                <p className=" text-lg font-[poppins]">Question 5</p>
                                <p className=" text-xl font-[poppins] pt-5">Facebook was founded in 2005.</p>
                            </div>
                            <div className="  rounded-b-lg shadow-lg p-5">
                                <div className="  ">
                                    <p className=" font-[poppins] text-[#5C6185]">Select one:</p>
                                    <div className=" flex gap-3 pt-5">
                                        <input type="radio" id="1" name="1" value="1" className=" "/>
                                        <p className=" font-[poppins] text-[15px] text-[#5C6185]">True</p>
                                    </div>
                                    <div className=" flex gap-3 pt-5">
                                        <input type="radio" id="1" name="1" value="2" className=" "/>
                                        <p className=" font-[poppins] text-[15px] text-[#5C6185]"> False</p>
                                    </div>
                                </div>
                                <div className="pt-5">
                                    <div className=" flex justify-end">
                                        <button onClick={()=>setChange5(!change5)} className="font-bold font-[poppins]">Answer</button>
                                    </div>
                                    <div className={`py-5 ${change5?' block transition' : ' hidden '}`}>
                                        <h1 className=" font-bold font-[poppins] pl-3 rounded-t-lg bg-[#1176F0] text-white py-2">Solution</h1>
                                        <p className=" px-3 pt-2 font-[poppins] text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempore vitae, error aut odit facilis sunt reprehenderit quibusdam, explicabo eveniet eos obcaecati autem laboriosam, vel quam velit voluptatibus. A, esse!</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default QuizQuestions