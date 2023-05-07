//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import NewsItem from './NewsItem';
// import Sidebar from './Sidebar';
// import {Box, Container, CssBaseline, Pagination} from "@mui/material";
//
//
//
// const NewsListByFilters = () => {
//     const [articles, setArticles] = useState([]);
//     const [filters, setFilters] = useState({
//         // category: '',
//         country: '',
//         searchTerm: '',
//     });
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(10);
//
//
//     // const location = useLocation();
//     // const initialCategory = new URLSearchParams(location.search).get('category');
//
//     // useEffect(() => {
//     //     if (initialCategory) {
//     //         setFilters((prevFilters) => ({ ...prevFilters, category: initialCategory }));
//     //     }
//     // }, [initialCategory]);
//
//     // useEffect(() => {
//     //     const { category, country, searchTerm } = filters;
//     //     const apiUrl = 'https://newsapi.org/v2/top-headlines';
//     //     const apiKey = process.env.REACT_APP_API_KEY;
//     //
//     //     let query = `?pageSize=50&language=en&apiKey=${apiKey}`;
//     //
//     //     if (category) query += `&category=${category}`;
//     //     if (country) query += `&country=${country}`;
//     //     if (searchTerm) query += `&q=${searchTerm}`;
//     //
//     //     axios
//     //         .get(apiUrl + query)
//     //         .then((response) => {
//     //             console.log(response);
//     //             setArticles(response.data.articles);
//     //         })
//     //         .catch((error) => {
//     //             console.log(error);
//     //         });
//     // }, [filters]);
//
//     useEffect(() => {
//         const { searchTerm } = filters;
//         const apiUrl = 'https://newsapi.org/v2/everything';
//         const apiKey = process.env.REACT_APP_API_KEY;
//         console.log(searchTerm);
//
//         let query = `?pageSize=50&language=en&apiKey=${apiKey}`;
//
//         // if (category) query += `&category=${category}`;
//         // if (country) query += `&country=${country}`;
//         if (searchTerm) query += `&q=${searchTerm}`;
//
//         axios
//             .get(apiUrl + query)
//             .then((response) => {
//                 console.log(response);
//                 // setArticles(response.data.articles);
//                 localStorage.setItem('news', response.data.articles);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, [filters]);
//
//     const handleFilterChange = ({ filterType, value }) => {
//         setFilters((prevFilters) => ({
//             ...prevFilters,
//             [filterType]: value,
//         }));
//     };
//
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
//
//     const pageCount = Math.ceil(articles.length / itemsPerPage);
//
//     const handleChange = (event, value) => {
//         setCurrentPage(value);
//     };
//
//
//     console.log(articles);
//     // console.log(searchTerm);
//
//     return ( <React.Fragment>
//         <CssBaseline/>
//             <Sidebar onFilterChange={handleFilterChange} />
//         <Container maxWidth="md">
//             <Box
//                 sx={{
//                     // height: "100vh",
//                     width: "100%",
//                     mt: 5,
//                     display: "flex",
//                     flexWrap: "wrap",
//                     justifyContent: "space-around",
//                 }}
//             >
//                 {currentItems.map((article, index) => (
//                     <NewsItem
//                         key={index}
//                         title={article.title}
//                         description={article.description}
//                         urlToImage={article.urlToImage}
//                         url={article.url}
//                     />
//                 ))}
//             </Box>
//             <Pagination
//                 count={pageCount}
//                 page={currentPage}
//                 onChange={handleChange}
//                 color="primary"
//                 sx={{mt: 3, mb: 5, display: "flex", justifyContent: "center"}}
//             />
//         </Container>
//     </React.Fragment>
//         /*<div className="news-app">
//             <Sidebar onFilterChange={handleFilterChange} />
//             <div className="news-list">
//                 {articles.map((article, index) => (
//                     <NewsItem
//                         key={index}
//                         title={article.title}
//                         description={article.description}
//                         urlToImage={article.urlToImage}
//                         url={article.url}
//                     />
//                 ))}
//             </div>
//         </div>*/
//     );
// };
//
// export default NewsListByFilters;
//
//
