import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const NewsItem = ({title, description, url, urlToImage}) => {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={urlToImage}
                    alt="{urlToImage}"
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
        // <div>
        //     <div className="news-app">
        //         <div className="news-item">
        //             <img className="news-img" src={urlToImage} alt={urlToImage}/>
        //             <h3><a href={url}>{title}</a></h3>
        //             <p>{description}</p>
        //         </div>
        //     </div>
        //
        // </div>
    )
}

export default NewsItem