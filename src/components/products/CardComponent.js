
import React, { useState } from 'react';
import axios from 'axios';
 
import './CardComponent.css';



            
function CardComponent(props) {

    const [products, setProducts] = useState(null);

    const apiURL = "https://fakestoreapi.com/products";
 
    const fetchData = async () => {
        const response = await axios.get(apiURL);
        
        setProducts(response.data)
        console.log(response)
        console.log(products)
    }

    

    

    return (
        <div className="card-component">

            { products && 
              products.map((product, index) => {

                    return (
                      <div className="card" key={products.id}>
                          <h2>{product.title} </h2>
                          <img className="card-image" src={product.image} alt="product" />
                          {/* <p>{product.description} </p> */}
                          <p>{product.price}</p>
                          <button>Add to cart</button>
                      </div>
                    )

              }) 
            }

            {/* <div className="card">
               <img src="https://picsum.photos/200/300" alt="product" /> 
                <h1>Tailored jeans</h1>
                <p>$99</p>
                <p>Some text about the jeans..</p>
                <p><button>Add to Cart</button></p>
            </div> */}
            <button onClick={fetchData} >fetch</button>
           
        </div>
    );
}

export default CardComponent;