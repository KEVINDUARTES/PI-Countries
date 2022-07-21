import React from "react";
import styles from "./Paginado.module.css"

export default function Paginado({ countriesPerPage, countries, paginado }) {
    const pageNumbers = [];// va a tener 27 elemento
    //La función Math.ceil() 

    //devuelve el entero mayor o igual más próximo a un número dado. por ende por parametro dividimos la cantidad de paises que tenemos
    //y lo dividimos por la cantidad de paises que quiero por pagina, y de eso va a salir un numero redondo.
    //luego se pushea(se agrega) a la constante con el array vacio que declaramos al principio.
    for (let i = 1; i <= Math.ceil( countries / countriesPerPage); i++) {
        pageNumbers.push(i);    //    241/9 = 27 paginas
    }
    //este componente es el que va a renderizar los numeritos en si!!!
    //vamos a poner pageNumber y si tiene algo,  se realiza el mapeo
    //y se devuelve cada uno de los numeros que pedimos en el paginado.

    return (
        <nav>
        <ul className={styles.ul}>
            { pageNumbers && pageNumbers.map(number =>(           
                 <li className={styles.li} key={number}> 
                    <button onClick={()=> paginado(number)}>{number}</button>
                 </li>//cada vez que clikeo el valor va a llamar la funcion paginado la cual va ir cambiando el valor de los numeros en la home
            ))}
            </ul>
        </nav>
    )
}
//<button className={el > 25 ? styles.displaynone : styles.btn}onClick={() => paginate(el)}>{el <= 25 ? el : ""}</button>