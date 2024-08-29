import { QuizPrecentage } from "../../../assets/Api/QuizPrecentage";
import QuizNavigation from "../QuizNavigation/QuizNavigation";
import QuizProgressCard from "../QuizProgressCard/QuizProgressCard";
import QuizQuestions from "../QuizQuestions/QuizQuestions";
const QuizDetails = () => {
  return (
    <div className=' max-w-[100%}'>
      <div className=' w-[90%] mx-auto py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className="lg:order-1 order-2 col-span-4 lg:col-span-1">
              {
                QuizPrecentage.map((e,index)=>{
                  return(
                    <>
                      <div key={index}>
                        <QuizProgressCard progress={e.progress}
                        percentage={e.percentage}
                        />
                      </div>
                    </>
                  )
                })
              }
              <div className=" flex justify-center">
                <QuizNavigation/>
              </div>
          </div>
          <div className='lg:order-2 order-1 col-span-4 lg:col-span-3 bg-[#f7f8fbb1] p-5 lg:p-12 rounded-3xl'>
              <div>
                <h1 className=" font-bold font-[poppins] text-3xl">Quiz</h1>
                <ul className=" flex flex-wrap gap-3 pt-3">
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">Home</a>
                    <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">All courses</a>
                  <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">User Experience Design</a>
                  <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">User Interface</a>
                  <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                </ul>
              </div>
              <div className="">
                <QuizQuestions/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizDetails