import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [repos, setRepos] = useState([{}]);

    useEffect( () => {

        async function getRepos() {
            const response = await fetch("https://api.github.com/users/samiys/repos ");
            const data = await response.json();
            console.log(data);
            setRepos(data);
        }
        getRepos();
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);
    //         setData(json);
    //     })
        }, []);
  return (
    <div className="App">
      <header className="App-header">
          <h1>You can see some Repositories</h1>
        <ul>
            {repos.map((repoObj, ind) => {
                return (<li key={ind}>{repoObj.name}</li>)
            })}
        </ul>
      </header>
    </div>
  );
}

export default App;
