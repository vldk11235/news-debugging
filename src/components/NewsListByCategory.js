import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import NewsItem from "./NewsItem";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const NewsListByCategory = () => {
    const [articles, setArticles] = useState([]);
    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category');

    useEffect(() => {

        axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=50&language=en&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response);
                setArticles(response.data.articles);
            })

            .catch((error) => {
                console.log(error);
                // setError(error);
                // setIsLoading(false);
            });

    }, [category])


    console.log(articles);


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box sx={{ height: '100vh' }}>
                {/*<div>*/}


                    {articles.map((article, index) => (
                        <NewsItem
                            key={index}
                            title={articles[index].title}
                            description={articles[index].description}
                            urlToImage={articles[index].urlToImage}
                            url={articles[index].urlToImage}

                        />
                    ))}
                {/*</div>*/}
                </Box>
            </Container>
        </React.Fragment>

    )
}

export default NewsListByCategory