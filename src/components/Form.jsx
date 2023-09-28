import React, {useState, useEffect } from "react";
import "./Form.css";
import "./Card";

function Form(props) {
    
const [nama, setNama] = React.useState("");
const [kelompok, setKelompok] = React.useState("");
const [github, setGithub] = React.useState("");
const [foto, setFoto] = React.useState();
const [namaIsValid, setNamaIsValid] = React.useState(null);
const [kelompokIsValid, setKelompokIsValid] = React.useState(null);
const [githubIsValid, setGithubIsValid] = React.useState(null);
const [fotoIsValid, setFotoIsValid] = React.useState(null);
const [formIsValid, setFormIsValid] = React.useState(false);

const submitHandler = (event) => {
	event.preventDefault();

	if (formIsValid) {
		console.log({ nama, kelompok, github });
		props.onAddPraktikan( {nama:nama, kelompok:kelompok, github:github} );

		setNama("");
		setKelompok("");
        setGithub("");
        // setFoto("");
	} else {
		alert("Form tidak valid");
	}
};

const changeNamaHandler = (event) => {
	setNamaIsValid(event.target.value.trim().length > 0);
	setNama(event.target.value);
}

const changeKelompokHandler = (event) => {
	setKelompokIsValid(event.target.value.trim().length > 0);
	setKelompok(event.target.value);
}

const changeGithubHandler = (event) => {
	setGithubIsValid(event.target.value.trim().length > 0);
	setGithub(event.target.value);
}

// const changeFotoHandler = (event) => {
// 	setFotoIsValid(event.target.files);
//     setFoto(URL.createObjectURL(event.target.files[0]));
// }

    useEffect(() => {
        setFormIsValid(namaIsValid && kelompokIsValid && githubIsValid);
        console.log(`${Form.name}: ${formIsValid}`);
    }, 
    
    [namaIsValid, kelompokIsValid, githubIsValid]);

    return (
        
        <form onSubmit={submitHandler}> 
            <label htmlFor="nama">Nama</label> 
            <input
                className={namaIsValid === false ? "invalid" : ""} 
                autoComplete="off" type="text" id="nama" name="nama" 
                value={nama} onChange={changeNamaHandler} onBlur={changeNamaHandler} 
                />
            <label htmlFor="kelompok">Kelompok</label> 
            <input
                className={kelompokIsValid === false ? "invalid" : ""} 
                autoComplete="off" type="number" id="kelompok" name="kelompok"
                value={kelompok} onChange={changeKelompokHandler}
                onBlur={changeKelompokHandler} 
                />
            <label htmlFor="github">Github</label>
            <input
                className={githubIsValid === false ? "invalid" : ""} 
                autoComplete="off" type="input" id="github" name="github"
                value={github} onChange={changeGithubHandler}
                onBlur={changeGithubHandler} 
                />
            {/* <label htmlFor="foto">Masukkan Foto</label> */}
            {/* <input
                className={fotoIsValid === false ? "invalid" : ""} 
                autoComplete="off" type="file" id="foto" name="foto"
                value={foto} onChange={changeFotoHandler}
                onBlur={changeFotoHandler} 
                /> */}
        <button type="submit">Generate Nama Anggota Kelompok</button>
        </form>
    
    );
}

export default Form;
