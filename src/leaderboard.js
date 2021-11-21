import Scores from './logtable'

function Leaderboard() {
  return(
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"/>
        <div className="Leaderboard">
        <img alt="hacknight logo" src={logo}/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"/>
          <h1>ACM PESUECC Hacknight 3.0</h1>
          <h1>Leaderboard</h1>
          <br/>
          <Scores />
        </div>
      </>
  );
}

export default Leaderboard;