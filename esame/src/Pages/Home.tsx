import { FC, useEffect, useState } from 'react';

const Home: FC = () => {

    const [newsData, setNewsData] = useState<any>() //Sono stato qua 4 giorni a guardare tutorial e chiedere a chat gpt, giuro non riesco a capire cosa devo scrivere
    //Non so se toglierò mai il tipo any da qui

    useEffect(() => { //L'api ha un limitatore mensile quindi dato che non so quante richieste farò, è meglio creare un api con un risultato di test
        fetch("http://127.0.0.1:4000/ApiTest") //http://api.mediastack.com/v1/news?access_key=a0d6c5b4493c2f8f1b7e701ab8174e8e
            .then(res => res.json())
            .then(data => {
                setNewsData(data);
                console.log(data)
            }
            )
    }, [])

    interface data {
        "author": string | null,
        "title": string,
        "description": string | null,
        "url": string,
        "source": string | null,
        "image": string,
        "category": string | null,
        "language": string | null,
        "country": string | null,
        "published_at": string | null
      }
      

    return (
        <div className="bg-gray-100 min-h-screen">
          {!newsData || !newsData.data ? (
            <p className="text-center text-gray-800 font-bold">Loading...</p>
          ) : (
            //Posso anche scrivere newsData?.data? ma in questo caso mi serve un if per fare la renderizzazione condizionale
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
                Latest News
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.data.map((item: data) => (
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{item.author}</span>
                        <span>·</span>
                        <span>{item.published_at}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-800 mt-2">{item.title}</h2>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                      <div className="flex items-center space-x-2 mt-4">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read more</a>
                        <span>·</span>
                        <span>{item.source}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
      
};

export default Home;