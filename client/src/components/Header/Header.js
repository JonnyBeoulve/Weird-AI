import React from 'react';

import githubLogo from '../../static/img/github-logo.png';

/*======================================================================
// This stateless functional component will display the header.
======================================================================*/
const Header = () => {
    return (
        <header className="header">
            <div className="row">
                <div className="header-flex">
                    <div>
                        <a href="/" className="header-flex-title">Weird AI</a>
                    </div>
                    <div className="header-flex-links">
                        <a href="https://github.com/JonnyBeoulve/Weird-AI" target="_blank" rel="noopener noreferrer"><img src={githubLogo} className="header-link" alt="GitHub logo" /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
