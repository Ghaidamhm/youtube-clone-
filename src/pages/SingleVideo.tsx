import "../styles/SingleVideo.css";
import Navbar from "../components/Navbar";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiOutlineDownload,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getVideos, reset } from "../app/redux/videos/videosSlice";
import Video from "../components/Video";
import { useParams } from "react-router-dom";

interface IVideo {
  title: string;
  channelTitle: string;
  publishedAt: string;
}
interface IVideoStats {
  viewCount: string;
  likeCount: string;
}

const SingleVideo = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const { videos, isSuccess } = useAppSelector((state) => state.videos);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [data, setData] = useState<IVideo>({
    title: "",
    channelTitle: "",
    publishedAt: "",
  });
  const [statistics, setStatistics] = useState<IVideoStats>({
    viewCount: "",
    likeCount: "",
  });

  // reset the state
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  // get the videos
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  useEffect(() => {
    const getVideoById = async () => {
      const API_KEY = "AIzaSyAderoPP5YCBaSigoo0hrnfXwWnJV48UjA";
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
      );
      const data = await res.json();

      setData(data.items[0].snippet);
      setStatistics(data.items[0].statistics);
    };
    getVideoById();
  }, [id]);

  return (
    <div className="singleVideo">
      <Navbar />
      <main>
        <div className="singleVideo__left">
          <div className="singleVideo__video">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title={data.title}
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>
          <div className="singleVideo__info">
            <div className="singleVideo__title">{data.title}</div>
            <div className="singleVideo__vidData">
              {statistics.viewCount} views - {data.publishedAt}
            </div>
            <div className="singleVideo__channel">
              <div className="singleVideo__channel-name">
                Channel: {data.channelTitle}
              </div>
              <div className="singleVideo__channel-likes">
                <div
                  onClick={() => setLiked(!liked)}
                  className="singleVideo__likesItem"
                >
                  {liked ? <AiFillLike /> : <AiOutlineLike />}{" "}
                  {statistics.likeCount}
                </div>
                <div className="singleVideo__likesItem">
                  <AiOutlineDislike /> Dislike
                </div>
                <div className="singleVideo__likesItem">
                  <AiOutlineShareAlt /> Share
                </div>
                <div className="singleVideo__likesItem">
                  <AiOutlineDownload /> Download
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="singleVideo__right">
          {videos.slice(0, 5).map((video) => {
            const {
              id,
              snippet: {
                channelTitle,
                title,
                publishedAt,
                thumbnails: {
                  medium: { url },
                },
              },
              statistics: { viewCount },
            } = video;
            return (
              <Video
                key={id}
                imgUrl={url}
                id={id}
                channelTitle={channelTitle}
                title={title}
                publishedAt={publishedAt}
                viewCount={viewCount}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default SingleVideo;
