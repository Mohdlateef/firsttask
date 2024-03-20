import React from "react";

let Home = () => {
     
      const url= "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s"
  async function fetchAp1() {
    let response = await fetch(url)
    let data=await response.json()
    console.log(data)
  }
  fetchAp1();
  return(
    <div>
       
        
            
        
    </div>
  )
};


export default  Home;