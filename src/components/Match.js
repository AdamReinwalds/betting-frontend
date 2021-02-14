import React from "react";

function roundToDecimal(num) {    
    return +(Math.round(num + "e+1")  + "e-1");
}

function Match({ matchData }) {
  const maxOdds1 = Math.max(...matchData.team1);
  const maxOdds2 = Math.max(...matchData.team2);
  const margin = 1 - (1 / maxOdds1 + 1 / maxOdds2);
  return (
    <div className="box">
      <div className="team-names">
        <h3>One team</h3>
        <h3> </h3>
        <h3>The other team</h3>
      </div>
      <div className="match-odds">
        <span className="team team1"> Best odds for team: {maxOdds1}</span>
        <span>Total margin: {roundToDecimal(margin * 100)}%</span>
        <span className="team team2"> Best odds for team: {maxOdds2}</span>
      </div>
      <div className="links">
        <a href="hltv.org">Bet on team</a>
        <a href=" "> </a>
        <a href="www.rekab.nu">Bet on team</a>
      </div>
    </div>
  );
}
export default Match;
