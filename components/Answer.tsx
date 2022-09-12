import Image from "next/image";
import { useContext } from "react";
import QuizzContext from "../context/Quizz";

interface OptionProps {
  text: string;
  image: string;
}

function textInitials(text: string) {
  const words = text.split(" ");
  return words[0][0] + (words[1] ? words[1][0] : "");
}

const Option = (props: OptionProps) => {
  return (
    <div className="flex items-center gap-4 font-medium text-lg">
      {props.image ? (
        <Image
          className="object-cover rounded-full"
          width={40}
          height={40}
          src={props.image}
        />
      ) : (
        <div className="h-10 w-10 rounded-full bg-blue-50 uppercase leading-10 text-center text-blue-100">
          {textInitials(props.text)}
        </div>
      )}
      {props.text}
    </div>
  );
};

const Answer = () => {
  const quizz = useContext(QuizzContext);

  return (
    <div>
      <div className="bg-black sm:rounded-lg h-64"></div>
      <div className="p-5 sm:p-10 -mt-64">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-10 space-y-5 sm:space-y-10">
            <div className="font-serif font-semibold text-2xl sm:text-3xl">
              {quizz.data?.explanation.text}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
              {quizz.data?.explanation.list.map((item, i) => (
                <Option key={i} text={item.text} image={item.image} />
              ))}
            </div>
          </div>
          <div className="bg-success h-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
