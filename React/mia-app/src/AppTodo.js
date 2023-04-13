import { useState } from "react";

var globalId = 0;

export default function App() {
  //Creo useState per l'input e la lista degli input
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createToDo(event) {
    //event passato dalla onSubmit
    event.preventDefault(); //PreventDefault è un metodo della interfaccia Event che non so come ma
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++, checked: false }];
    });
    globalId--; //Non so perchè ma globalId++ è come se venisse esguito più volte, quindi lo diminuisco
  }

  function deleteItem(itemId) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemId));
  }

  function updateItem(itemId) {
    setTodos(
      todos.map((item) => {
        if (item.id === itemId) {
          //Se l'id dell item è uguale a quello che devo aggiornare
          return {
            ...item, //Ritorno le vecchie proprietà di item
            checked: true, //una volta che ci sono i campi, checked viene cambiato di valore
          };
        } else {
          return item;
        }
      })
    );
    console.log(todos);
  }

  return (
    <>
      <form onSubmit={createToDo} align="center">
        <h1>Best to do App</h1>
        <input
          type="text"
          value={task} //{task} viene ripreso ad ogni cambiamento
          onChange={(event) => {
            //onChange è come addEventListener() su javascript, event viene passato dalla funzione, quando si verifica tale evento che viene ascoltato,
            // si attiva la funzione che genera un oggetto contenente alcune informazioni chiamato event
            setTask(event.target.value); //Di questo event c'è una proprietà cioè targhet che contiene chi ha causato l'evento
            //Poi target, essendo una input, ha la proprietà value; questo vuol dire che con event.target.value interndiamo: di questo evento prendi
            //chi l'ha effettuato e leggine il valore
          }}
        />
        <button type="submit">Create to Do</button>
      </form>
      <ul align="center">
        {todos.map((item) => {
          //Fa passare ogni elemento di todos(array) dentro la funzione(anonima)
          return (
            <div key={item.id}>
              <li
                style={item.checked ? { textDecoration: "line-through" } : {}}
              >
                {item.todo}({item.id})
              </li>{" "}
              {/*Le parentesi tonde servono solo per un aspetto estetico: todo(1) invece che todo1 */}
              <button onClick={() => updateItem(item.id)}>Check</button>
              {/*Domandona, perchè scriviamo sempre {() => updateItem(item.id)} cioè un arrow function? penso perchè questo modo di scriverlo permette di passare la funzione
                    a addEventListener("click", funzione) e quindi onClick esegue la arrow funciton il cui scopo è di ritornare la funzione (infatti si potrebbe scriver anche così:
                    () => { return updateItem(item.id)} solo che si omette per far prima) */}
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
