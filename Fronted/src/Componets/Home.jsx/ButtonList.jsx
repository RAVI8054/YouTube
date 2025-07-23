import { v4 as uuidv4 } from "uuid";
const buttonList = [
  "all",
  "music",
  "videos",
  "javscript",
  "news",
  "trading",
  "live",
  "songs",
  "vlogs",
  "job",
];
function ButtonList() {
  return (
    <div>
      {buttonList.map((ButtonName) => {
        return (
          <button
            key={uuidv4()}
            className="bg-gray-200 mx-2 font-medium px-4 py-1 rounded-lg"
          >
            {ButtonName}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonList;
