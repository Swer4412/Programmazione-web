import { FC, useEffect, useState } from 'react';

const Home: FC = () => {

    const [newsData, setNewsData] = useState<any>() //Sono stato qua 4 giorni a guardare tutorial e chiedere a chat gpt, giuro non riesco a capire cosa devo scrivere
    //Non so se toglierò mai il tipo any da qui

    useEffect(() => {
        fetch("http://api.mediastack.com/v1/news?access_key=a0d6c5b4493c2f8f1b7e701ab8174e8e")
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
                :
                newsData.data.map((item: string) => (
                    <p>{item}</p>
                ))
            }
        </div>
    );
};

export default Home;