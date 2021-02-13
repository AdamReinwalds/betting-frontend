import ScrapeList from './components/ScrapeList';
import Navbar from './components/Navbar';

function App () {

    return ( 
    <div className="content">
      <Navbar />
      <div className="header">
        <h1>Upcoming matches</h1>
        <span>The only site that helps gamblers make a profit</span>
        <p>Are you tired of always having the odds against you while betting? Or do you seek an easy way to make profit? 
          Your searching has come to an end, because this guide will show you were you can find profitable odds and when arb betting will be profitable!</p>
      </div>
      <ScrapeList />
    </div>
    );
  
}

export default App;
