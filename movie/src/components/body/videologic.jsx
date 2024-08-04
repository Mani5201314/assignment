import React, { useState } from "react";
import "./Videologic.css";
import { Link } from "react-router-dom";

const VideosLogic = ({ videos_data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videos_data);

  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredData = videos_data.filter(
      data =>
        data.original_title.toLowerCase().includes(searchTerm) ||
        data.popularity.toString().toLowerCase().includes(searchTerm)
    );
    setFilteredVideos(filteredData);
  };

  return (
    <div>
      <h1 className="mt-3 mb-4">
        <Link id="hloo" to="">
          Love U Movies
        </Link>
      </h1>
      <div id="search">
        <h3 style={{ color: "blue" }}> Search :</h3>
        <input
          id="searchs"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="videos_logic">
        {filteredVideos.map(data => (
          <div className="video" key={data.id}>
            <div className="thumb">
              <img
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path} `}
                alt=""
              />
            </div>
            <div className="detail">
              <div className="icon">
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path} `}
                  alt=""
                />
              </div>

              <div className="title1">
                <div>{data.original_title}</div>
                <div>Views: {data.popularity} M</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosLogic;
