import React, {useState, useEffect} from 'react';
import firebase from '../util/firebase';
import Match from './Match';

function ScrapeList() {
    const [scrapeList, setScrapeList] = useState();

    useEffect(() => {
        const scrapeRef = firebase.database().ref("scrape-853ad-default-rtdb");
        scrapeRef.on("value",(snapshot) => {
            const scrapes = snapshot.val();
            const scrapeList = []
            for (let id in scrapes){
            scrapeList.push(scrapes[id]);
        }
        setScrapeList(scrapeList);
    });

  }, []);
    return(
        <div className="matches"> 
            {scrapeList
            ? scrapeList[0].map((match, index) => <Match matchData={match} key={index} />) 
            : ''}
        </div>

    );
}
export default ScrapeList;