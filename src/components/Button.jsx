// import { useNavigate } from "react-router-dom";

export const Button = (Props) => {
  return (
    <>
      <button
        className=" 
          shadow-lg
          flex 
          justify-between 
          items-center 
          w-72 
          px-7 
          py-3
          button-85
          transitions
          hover:text-slate-300
        "
      >
        <h1 className="text-xl font-semibold font-mono">{Props.text}</h1>
        <Props.icons size={25} />
      </button>
    </>
  );
};
