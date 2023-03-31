import React from 'react';

const BookMark = ({bookmark, spent}) => {
    
    return (
        <div className='sticky top-0 py-6 md:px-0 px-2'>
            <div className='bg-slate-200 p-4 rounded-md text-center border border-violet-800'>
            <h1 className='font-semibold text-violet-800'>Spent time on read: {spent.reduce((a,c)=>a+c,0)} mins</h1>
            </div>

            <section className='mt-3 bg-slate-200 p-3 rounded-md'>
                    <h2 className='text-lg font-semibold mb-3'>Bookmarked Blogs: {bookmark.length} </h2>
                    <div className='space-y-3'>
                        {
                            bookmark.map(book=><BookmarkBlog key={book.id} title={book.blogTitle} />)
                        }
                    </div>

            </section>
        </div>
    );
};

const BookmarkBlog = ({title})=>{

    return(
        <div className='bg-white p-2 rounded-sm'>
            <p className='font-medium text-black' >{title}</p>
        </div>
    )

}


export default BookMark;