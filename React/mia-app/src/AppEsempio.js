import logo from './logo.svg';
import './App.css';

function App() {
  const name = "andrea"

  //Dichiaro un array che mappo e filtro dopo
  const arraystudents =[
    {
      nome: "paolo",
      eta:12
    },
    {
      nome: "giorgio",
      eta:21
    },
    {
      nome: "silvio",
      eta:17
    }
  ]

  const result = arraystudents.find((item) => item.nome === "paolo")
  console.log(result)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name} Edit <code>src/App.js</code> and save to reload.
        </p>

        {arraystudents.map((item, index) => ( //Per qualche motivo non si usano le parentesi graffe ma le parentesi tonde
          <div key={index}>
            <p>{item.nome}</p>
            <p>{item.eta}</p>
          </div>
        ))}

        {arraystudents.filter((item) => item.nome != "paolo").map((item) => (
        <>
          <p>{item.nome}</p>
          <p>{item.eta}</p>
        </>
        ))}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
