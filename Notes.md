# ReactJS Full Course

Arrays are valid and can be printed as a React Child Node

`<p>{[1, 2, 3]}</p>`

The above code will display 123 on the site

---

Whereas Objects are not valid as a React child

`<p>{a : 1, b : 2}</p>`

The above code will give an error.

---

React will not display boolean values onto the webpage

` <p>{true === 1} </p>`

` <p>{false === 0} </p>`

` <p>{true === false} </p>`

---

```
const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <main>
      <button onClick={handleClick}>Click Me</button>
    </main>
  );

```

On click events, we don't call the function with (), as it calls the function immediately

Instead we use the reference to handle click events

```
const handleClick = (name) => {
    console.log(`Hello {name}`);
  };
  return (
    <main>
      <button onClick={() => handleClick("Surya")}>Click Me</button>
    </main>
  );

```

Its worth to notice that in the above example, even though we call the handleClick function immediately, it wont trigger it during the first render as it is within an anonymous function

---

```
const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log("increment");
    console.log(count);
  };
  const decrementCount = () => {
    setCount(count - 1);
    setCount(count - 1);
    console.log("decrement");
    console.log(count);
  };
  console.log("outer count");
  console.log(count);

  return (
    <main>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </main>
  );

```

Here, in the above example, count is initially set to 0

```

const incrementCount = () => {
    setCount(count + 1);
    console.log("increment");
    console.log(count);
  };

 return (
    <main>

      <button onClick={incrementCount}>Increment</button>

    </main>
  );

```

In the increment count function, if we try to log the value of count after increment, it will not log 1 but 0 to the console

initial value - 0

count = 0;

value of count when incrementCount function is called - 0

count = 0;

setCount(count + 1);

console.log(count);

which means,

setCount(0 + 1);

console.log(0);

---

```
const incrementCount = () => {
    setCount(count + 1);
     setCount(count + 1);
    console.log("increment");
    console.log(count);
  };

 return (
    <main>

      <button onClick={incrementCount}>Increment</button>

    </main>
  );

```

changing the state value twice wont affect or change the value of count

```
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);

```

setCount(count + 1) - here the count value is 0 initially

setCount(count + 1); - here also the initial count value is 0

console.log(count) - 0
