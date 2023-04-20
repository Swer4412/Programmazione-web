import { useContext } from "react";
import { ThemeContext } from "./App";

interface ToggleDarkModeProps{
    //theme:string
}

const ToggleDarkMode : React.FC<ToggleDarkModeProps> = ({}) => {
    //Riprendo i due valori _theme e toggle che ho definito in themeContext
    const {_theme, toggle} = useContext(ThemeContext)

    return (
        <div>
            <p>{_theme}</p>
            <button onClick={toggle}></button>
        </div>
    );
}