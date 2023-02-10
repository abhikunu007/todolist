
import { ReactNotifications } from "react-notifications-component";
import TodoContainer from "./components/todoContainer";

function App() {
  return (
    <div className="App">
      {/* using ReactNotifications for rendering up all the notifications */}
      <ReactNotifications />
      {/* Rendering the todo container component */}
      <TodoContainer/>
    </div>
  );
}

export default App;
