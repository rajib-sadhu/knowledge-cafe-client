import React from 'react';

const BookMark = () => {
    return (
        <div>
            <div className='bg-slate-200 p-4 rounded-md text-center border border-violet-800'>
            <h1 className='font-semibold text-violet-800'>Spent time on read: 177 min</h1>
            </div>

            <section className='mt-3 bg-slate-200 p-3 rounded-md'>
                    <h2 className='text-lg font-semibold mb-3'>Bookmarked Blogs: 2</h2>
                    <div className='space-y-3'>
                        <BookmarkBlog/>
                        <BookmarkBlog/>
                    </div>

            </section>
        </div>
    );
};

const BookmarkBlog = ()=>{

    return(
        <div className='bg-white p-2 rounded-sm'>
            <p className='font-medium' >Marked</p>
        </div>
    )

}


export default BookMark;