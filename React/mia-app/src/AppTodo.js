import { useState } from "react"
//Ul,
//Mappa questo array items.map --> <li>elemento</li>
//On click lo checked diventa true
//Click sul cestino: elimina
// 3 funzioni --> add update delete

function App() {
    const [items, setItems] = useState([
        {
            id:1,
            label:"prova",
            checked:false
        }
    ])
    
    //add
    const Add = () => {
        setItems([
            ...items,
            {
                id:2,
                label:"",
                checked:false
            }
        ])
    }

    //Delete
    const Delete = (id) => { //accetta il parametro id
    setItems(items.filter( (item) => { //Utilizzo la funzione setItems per modificare il valore della array items
        //item.id !== id //Come items devo mettere dentro items filtrato, se trova l'id, non lo mette
    }))
}

    //Update
    const Update = (id) => {
    setItems(items.map((item) => {
        if (item.id ===id) {
            return {
                ...item,
                status:false
            }
        } else {
            return item;
        }
    }))
}

    return (
        <>
        <input id="input"></input>
        <button onClick={() => Add()}>Aggiungi</button>
        <hr/>
        <div id="list">
            <ul> {/*Non so perchè ma map vuole una funzione con le tonde, non le graffe */}
            {/*Bisogna usare l'arrow function se no, la funzione viene eseguita ad ogni re-render*/}
                {items.map((item) => ( 
                    <div style={{display:"flex"}}>
                    <button onClick={ () => Delete(item.id)}>Elimina</button>
                    <button type="checkbox" onClick={ () => Update(item.id)}></button>
                    <li style={item.checked ? {textDecoration:"line-trough"} : {} }>
                        {item.label}
                    </li>
                    </div>
                ))}
            </ul>
        </div>  
        </>
    );
}


export default App