import React, {useState} from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/joy/Button';
import {Select} from '@mui/joy';
import {Option} from '@mui/joy';

// const categories = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'];
const countries = ['ar', 'de', 'en', 'es', 'he', 'fr', 'it', 'nl', 'no', 'pt', 'sv'];
const sortBy = ['relevancy', 'popularity', 'publishedAt'];

const Sidebar = ({onFilterChange}) => {
    const [searchTerm, setSearchTerm] = useState('');

    // const handleCategoryChange = (e) => {
    //     onFilterChange({filterType: 'category', value: e.target.value});
    // };



    // const handleCountryChange = (e) => {
    //     onFilterChange({filterType: 'country', value: e.target.value});
    // };

    const handleSortByChange = (e) => {
        onFilterChange({filterType: 'sortBy', value: e.target.value});
    };

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onFilterChange({filterType: 'searchTerm', value: searchTerm});

    };
    console.log(searchTerm);

    return (
        <div className="sidebar">
            <h3>Filters</h3>
            <form onSubmit={handleSearchSubmit}>
                {/*<label>*/}
                {/*    Search:*/}
                {/*    <input type="text" value={searchTerm} onChange={handleSearchInputChange}/>*/}
                {/*</label>*/}


                    <Input placeholder="Type here" id="standard-basic" label="Search" variant="standard" type="text" value={searchTerm} onChange={handleSearchInputChange}/>

                <Button type="submit">Search</Button>
            </form>
            {/*<label>*/}
            {/*    Category:*/}
            {/*    <select onChange={handleCategoryChange}>*/}
            {/*        <option value="">All</option>*/}
            {/*        {categories.map((category, index) => (*/}
            {/*            <option key={index} value={category}>*/}
            {/*                {category}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*</label>*/}
            {/*<label>*/}
            {/*    Country:*/}
            {/*    <select onChange={handleCountryChange}>*/}
            {/*        <option value="">All</option>*/}
            {/*        {countries.map((country, index) => (*/}
            {/*            <option key={index} value={country}>*/}
            {/*                {country.toUpperCase()}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*</label>*/}
            {/*<label>*/}
                Sort by:
                <Select onChange={handleSortByChange}>
                    <Option value="">All</Option>
                    {sortBy.map((sortBy, index) => (
                        <Option key={index} value={sortBy}>
                            {sortBy.toUpperCase()}
                        </Option>
                    ))}
                </Select>
            {/*</label>*/}

        </div>
    );
};

export default Sidebar;