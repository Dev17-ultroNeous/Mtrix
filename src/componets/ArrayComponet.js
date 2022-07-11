import React from "react";
import DataJson from "../utils/DataJson";
import { useState, useEffect } from "react";


const ArrayComponet = () => {
    const [posts, setDatas] = useState([]);

    useEffect(() => {
        setDatas(DataJson)
    }, [])
    return (
        <div>
            <h1>
                Rendering List of components
                with array of data
            </h1>
            {posts.map((value, index) => {
                return (
                    <>
                        <h1 key={value.id}>{value.color}</h1>

                    </>
                )
            })
            }
        </div>
    )
}
export default ArrayComponet;