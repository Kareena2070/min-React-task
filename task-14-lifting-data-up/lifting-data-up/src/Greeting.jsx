function Greeting({ name }) {
  return <h2>{name ? `Hello, ${name}!` : "Please enter your name."}</h2>;
}

export default Greeting;
