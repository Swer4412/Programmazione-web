import { useContext } from "react";
import { ThemeContext } from "./App";

//Questo componente è un bottone che si comporta come switch per il tema dark o light
export const ToggleDarkMode = ({}) => {
    //Riprendo i due valori _theme e toggle che ho definito in themeContext
    //useContext prende come parametro un Context e ne ritorna il value
    //Utilizzo il destructuring perchè almeno non devo scrivere: const context... e richiamare con context._theme e context.toggle
    const {_theme, toggle} = useContext(ThemeContext)
    

    return (
        <div>
            <p>{_theme}</p>
            <button onClick={toggle}></button>
        </div>
    );
}