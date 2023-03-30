import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#'>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;