import { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import './News.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {

    const [Articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalresults, setTotalresults] = useState();
    const [Loading, setLoading] = useState(true);

    const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async function fetchNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(parseData.articles);
        setLoading(false)
        setTotalresults(parseData.totalResults)
    }

    const prevPage = async () => {
        console.log("Going to previous page")

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=${page - 1}&pageSize=${props.pageSize}`;
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
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            let parseData = await data.json()
            setArticles(parseData.articles);
            setLoading(false)
            setPage(page + 1)
            setTotalresults(parseData.totalResults)
        }
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=483d4544dfc244c69d9a2cc3805bbfe1&page=${page + 1}&pageSize=${props.pageSize}`;
        // setLoading(true)
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(Articles.concat(parseData.articles));
        // setLoading(false)
        setTotalresults(parseData.totalResults)
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <>
            <h2 className="text-center bg-primary p-2">Today's Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {Loading && <Spinner />}
            <InfiniteScroll
                dataLength={Articles.length}
                next={fetchMoreData}
                hasMore={Articles.length !== totalresults}
                loader={<Spinner />}
            >
                <div className="container m-auto p-0">
                    <div className="row">
                        {!Loading && Articles.map((element) => {
                            return <div className="col-md-4 text-center d-flex justify-content-around" key={element.url}>
                                <NewsItems title={element.title ? element.title.slice(0, 48) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} url={element.url} DateAndTime={element.publishedAt} Author={element.author} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between m-4 p-4">
                        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={prevPage}>Previous</button>
                        <button disabled={page + 1 > Math.ceil(totalresults / 15)} type="button" className="btn btn-dark" onClick={nextPage}>Next</button>
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
