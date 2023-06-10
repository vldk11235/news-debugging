import React, {useState} from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {Select} from '@mui/material';
import {MenuItem} from '@mui/material';

const countries = ['ar', 'de', 'en', 'es', 'he', 'fr', 'it', 'nl', 'no', 'pt', 'sv'];
const sortBy = ['Relevancy', 'Popularity', 'PublishedAt'];

const Sidebar = ({onFilterChange}) => {
    const [searchTerm, setSearchTerm] = useState('');

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
                <Input placeholder="Type here" id="standard-basic" label="Search" variant="standard" type="text"
                       value={searchTerm} onChange={handleSearchInputChange}/>

                <Button type="submit">Search</Button>
            </form>
            Sort by:
            <Select
                defaultValue='defaultSort'
                sx={{m: 1, minWidth: 120}}
                onChange={handleSortByChange}>
                <MenuItem value='defaultSort'>All</MenuItem>
                {sortBy.map((sortBy, index) => (
                    <MenuItem key={index} value={sortBy}>
                        {sortBy}
                    </MenuItem>
                ))}
            </Select>

        </div>
    );
};

export default Sidebar;