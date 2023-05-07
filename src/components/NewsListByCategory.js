// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {useLocation} from "react-router-dom";
// import NewsItem from "./NewsItem";
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
//
//
//
// const NewsListByCategory = () => {
//     const [articles, setArticles] = useState([]);
//     const location = useLocation();
//     const category = new URLSearchParams(location.search).get('category');
//
//     useEffect(() => {
//
//         axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=50&language=en&apiKey=${process.env.REACT_APP_API_KEY}`)
//             .then((response) => {
//                 console.log(response);
//                 setArticles(response.data.articles);
//             })
//
//             .catch((error) => {
//                 console.log(error);
//             });
//
//     }, [category])
//
//
//     console.log(articles);
//
//
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <Container maxWidth="md">
//                 <Box sx={{ height: '100vh',
//                     width: '100%',
//                     mt: 5,
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     justifyContent: 'space-around',
//                     // flexDirection: 'column',
//                 }}>
//
//
//
//                     {articles.map((article, index) => (
//                         <NewsItem
//                             key={index}
//                             title={articles[index].title}
//                             description={articles[index].description}
//                             urlToImage={articles[index].urlToImage}
//                             url={articles[index].urlToImage}
//
//                         />
//                     ))}
//
//                 </Box>
//             </Container>
//         </React.Fragment>
//
//     )
// }
//
// export default NewsListByCategory


import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Container, Box, CssBaseline, Pagination} from "@mui/material";
import NewsItem from "./NewsItem";

const NewsListByCategory = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const location = useLocation();
    const category = new URLSearchParams(location.search).get("category");

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=50&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                console.log(response);
                const filteredArticles = response.data.articles.filter(
                    (article) => article.urlToImage !== null
                );
                setArticles(filteredArticles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

    const pageCount = Math.ceil(articles.length / itemsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <Box
                    sx={{
                        // height: "100vh",
                        width: "100%",
                        mt: 5,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}
                >
                    {currentItems.map((article, index) => (
                        <NewsItem
                            key={index}
                            title={article.title}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            url={article.url}
                        />
                    ))}
                </Box>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handleChange}
                    color="primary"
                    sx={{mt: 3, mb: 5, display: "flex", justifyContent: "center"}}
                />
            </Container>
        </React.Fragment>
    );
};

export default NewsListByCategory;
