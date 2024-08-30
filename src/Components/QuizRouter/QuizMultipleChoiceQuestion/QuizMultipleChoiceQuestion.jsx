import ProgressBar from "@ramonak/react-progress-bar"
import { useState } from "react";
const QuizMultipleChoiceQuestion = ({question}) => {
    const [progress, setProgress] = useState(50);
    // const maxValue = 100;
  return (
    <>
        <div className=" p-8 rounded-t-xl">
            {/* <div>
                <ProgressBar completed={progress} />
            </div> */}
            <div id="1">
                <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                    <p className=" text-lg font-[poppins]">{question.questionNo}</p>
                    <p className=" text-xl font-[poppins] pt-5">{question.questionText}</p>
                </div>
                <div className="  p-5 rounded-b-lg shadow-lg pt-10">
                    <p className=" font-[poppins] text-[#5C6185] pb-5">Select one:</p>
                    <ul>
                        {question.options.map((option, index) => (
                            <div className=" flex items-center gap-5">
                                <input  onClick={() => setProgress(progress + 10)} className=" mb-3" type="radio" name="choose" value={index}/>
                                <li key={index} className=" pb-3 font-[poppins] text-[15px] text-[#5C6185]">{option}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuizMultipleChoiceQuestion