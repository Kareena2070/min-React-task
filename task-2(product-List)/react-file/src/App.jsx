
import ProductList from "./productList"
function App() {
 
  return (
    <>

    <ProductList products={[
        { id: 1, name: "Laptop", price: "₹50,000" },
        { id: 2, name: "Phone", price: "₹20,000" },
        { id: 3, name: "Headphones", price: "₹1,500" }
    ]} />



    </>
  )
}


export default App
