import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case md:text-xl">Knowledge Cafe</a>
            </div>
            <div className="md:text-lg text-xs">
                <ul className="flex md:gap-6 gap-2 px-1">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;