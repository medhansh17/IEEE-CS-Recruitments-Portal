type InputProps = {
  setAnsArr: React.Dispatch<React.SetStateAction<string[]>>;
  ansArr: string[];
  questionNumber: number;
};

const Input = ({ setAnsArr, ansArr, questionNumber }: InputProps) => {
  return (
    <div>
      <textarea
        onChange={(e) => {
          setAnsArr((prev: string[]) => {
            const newArr = [...prev];
            newArr[questionNumber - 1] = e.target.value;
            return newArr;
          });
        }}
        value={ansArr[questionNumber - 1]}
        className="h-[40vh] w-full p-5 text-lg resize-none shadow-3xl border-main-blue border-2 focus:outline-none focus:border-4 bg-main-blue bg-opacity-50 backdrop-blur-[2px] focus:backdrop-blur-[3px] rounded-xl my-8 text-start"
      />
    </div>
  );
};

export default Input;