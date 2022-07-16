import React from 'react'
import { useState } from 'react'
import axios from 'axios';


export function GithubUser() {
    const [query, setquery] = useState("");
    const [user,setuser] = useState([]);
    const [error,seterror] = useState(false);
    const [loading,setloading] = useState(false);
    const [page,setpage] = useState(1);
    // const limit = 10;

    React.useEffect(()=>{
        setloading(true);
        seterror(false)
        axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`)

        .then((res)=>{
            setuser(res.data.items)
        })
        .catch((err)=>{
            seterror(true)
        })

        .finally(()=>{
            setloading(false);
        })
        // handleSearch();
        console.log(user)
    },[page])


    const handleSearch = () => {
        
        setloading(true);
        seterror(false)
        axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`)
        .then((res)=>{
            setuser(res.data.items)
        })
        .catch((err)=>{
            seterror(true)
        })

        .finally(()=>{
            setloading(false);
        })
        

    }

    return (
        <>
        <h1>Github Users</h1>

        <div>
            <input value={query} onChange={(e) => setquery(e.target.value)} placeholder='search'></input>
            <button disabled= {loading} onClick={handleSearch} >{ loading ? "loading" : "Search"} </button>
        </div>
        {error? "please fill the data" : null}
        <div>
            {
                user.map((user)=>(
                    <h1 key = {user.id}>{user.login}</h1>
                ))
            }
         <button disabled = {page===1} onClick = {()=>setpage(page - 1)}>prev</button>
        <button>{page}</button>
        <button  onClick = {()=>setpage(page + 1)}>Next</button>
        </div>
        
        </>
        
    )
}
