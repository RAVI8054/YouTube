import "./HomePage.css";
import { v4 as uuidv4 } from "uuid";

function HomePage() {
  //options filter Array for body contect catgory
  const options = [
    "Music",
    "Gaming",
    "News",
    "Education",
    "Science & Technology",
    "Entertainment",
    "Sports",
    "Comedy",
    "How-to & Style",
    "People & Blogs",
    "Travel & Events",
    "Film & Animation",
    "Autos & Vehicles",
    "Pets & Animals",
    "Nonprofits & Activism",
    "Shows",
    "Shorts",
    "Live",
    "Documentary",
  ];

  return (
    <div className="homepage">
      <div className="homePage_options">
        {options.map((item) => {
          return (
            <div className="homePage_option" key={uuidv4()}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
