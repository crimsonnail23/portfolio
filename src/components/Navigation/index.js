import React from 'react';

function Navigation(props){

    const{
        sections=[],
        setCurrentSection,
        currentSection
    }=props

    return(
        <nav>
            {
                sections.map((section)=>(
                    <li className={ ` ${currentSection.name===section.name}`}
                    key={section.name}
                    >
                        <span
                            onClick={()=>{
                                setCurrentSection(section);
                            }}
                        >
                            
                        </span>
                    </li>
                ))
            }
        </nav>
    )
}

export default Navigation
