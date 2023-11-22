import "./App.css";
import Header from "./components/Header";
import Moodal from "./lesson-2/Moodal";
import Render from "./render/Render";



function App() {
    return (
    <div className="app">
      <Header/>
      <Moodal/>
      <Render/>
    </div>
  )
}

export default App;
