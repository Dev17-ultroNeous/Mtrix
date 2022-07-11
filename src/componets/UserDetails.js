import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../componets/NavBar";
const UserDetails = () => {
    const { id } = useParams();
    const [posts, setDatas] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getdetails/${id}`)
            .then((res) => {
                setDatas(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <NavBar />
            {console.log("hrlo")}
            <p>Helo</p>
            <p>{posts.description}</p>
        </>
    );
};

export default UserDetails;
