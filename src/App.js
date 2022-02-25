import Nav from "./components/Nav";
import React from "react";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Nav />
      <div className="h-[100vh]">
        <Form />
      </div>
    </>
  );
}

export default App;
