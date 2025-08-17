
function ProductList({products}){
    return(
        <div className="list">
            <h2 className="listHeading">Product List</h2>
 
 
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Buy</th>
                </thead>
 
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button>Add to cart</button></td>
                    </tr>
                 ))}
                </tbody>
               
            </table>
        </div>
    );
 }
 
 
 export default ProductList
 