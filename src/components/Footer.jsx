const Footer = ({ items }) => {
  return (
    <footer>
      <p>
        {items.length} Todo {items.length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
