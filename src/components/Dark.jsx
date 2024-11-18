import DarkIcon from "../assets/moon-solid.svg";
import LightIcon from "../assets/sun-solid.svg";

const Dark = ({ dark, setDark }) => {
  return (
    <div className="bg-black/20 rounded-full">
      <button
        className="p-2 hover:bg-white/30 hover:cursor-pointer rounded-full"
        onClick={() => {
          localStorage.setItem("dark", JSON.stringify(!dark));
          setDark(!dark);
        }}
      >
        {dark ? (
          <img src={LightIcon} alt="Set light mode" className="w-6 h-6" />
        ) : (
          <img src={DarkIcon} alt="Set dark mode" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default Dark;
