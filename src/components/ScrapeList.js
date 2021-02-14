import React, { useState, useEffect } from "react";
import firebase from "../util/firebase";
import Match from "./Match";

function ScrapeList() {
  const [scrapeList, setScrapeList] = useState();

  useEffect(() => {
    const scrapeRef = firebase.database().ref("odds");
    scrapeRef.on("value", (snapshot) => {
      const scrapes = snapshot.val();
      const scrapeList = [];
      for (let id in scrapes) {
        scrapeList.push(scrapes[id]);
      }
      setScrapeList(scrapeList);
    });
  }, []);
  
  let arr = [];

  if (scrapeList) {
    for (let obj in scrapeList[0]) {
      arr.push(scrapeList[0][obj]);
    }
  }

  return (
    <div className="matches">
      {arr
        ? arr.map((match, index) => <Match matchData={match} key={index} />)
        : ""}
    </div>
  );
}
export default ScrapeList;
