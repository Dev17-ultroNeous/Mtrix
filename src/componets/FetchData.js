import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

const FetchData = () => {
    const [posts, setDatas] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/getdetails")
            .then((res) => {
                setDatas(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>

            {posts.map((v, i) => {
                return (
                    <li key={v._id}>
                        <Link to={`fetchdata/${v._id}`}>{v.title}</Link>
                    </li>
                );
            })}
        </div>
    );
};

export default FetchData;
