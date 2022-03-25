import { useState } from "react";
import { MdDelete } from "react-icons/md";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Learn React" },
    { id: 2, checked: false, item: "Learn TypeScript" },
    { id: 3, checked: false, item: "Learn NextJS" },
    { id: 4, checked: false, item: "Learn Svelte" },
  ]);

  const handleCheck = (id) => {
    // important 👉 : never directly change the state
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // 👇 save state to local storage
    localStorage.setItem("todoList", JSON.stringify(listItems));
  };

  // delete a list
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // 👇 save state to local storage
    localStorage.setItem("todoList", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <MdDelete
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your todo is empty</p>
      )}
    </main>
  );
};

export default Content;
