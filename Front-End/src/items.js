import React from 'react';
import { useState, useEffect } from 'react';

const Items = () => {
    const [data, setDatas] = useState([]);
    const loadItems = async () => {
        fetch("http://localhost:2002/items")
            .then(res => {
                return res.json();
            }).then(data => {
                setDatas(data.items)
            });
    }
    useEffect(() => {
        loadItems();
        console.log(data);
    }, []);
    return (
        <div>
            <ul>
                {data.map((item) => {
                    return (<li key={item.id}>{item.model} - {item.price}</li>);
                })}
            </ul>

        </div>
    );
}
export default Items;