import React from 'react';
import { BsBookmarkFill } from 'react-icons/bs';

const Blog = ({ blog }) => {

    const { id, name, blogTitle, posted, readTime, authorImage, blogImage, tags } = blog;

    return (
        <div className='md:w-[53rem] w-full space-y-5 p-5'>
            {/* Upper Blog Image */}
            <div className='w-full md:h-[30rem]'>
                <img className='w-full h-full rounded-lg' src={blogImage} alt="" />
            </div>
            {/* Bottom Content */}
            <div>
                {/* Bottom top section */}
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-12 h-12 rounded-[50%]' src={authorImage} alt="" />
                        <div>
                            <h4 className='text-lg font-semibold'> {name}</h4>
                            <p className='text-slate-500 text-sm font-medium'>{posted}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 font-semibold'>
                        <p> {readTime} mins read  </p>
                        <BsBookmarkFill/>
                    </div>
                </div>
                {/* bottom bottom section */}
                <div className='mt-5 space-y-3'>
                    <h1 className='md:text-2xl text-xl font-bold'> {blogTitle} </h1>
                    <div className='space-x-2 font-medium'>
                        {tags.map((t,i)=> <span className='bg-gray-300 px-1' key={i} >{t}</span> )}
                    </div>

                    <button className='btn btn-outline'>Mark as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;