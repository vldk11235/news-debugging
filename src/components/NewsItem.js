import React from "react";



const NewsItem = ({title, description, url, urlToImage}) => {


    return (
        <div>
            <div className="news-app">
                <div className="news-item">
                    <img className="news-img" src={urlToImage} alt={urlToImage}/>
                    <h3><a href={url}>{title}</a></h3>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default NewsItem