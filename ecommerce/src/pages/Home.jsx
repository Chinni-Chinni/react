import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React
 from 'react';

export default function Home() {
    const token = useSelector(state => state.auth.token);
    const init = {
        loding: false,
        error: false,
        data: []
    }
    const [products, setproducts] = useState(init);
    const { loading, error, data } = products;

    const fetchData = () => {
        setproducts(prev => ({
            ...prev,
            loading: true,
            error: false
        }))

        axios({
            method: "get",
            url: " http://localhost:3002/products"
        })
            .then(res => {
                setproducts(prev => ({
                    ...prev,
                    loading: false,
                    error: false,
                    data: res.data
                }))
            })
            .catch(err => {
                setproducts(prev => ({
                    ...prev,
                    error: true,
                    loading: false
                }))
            })

    }
    useEffect(() => {
        fetchData();
    }, [])


    if (!token) {
        return <Navigate to="/login" />
    }


    
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

    // console.log(data)
    // return (
    //     loading ? <h3>...loading</h3> : error ? <div>Something went wrong</div> :
    //        data.map((el=>(
    //         <div>{el.title}</div>
    //        ))

    // )
    // )


    return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      );
    
}





