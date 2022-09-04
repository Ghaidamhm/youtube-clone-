import "../styles/ExploreCard.css";

interface Porps {
  imgSrc: string;
  title: string;
}

const ExploreCard = ({ imgSrc, title }: Porps) => {
  return (
    <div className="exploreCard">
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ExploreCard;
