import { FC, useEffect, useState } from 'react';
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs"

const Home: FC = () => {

	const [newsData, setNewsData] = useState<any>() //Sono stato qua 4 giorni a guardare tutorial e chiedere a chat gpt, giuro non riesco a capire cosa devo scrivere
	//Non so se toglierò mai il tipo any da qui
	const [searchTopic, setSearchTopic] = useState<string>("sport")

	//Test url
	const url = "http://localhost:4000/ApiTest"

	/*URL
	const url = "https://gnews.io/api/v4/search?" + 
		`q=${searchTopic}` +
		`&lang="it"` +
		`&apikey=${import.meta.env.VITE_API_KEY}`
	*/

	//Chiamata all api
	useEffect(() => { //L'api ha un limitatore mensile quindi dato che non so quante richieste farò, è meglio creare un api con un risultato di test
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setNewsData(data.articles);
				console.log(data)
			}
			)
	}, [])

	interface Source {
		name: string;
		url: string;
	}

	interface Article {
		title: string;
		description: string | null;
		content: string | null;
		url: string;
		image: string;
		publishedAt: string | null;
		source: Source;
	}

	interface Source {
		name: string;
		url: string;
	  }
	  
	  interface Article {
		title: string;
		description: string | null;
		content: string | null;
		url: string;
		image: string;
		publishedAt: string | null;
		source: Source;
	  }
	  
	  return (
		<div className="container mx-auto px-4 py-8">
		  {!newsData ? (
			<p className="text-center text-gray-800 font-bold">Loading...</p>
		  ) : (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			  {newsData.map((item: Article) => (
				<div className="bg-white shadow-lg rounded-lg overflow-hidden">
				  <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
				  <div className="p-4">
					<h3 className="text-xl font-semibold text-gray-800 truncate">
					  <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
					</h3>
					<p className="text-gray-600 mt-2">{item.description}</p>
					<div className="flex items-center justify-between mt-4">
					  <div className="flex items-center text-sm text-gray-500">
						<BsArrowDownShort/>
						{item.publishedAt}
					  </div>
					  <div className="flex items-center text-sm text-gray-500">
						<BsArrowRightShort/>
						{item.source.name}
					  </div>
					</div>
				  </div>
				</div>
			  ))}
			</div>
		  )}
		</div>
	  );
	  
}

export default Home;