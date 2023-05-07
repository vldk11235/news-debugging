// import React from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
//
// const NewsItem = (props) => {
//
// const {title, description, url, urlToImage} = props;
//
//     return (
//         <Card sx={{ maxWidth: 345,  mb: 5 }}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image={urlToImage}
//                     alt="{urlToImage}"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         <a href={url}>{title}</a>
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {description}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//
//     )
// }
//
// export default NewsItem


import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const NewsItem = (props) => {
    const { title, description, url, urlToImage } = props;
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    if (imageError) {
        console.log('image error', imageError);

        return null;
    }

    return (
        <Card sx={{ maxWidth: 345, mb: 5 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="{urlToImage}"
                    onError={handleImageError}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <a href={url}>{title}</a>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NewsItem;
