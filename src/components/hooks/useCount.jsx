import { useState } from "react";

//El mínimo lo especifico por defecto como 1 en caso de que el componente que lo llame
//no pase este parametro "minimo"
export const useCount = (initial, stock, minimo = 1) => {
  const [count, setCount] = useState(initial);
  //Se intancia una función incremenet que tiene en cuenta el stock para sumar un item
  const increment = () => count < stock && setCount(count + 1);
  //Se intancia una función decrement que tiene en cuenta el mínimo para restar un item
  const decrement = () => count > minimo && setCount(count - 1);
  //Se retorna el count con las funciones increment y decrement
  return { count, increment, decrement };
};
