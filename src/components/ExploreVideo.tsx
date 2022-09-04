import "../styles/ExploreVideo.css";

interface Props {
  title: string;
  description: string;
  channel: string;
  views: string;
  timeAgo: string;
  imgUrl: string;
}

const ExploreVideo = ({
  title,
  description,
  channel,
  views,
  timeAgo,
  imgUrl,
}: Props) => {
  return (
    <div className="exploreVideo">
      <div className="exploreVideo__img">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="exploreVideo__info">
        <div className="exploreVideo__title">{title}</div>
        <div className="exploreVideo__about">
          <div className="exploreVideo__about-name">{channel}</div>
          <div className="exploreVideo__about-views">{views} views</div>
          <div className="exploreVideo__about-time">{timeAgo}</div>
        </div>
        <div className="exploreVideo__desc">{description}</div>
      </div>
    </div>
  );
};

export default ExploreVideo;
