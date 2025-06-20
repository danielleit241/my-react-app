import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  console.log("account", account);
  console.log("isAuthenticated", isAuthenticated);

  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="header">There's a better way to ask</div>
        <div className="sub-header">
          Collect all the data you need to understand customers with forms
          designed to be refreshingly different.
        </div>
        <div className="button-container">
          <button>Get Started. It's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
