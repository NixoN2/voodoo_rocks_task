import { Container } from 'reactstrap';
import Search from "./components/Search";
import PostsList from "./components/PostsList";
import "./App.css";
function App() {
  return (
    <div className="bg-dark app">
      <div>
        <Search/>
        <PostsList />
      </div>
    </div>
  );
}

export default App;
