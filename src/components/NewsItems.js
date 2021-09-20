
var styleCss = {
    // width: "15rem",
    margin: "10px",
    fontSize: "10px"
}

const NewsItems = (props) => {
    let { title, desc, imageUrl, url, DateAndTime, Author } = props;
    return (
        <div className="card" style={styleCss}>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bg-gradient p-2 fs-3">
                <span class="visually-hidden">{!Author ? "unknown" : Author }</span>
            </span>
            <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR721OdHYrYJGVTCT4Mn83ygjxdV0tWLSh9Ew&usqp=CAU" : imageUrl}
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <p class="card-text">{new Date(DateAndTime).toGMTString()}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItems
