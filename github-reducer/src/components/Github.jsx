import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { adderror, addloading, addsuccess } from '../store/action';

export default function Github() {
    const [search, setsearch] = useState("");
    const [page, setpage] = useState(1);

    const { loading, error, data } = useSelector(state => state.todos);
    console.log(data);
    const dispatch = useDispatch();

  

    const handleadd = () => {
        dispatch(addloading())
        axios({
            method: "get",
            url: `https://api.github.com/search/users?q=${search}&per_page=10&page=${page}`

        })
            .then(res => {
                dispatch(addsuccess(res.data.items))
                setsearch("")
            })
            .catch(err => {
                dispatch(adderror())
            })
    }
    return (
        <>


            <div>
                <input type="text" value={search} onChange={(e) => setsearch(e.target.value)}></input>
                <button onClick={handleadd}>ADD</button>
            </div>

            {
                loading ? "...loading" : error ? "...something went wrong" : data.map((d) => (
                    <li >{d.login}</li>
                ))
            }

            <button onClick={() => setpage(page - 1)}>prev</button>
            <button>{page}</button>
            <button onClick={() => setpage(page + 1)}>next</button>

        </>
    )
}
