import { MdDelete } from "react-icons/md";

const ItemList = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
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
        aria-label={`Delete ${item.item}`}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default ItemList;
