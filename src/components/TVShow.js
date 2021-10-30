import React from "react";

function TVShow({show, selectShow}) {
  return (
    <div>
      <br />
      <img src={show.image.medium} onClick={selectShow(show)} alt="show item" />
    </div>
  );
}

export default TVShow;
