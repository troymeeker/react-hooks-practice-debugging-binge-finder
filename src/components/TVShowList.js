import React from "react";
import TVShow from "./TVShow"
import { Grid } from "semantic-ui-react";

function TVShowList({shows, selectShow, searchTerm}) {
  function mapAllShows() {
    if (!!searchTerm) {
      return shows
      .filter((s) => s.name.toLowerCase().includes(searchTerm))
      .map((s) => {
        return <TVShow show={s} key={s.id} selectShow={selectShow}/>
  
      });
    }
    return shows.map((s) => (
      <TVShow show={s} key={s.id} selectShow={selectShow} />
    ));
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
