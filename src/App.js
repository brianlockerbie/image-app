import React, {useState, useEffect} from "react";
import Hero from "./components/Hero";
import "./App.css";

const App = () => {
  const API_KEY = "18681509-e90ed8ad8817ebd2bf71771e8";

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, []);

  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
