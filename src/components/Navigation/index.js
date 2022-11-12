import React from 'react';

function Navigation({handlePageChange}){

    

    return(
        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={()=>handlePageChange('about')}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={()=>handlePageChange('portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>handlePageChange('contact')}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={()=>handlePageChange('resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
