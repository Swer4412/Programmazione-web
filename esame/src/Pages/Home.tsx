import { FC, useEffect, useState } from 'react';

const Home: FC = () => {

    const [newsData, setNewsData] = useState<any>() //Sono stato qua 4 giorni a guardare tutorial e chiedere a chat gpt, giuro non riesco a capire cosa devo scrivere
    //Non so se toglierò mai il tipo any da qui

    useEffect(() => { //L'api ha un limitatore mensile quindi dato che non so quante richieste farò, è meglio creare un api con un risultato di test
        fetch("http://127.0.0.1:4000/ApiTest") //http://api.mediastack.com/v1/news?access_key=a0d6c5b4493c2f8f1b7e701ab8174e8e
            .then(res => res.json())
            .then(data => {
                setNewsData(data);
            }
            )
    }, [])

    return (
        <div>
            {!newsData && !newsData.data ? 
                <p>Loading...</p>
                : //Posso anche scrivere newsData?.data? ma in questo caso mi serve un if per fare la renderizzazione condizionale
                newsData.data.map((item: string) => (
                    <p>{item}</p>
                ))
            }
        </div>
    );
};

export default Home;