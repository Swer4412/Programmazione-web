function App() {

    const [number, setNumber] = useState(0)

    let counter = useRef(0)

    const focusInput = useRef(null)

    function handleClick() {
        setNumber(number + 1);
        console.log("Number: ", number)
        focusInput.current.focus();
    }

    useEffect(() => {
        counter.current= counter.current + 1
        console.log("counter" + counter.current)
    })

    return <> 
        <input type="text" name="renderNumber" ref={focusInput}></input> {/*ref è un tag di react che serve per collegare il tag
        input con il useRef  */}
        <button onClick={handleClick}>Click me</button>
    </>
    
}