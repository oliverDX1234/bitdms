import React from 'react';

const Header = () => {
    return (
        <nav className="bg-gray-200 shadow-md mb-10">
            <div className="flex items-center justify-center">
                <div>
                    <div><img width={120} className='py-1' src='images/logo-no-bg.png' alt="logo"/></div>
                </div>
            </div>
        </nav>
    )
}

export default Header
