import React, {useState, createContext}  from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

//definisco _theme come stringa (valore iniziale light) e toggle come funzione(scritta così è uguale a function())
export const ThemeContext = createContext({_theme: "light", toggle: ()=>{}})

function App() {

  const [theme, setTheme] = useState("light")

  //Devo definire questa funzione se no, mi da problemi
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    //_theme = allo useState, toggle = funzione che modifica qullo state
    <ThemeContext.Provider value={{_theme:theme, toggle: toggleTheme}}>
    <div className="App">
      <Header/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
