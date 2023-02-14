


// importing all required libraries
import { ReactNotifications } from "react-notifications-component";

import Navbar from "./components/navbar.js";

// importing all required components
import TodoContainer from "./components/todoContainer";

// creating an App component
function App() {

  return (
    <div className="App">

      
      {/* using ReactNotifications for rendering up all the notifications */}
      <ReactNotifications />

      <Navbar/>
      {/* Rendering the todo container component */}
      <TodoContainer/>
    </div>
  );
}

export default App;
