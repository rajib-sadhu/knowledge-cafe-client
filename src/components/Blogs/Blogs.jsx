import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-5 px-32'>
            <section className='col-span-4'>
                <h1>Blogs</h1>
            </section>
            <section className='col-span-1'>
                <h1>Bookmarked Blogs </h1>
            </section>
        </div>
    );
};

export default Blogs;