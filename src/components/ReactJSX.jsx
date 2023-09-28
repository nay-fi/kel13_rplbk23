import React from 'react';

const kelompok = {
    kelompok: 'Kelompok 13'
};

function greetings(kelompok) {
    return kelompok.kelompok;
}

//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Praktikum RPLBK - Modul 2 - Shift 2</h1>
            <h2> {greetings(kelompok)}</h2>
        </div>
    );
}

export default ReactJSX;
// export { ReactNoJSX };