import { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import './News.css'

function News(props) {

    const [Articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalresults, setTotalresults] = useState();
    const [Loading, setLoading] = useState(true);

    async function fetchNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(parseData.articles);
        setLoading(false)
        setTotalresults(parseData.totalResults)
    }

    const prevPage = async () => {
        console.log("Going to previous page")

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(parseData.articles);
        setLoading(false)
        setPage(page - 1)
        setTotalresults(parseData.totalResults)
    }

    const nextPage = async () => {
        console.log("Going to next page")

        if (page + 1 > Math.ceil(totalresults / 15)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            let parseData = await data.json()
            setArticles(parseData.articles);
            setLoading(false)
            setPage(page + 1)
            setTotalresults(parseData.totalResults)
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div className="container m-auto p-0">
            {Loading && <Spinner/>}
            {/* <h2 className="text-center redBack p-2">Today's Latest News</h2> */}
            <div className="row">
                {!Loading && Articles.map((element) => {
                    return <div className="col-md-4 text-center d-flex justify-content-around" key={element.url}>
                        <NewsItems title={element.title ? element.title.slice(0, 48) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between m-4 p-4">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={prevPage}>Previous</button>
                <button disabled={page + 1 > Math.ceil(totalresults / 15)} type="button" className="btn btn-dark" onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default News
