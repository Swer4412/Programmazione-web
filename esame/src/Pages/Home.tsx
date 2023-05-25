import React, { useEffect, useState } from 'react';

const Home = () => {

    const [newsData, setNewsData] = useState({data:[{}]})

    useEffect(() => {
        fetch("http://api.mediastack.com/v1/news?access_key=a0d6c5b4493c2f8f1b7e701ab8174e8e")
        .then(res =>  res.json())
        .then(data => {
            setNewsData(data);
        }
        )
    }, [])


    return (
        <div>
            {newsData.data.map(() => {
                
            })}
        </div>
    );
};

export default Home;