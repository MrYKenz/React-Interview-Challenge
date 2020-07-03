import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Search from './components/Search';
import Matches from './components/Matches';
// material ui imports
import Grid from '@material-ui/core/Grid';
// mock API data
import holdings from './holdings.json' // replicates fetched API data
import notifications from './matches.json' // replicates fetched API data


function App() {
   // replicates user object for authentication
  const [user, setUser] = useState('hello@example.com');
  const [matches, setMatches] = useState(notifications);

  const onChange = event => {
    const query = event.target.value;
		if (query) {
      setMatches(matches.filter(item => item.name.includes(query.toUpperCase())));
		} else {
			setMatches(notifications)
    }
  }

  return (
    <div className="App">

      <header className="App-header">
        Trading Platform
        <span>
          { user ? `Logged in as: ${user}` : 'Logged Out'}
        </span> 
        <button onClick={() => setUser('')}>
          Log Out
        </button>
      </header>

      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Display data={holdings} />
        </Grid>

          <Grid item xs={8}>
            <Search onChange={onChange} />
            <Matches data={matches} />
          </Grid>
      </Grid>

    </div>
  );
}

export default App;
