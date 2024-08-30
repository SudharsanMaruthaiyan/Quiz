import { card1 } from "../../../assets/image/image"

const QuizImageQuestion = ({question}) => {
  return (
    <>
      <div className=" p-8 rounded-t-xl">
          <div id="1">
              <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                  <p className=" text-lg font-[poppins]">{question.questionNo}</p>
                  <p className=" text-xl font-[poppins] pt-5">{question.questionText}</p>
              </div>
              <div className="  p-5 rounded-b-lg shadow-lg pt-10 ">
                  <p className=" font-[poppins] text-[#5C6185] pb-5">Select one:</p>
                  <div className=" flex justify-center">
                    <div className=" grid grid-cols-2 md:gap-8 gap-4 md:gap-x-24">
                      <div className=" flex items-center md:gap-12 gap-1 pr-5 md:pr-0">
                        <input type="radio" name="choose" value="1"/>
                        <p className=" md:block hidden">a)</p>
                        <img src={question.imageUrl} alt="" className=" md:w-[100px]" />
                      </div>
                      <div className=" flex items-center md:gap-12 gap-1 pr-5 ">
                        <input type="radio"  value="2" name="choose"/>
                        <p className=" md:block hidden">b)</p>
                        <img src={question.imageUrl2} alt="" className=" md:w-[100px]"/>
                      </div>
                      <div className=" flex items-center md:gap-12 gap-1 pr-5 ">
                        <input type="radio"  value="3" name="choose"/>
                        <p className=" md:block hidden">c)</p>
                        <img src={question.imageUrl3} alt="" className=" md:w-[100px]"/>
                      </div>
                      <div className=" flex items-center md:gap-12 gap-1 pr-5 ">
                        <input type="radio"  value="4" name="choose"/>
                        <p className=" md:block hidden">d)</p>
                        <img src={question.imageUrl4} alt="" className=" md:w-[100px]"/>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default QuizImageQuestion