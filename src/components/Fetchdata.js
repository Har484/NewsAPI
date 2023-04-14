import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
const Fetchdata = ({cat}) => {
    const [Data, setData] = useState("");
    const fetchdata = async () => {
        await axios
        .get(
            cat
            ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=1c6aebdf1149440c89932bf9724b1bd3`
            :'https://newsapi.org/v2/top-headlines?country=in&apiKey=1c6aebdf1149440c89932bf9724b1bd3')
        .then((res) => setData(res.data.articles));
    };
    useEffect(() => {
      fetchdata();
    }, [cat]);
    
  return (
    <div className='container my-4'>
      <h3><b>Current HeadLines</b></h3>
      <div className='container d-flex justify-content-center align-items-center flex-column my 3'style={{minHeight:"100vh"}}>{Data ? Data.map((items,index)=>(
        <>
        <div className='container my-3 p-3' style={{width: "600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
            <h5 className='my-1'>{items.title}</h5>
            <div className='d-flex justify-content-center align-items-center'>
            <img src={items.urlToImage} alt='Image Not Found' className='img-fluid' style={{
                width:"100%",
                height:"300px",
                objectFit:"cover"
                }}/>
            </div>
            <p className='my-1'>{items.content}</p>
            <a href={items.url} target='blank'>View More</a>
        </div>
        </>
      )) : 'LOADING....'}</div>
      </div>
  )
}

export default Fetchdata
