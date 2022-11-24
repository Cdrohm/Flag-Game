import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées par balise img sont acces dans public | chemin './xxx */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;