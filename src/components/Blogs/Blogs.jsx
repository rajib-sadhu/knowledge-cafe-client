import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';

const Blogs = () => {

    const [blogData, setBlogData] = useState([])


    useEffect(()=>{
        fetch('fakeApi.json')
        .then(res=>res.json())
        .then(data=>setBlogData(data))
    },[])

    


    return (
        <div className='grid md:grid-cols-5 grid-cols-1 md:px-32 mt-12'>
            <section className='md:col-span-4 md:px-16'>
                {
                    blogData.map(blog=><Blog key={blog.id} blog={blog} />)
                }
            </section>
            <section className='md:col-span-1'>
                <BookMark/>
            </section>
        </div>
    );
};

export default Blogs;