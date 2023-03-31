import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';

const Blogs = () => {

    const [blogData, setBlogData] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [spent, setSpent] = useState(0);


    useEffect(()=>{
        fetch('fakeApi.json')
        .then(res=>res.json())
        .then(data=>setBlogData(data))
    },[])

    const handleBookmark = id =>{
        let newBM =[];
        const findBM = blogData.find(b=>b.id===id);
        const exists = bookmark.find(b=>b.id===id);

        if(!exists){
            newBM=[...bookmark, findBM];
            setBookmark(newBM);
            toast.success(`bookmarked!`);
        }
        else{
            toast.error(`This blog already bookmarked!`);
        }
    }
    
    const spentTime = time =>{
        setSpent(spent+time)
    }

    console.log(spent)

    return (
        <div className='grid md:grid-cols-4 grid-cols-1 md:px-32 mt-12'>
            <section className='md:col-span-3 md:px-16'>
                {
                    blogData.map(blog=><Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} spentTime={spentTime} />)
                }
            </section>
            <section className='md:col-span-1'>
                <BookMark bookmark={bookmark} spent={spent} />
            </section>
        </div>
    );
};

export default Blogs;