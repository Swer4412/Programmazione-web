import React, {useState, createContext}  from 'react';
import './App.css';
import Header from './Header';

//Questa riga serve per definire la struttura di value, così diciamo che value contiene una variabile _theme:stringa, toggle:funzione
//Dobbiamo quindi mettere dentro value questa struttura
export const ThemeContext = createContext({_theme: "light", toggle: ()=>{}})

function App() {

  const [theme, setTheme] = useState("light")

  //Devo definire questa funzione se no, mi da problemi
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    //_theme = allo useState, toggle = funzione che modifica qullo state
    //Dentro il valore value posso mettere dentro anche un oggetto, per poi prendere un elemento di questo oggetto basta utilizzare il destructuring
    <ThemeContext.Provider value={{_theme:theme, toggle: toggleTheme}}>
    {/*Dentro i tag di ThemeContext.Provider bisonga mettere tutti i componenti che necessitano di value*/}
    <div className="App">
      <Header/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
