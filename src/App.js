import { useState, useEffect } from "react";
// components
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // 👇 save state to local storage
    localStorage.setItem("todoList", JSON.stringify(items));
    console.log(items);
  }, [items]);

  // add a list
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  // check the completed todo
  const handleCheck = (id) => {
    // important 👉 : never directly change the state
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  // delete a list
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="React TodoList" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.trim().toLowerCase().includes(search.trim().toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
