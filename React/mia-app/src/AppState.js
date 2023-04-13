import {useState, useEffect} from "react"



function App(){
    //Il primo è una variabile, il secondo è una funzione per modificare la variabile
    const [counter, setCounter] = useState(0);
    
    // Esegue la funzione una volta che un elemento dell'array [counter] viene aggiornato, come se ne tenesse traccia
    useEffect(() => {
        document.title=counter
    }, [counter])

    return(
        <>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>CLICCAMI</button>
        </>
    )
}

export default App