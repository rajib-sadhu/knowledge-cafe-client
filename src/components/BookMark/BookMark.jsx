import React from 'react';

const BookMark = ({bookmark}) => {
    return (
        <div className='sticky top-0 pt-6'>
            <div className='bg-slate-200 p-4 rounded-md text-center border border-violet-800'>
            <h1 className='font-semibold text-violet-800'>Spent time on read: 177 min</h1>
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
            <p className='font-medium' >{title}</p>
        </div>
    )

}


export default BookMark;