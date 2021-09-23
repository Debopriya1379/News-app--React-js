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

    const updateNews = async ()=>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.Api_key}&page=1&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setArticles(parseData.articles);
        setLoading(false)
        setTotalresults(parseData.totalResults)
        props.setProgress(100);
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.Api_key}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parseData = await data.json()
        setArticles(Articles.concat(parseData.articles));
        setTotalresults(parseData.totalResults)
    }

    useEffect(() => {
        updateNews();
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
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
