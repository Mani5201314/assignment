import { useEffect, useState } from "react";
import VideosLogic from "./videologic";

const Videos = () => {
  let [videos, setUser] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/results");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div className="videos">
      <VideosLogic videos_data={videos} />
    </div>
  );
};

export default Videos;
