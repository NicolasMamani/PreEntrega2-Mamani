import { useEffect, useState } from "react";
import FetchingDatosPresentational from "./FetchingDatosPresentational";

const FetchingDatos = () => {
  const [users, setUsers] = useState([]);
  //fetch es un metodo propio del navegador web para pedir info al backend
  //cuando el verbo http es get, no hace falta poner nada

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    //el fetch me devuelve mucha info pero que no es entendible para js
    promiseData
      .then((res) => {
        return res.json();
        //json -> convierte eso inententible en algo que js pueda interpretar
        //json devuelve otra promesa ja, por eso de nuevo el then
        //no necesariamente usamos "res" para el segundo then
      })
      .then((res) => console.log(res))
      .catch((rej) => {
        console.log("rej -> ", rej);
      });
  }, []);
  /* si quermeos podemos poner como prop z={users}, no necesariamente es users={users} */

  const createUser = () => {
    let data = { name: "pepito", userName: "perez", email: "pepito@gmail.com" };
    //json.strigify -> convierte a un json del tipo string
    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    promise
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  //post me devuelve el objeto creado
  return <FetchingDatosPresentational users={users} createUser={createUser} />;
};

export default FetchingDatos;
