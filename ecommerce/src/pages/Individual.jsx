import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "../style/Home.css";


export default function Individual() {
    const id = useParams();
    const [getdetails, setgetdetails] = useState({});
    // console.log(id.id)

    const getdataindividual = () => {
        axios({
            method: "get",
            url: ` http://localhost:3002/products/${id.id}`
        })
            .then(res => {
                setgetdetails((res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {

        getdataindividual();
    }, [])
    return (
        <div className='individualitem'>
            <div>

                <Card  >
                    <CardMedia
                        component="img"
                        height="140"
                        image={getdetails.imageBase} alt="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {getdetails.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {getdetails.description}
                        </Typography>

                        <div style={{ display: "flex", justifyContent: "space-around" }}>

                            <Typography className='item-price' variant="body2" color="text.secondary">
                                ₹ {getdetails.price}
                            </Typography>
                            <Typography className='item-rating' variant="body2" color="text.secondary">
                                {getdetails.rating} <img style={{ width: "20px", height: "15px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqJD-IThqOgPBEhL18meQcDfbGOBBPWt0rg&usqp=CAU"></img>
                            </Typography>
                        </div>
                    </CardContent>
                    <CardContent>
                    <Button size = "small" variant='contained' color = "success" >Add To Cart</Button>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' color='success'>+</Button>
                        <Button size = "small" variant='outlined' >count </Button>
                        <Button size="small" variant='contained' color='warning'>-</Button>

                    </CardActions>
                </Card>
            </div>
            <div>

            </div>
        </div>
    )
}

