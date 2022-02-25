import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const del = <FontAwesomeIcon icon={faTrash} />;
const Form = () => {
  // hooks
  const [inputs, setInputs] = useState("");
  const [todos, setTodos] = useState([]);
  //function
  const setTiteInput = (e) => {
    setInputs(e.target.value);
  };
  const todoHandel = (e) => {
    e.preventDefault();

    let data = { inputs, id: Math.floor(Math.random() * 100) };
    if (inputs) {
      setTodos((values) => [...values, data]);
    }
  };
  const delet = (id) => {
    console.log("hellow world");
    setTodos(
      todos.filter((a) => {
        if (a.id !== id) {
          return a;
        }
        return;
      })
    );
  };

  const check = () => {};

  //returns

  return (
    <div className="mx-auto w-[300px] bg-white space-y-5 rounded-[1rem] p-5">
      <form action="" onSubmit={todoHandel} className="">
        <input
          type="text"
          onChange={setTiteInput}
          placeholder="todos.."
          className="border-black outline-none border-b-2"
        />
        <button className="pl-3">Add</button>
      </form>

      {todos.map((i) => (
        <section
          key={i.id}
          className="flex justify-between items-center mx-auto"
        >
          <input type="checkbox" onClick={""} />
          <p>{i.inputs}</p>
          <button onClick={(e) => delet(i.id)}>{del}</button>

          <hr />
        </section>
      ))}
    </div>
  );
};

export default Form;
