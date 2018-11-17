import React from 'react';

import githubLogo from '../../static/img/github-logo.png';
import youtubeLogo from '../../static/img/youtube-logo.png';

/*======================================================================
// This stateless functional component will display the header.
======================================================================*/
const Header = () => {
    return (
        <header className="header">
            <div className="row">
                <div className="header-flex">
                    <div className="header-flex-title">
                        <h2>Weird AI</h2>
                    </div>
                    <div className="header-flex-links">
                        <a href="https://github.com/JonnyBeoulve/Weird-AI" target="_blank" rel="noopener noreferrer"><img src={githubLogo} className="header-link" alt="GitHub logo" /></a>
                        <a href="https://www.youtube.com/channel/UCDBrVr0ttWpoRY-_yZajp2Q" target="_blank" rel="noopener noreferrer"><img src={youtubeLogo} className="header-link" alt="YouTube logo" /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
