
var styleCss = {
    // width: "15rem",
    margin: "10px",
    fontSize: "10px"
}

const NewsItems = (props) => {
    let {title,desc,imageUrl,url}=props;
    return (
        <div className="card" style={styleCss}>
            <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR721OdHYrYJGVTCT4Mn83ygjxdV0tWLSh9Ew&usqp=CAU" : imageUrl}
            className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItems
