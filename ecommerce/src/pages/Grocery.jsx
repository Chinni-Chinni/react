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
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import "../style/Home.css"
import LastPageIcon from '@mui/icons-material/LastPage';

import FirstPageIcon from '@mui/icons-material/FirstPage';


export default function Grocery() {
  const token = useSelector(state => state.auth.token);
  const [page, setpage] = useState(1);
  const [sort,setsort] = useState("")
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
// title_like=server
    axios({
      method: "get",
      url: `http://localhost:3002/products?category_like=grocery&_sort=price&_order=${sort}&_page=${page}`
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
  }, [page,sort])


  if (!token) {
    return <Navigate to="/login" />
  }

  const handlesort = (type) =>{
    console.log(type)
    if(sort === type){
      setsort(null)
      return
    }
    setsort(type);
  }

  // var a = products
  // console.log(a);
  // console.log(data);

  return (
    <>
      <div className='pagination'>

        <Button onClick={() => handlesort("desc")} variant={sort !== "desc" ? "contained" : "outlined"}>Dec</Button>
        <Button onClick={() => handlesort("asc")} variant={sort !== "asc" ? "contained" : "outlined"}>Asc</Button>

        <Button disabled={page == 1} variant="text" onClick={() => setpage(page - 1)}>
          <FirstPageIcon />
        </Button>

        <Button variant="contained">{page}</Button>


        <Button disabled={data.length !== 10} variant="text" onClick={() => setpage(page + 1)}>
          <LastPageIcon />
        </Button>
      </div>

      <div className='table'>

        {
          loading ? <h2>...loading</h2> : error ? <div>Something went wrong</div> :
            data.map((el) => (

              <div className="inside-table">

                <Card  >
                  <CardMedia
                    component="img"
                    height="140"
                    image={el.imageBase} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {el.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {el.category}
                    </Typography>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>

                      <Typography className='item-price' variant="body2" color="text.secondary">
                        ₹ {el.price}
                      </Typography>
                      <Typography className='item-rating' variant="body2" color="text.secondary">
                        {el.rating} <img style={{ width: "20px", height: "15px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqJD-IThqOgPBEhL18meQcDfbGOBBPWt0rg&usqp=CAU"></img>
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            ))
        }

      </div>

    </>
  );
}




