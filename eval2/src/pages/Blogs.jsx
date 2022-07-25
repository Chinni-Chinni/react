import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blogs() {
    const [blog, setblog] = useState([]);

    const fetchdata = () => {

        axios({
            method: "get",
            url: "http://localhost:3002/blogs"
        })
            .then(res => {
                setblog(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchdata()
    }, [])
    // console.log(blog)
    return (
        <>

            <div>
                <div>
                    <h1>BLOG LISTING PAGE</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Content</th>
                                <th>Publication</th>
                                <th>PublishedOn</th>
                                <th>ViweMore</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                blog.map((data)=>(
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.author}</td>
                                        <td>{data.content}</td>
                                        <td>{data.publication}</td>
                                        <td>{data.published_on}</td>
                                        <td><Link to = {`/blog/${data.id}`}>More...</Link></td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>

                </div>



            </div>
        </>
    )
}
