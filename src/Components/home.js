import React, { useState, useEffect } from "react";
import { createRoutesFromChildren } from "react-router-dom";

let Home = () => {
  let [images, setimages] = useState("");
  const url =
    "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s";
  useEffect(() => {
    let cacheImages=localStorage.getItem('cachedImages');
    if(cacheImages){
      setimages(JSON.parse(cacheImages));
    }
    async function fetchAp1() {
      try{
      let response = await fetch(url);
      let data = await response.json();

      setimages(data.photos.photo);
    localStorage.setItem("cachedImages",JSON.stringify(data.photos.photo))
    }
      catch(err){
        // alert('some error occur')
        console.log(err)
      }
    }
    fetchAp1();
  }, []);
  console.log(images);
  return (
    <div>
      {images && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            width: "88vw",
            height: "100vh",
            overflowX: "scroll",
            boxSizing: "border-box",
            paddingLeft: "25px",
            paddingTop: "20px",
          }}
        >
          {images.map((iteam) => (
            <div
              key={iteam.id}
              style={{
                height: "200px",
                width: "260px",
              }}
            >
              <img
                src={iteam.url_s}
                style={{
                  display: "inline-block",
                  height: "100%",
                  width: "100%",
                }}
              ></img>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
