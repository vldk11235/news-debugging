
import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Container, Box, CssBaseline} from "@mui/material";
import NewsItem from "./NewsItem";
import Sidebar from "./Sidebar";
import Pagination from "@mui/material/Pagination";

const NewsListByCategory = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);



    const [filters, setFilters] = useState({
        // category: '',
        // country: '',
        sortBy: '',
        searchTerm: '',
    });

    const location = useLocation();
    const category = new URLSearchParams(location.search).get("category");
    // const initialCategory = new URLSearchParams(location.search).get('category');
    // const location = useLocation();
    const initialCategory = new URLSearchParams(location.search).get("category") || "general";

    // useEffect(() => {
    //     if (initialCategory) {
    //         setFilters((prevFilters) => ({ ...prevFilters, category: initialCategory }));
    //     }
    // }, [initialCategory]);
    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?category=${initialCategory}&pageSize=50&language=en&apiKey=${process.env.REACT_APP_API_KEY}`
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
    }, [initialCategory]);

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

    useEffect(() => {
        const { country, sortBy, searchTerm } = filters;
        const apiUrl = 'https://newsapi.org/v2/everything';
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(searchTerm);

        let query = `?pageSize=50&apiKey=${apiKey}`;

        // if (category) query += `&category=${category}`;
        // if (country) query += `&language=${country}`;
        if (searchTerm) query += `&q=${searchTerm}`;
        if (sortBy) query += `&sortBy=${sortBy}`

        axios
            .get(apiUrl + query)
            .then((response) => {
                console.log(response);
                setArticles(response.data.articles);
                // localStorage.setItem('news', response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filters]);

    const handleFilterChange = ({ filterType, value }) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };


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

            <Container maxWidth="lg"
                       sx={{
                           // height: "100vh",
                           width: "100%",
                           mt: 5,
                           display: "flex",
                           flexDirection: "row",
                           flexWrap: "nowrap",
                           justifyContent: "space-around",
                       }}>
                <Sidebar onFilterChange={handleFilterChange}
                         flexGrow={1}
                />
                <Box flexGrow={3}
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

            </Container>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handleChange}
                color="primary"
                sx={{mt: 3, mb: 5, display: "flex", justifyContent: "center"}}
            />
        </React.Fragment>
    );
};

export default NewsListByCategory;
