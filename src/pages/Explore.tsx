import "../styles/Explore.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ExploreCard from "../components/ExploreCard";
import ExploreVideo from "../components/ExploreVideo";
import trendIcon from "../photo/trending_exp.png";
import musicIcon from "../photo/music_exp.png";
import liveIcon from "../photo/live_exp.png";
import gamingIcon from "../photo/gaming_exp.png";
import sportsIcon from "../photo/sports_exp.png";
import vidPic1 from "../photo/React.jpg";
import vidPic2 from "../photo/jsCourse.jpg";
import vidPic3 from "../photo/redux.png";

const Explore = () => {
  return (
    <div className="explore">
      <Navbar />
      <main>
        <Sidebar />
        <div className="explore__content">
          <div className="explore__options">
            <ExploreCard imgSrc={trendIcon} title="trending" />
            <ExploreCard imgSrc={musicIcon} title="music" />
            <ExploreCard imgSrc={liveIcon} title="live" />
            <ExploreCard imgSrc={gamingIcon} title="gaming" />
            <ExploreCard imgSrc={sportsIcon} title="sports" />
          </div>
          <span className="explore__line" />
          <div className="explore__videos">
            <h1>Trending videos</h1>
            <ExploreVideo
              imgUrl={vidPic1}
              title={"React JS - React Tutorial for Beginners"}
              description={
                "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world!"
              }
              channel={"Academy"}
              views={"150k"}
              timeAgo={"2 deys ago"}
            />
            <ExploreVideo
              imgUrl={vidPic2}
              title={"Javascript for Beginners | Tutorial FreeCodeCamp"}
              description={
                "Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version!"
              }
              channel={"freeCodeCamp"}
              views={"390k"}
              timeAgo={"1 week ago"}
            />
            <ExploreVideo
              imgUrl={vidPic3}
              title={"Learn Redux (with Hooks) Crash Course"}
              description={
                "This is a 45-minute crash course aimed to teach you React Redux in great detail!"
              }
              channel={"Programming"}
              views={"90k"}
              timeAgo={"6 deys ago"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
