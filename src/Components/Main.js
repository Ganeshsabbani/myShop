import React from 'react'
import { useState,useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Main = () => {
 const[products,setProducts]=useState();
 const[loading,setLoading]=useState();


   

 let componentMounted = true;
 useEffect(() => {
    const FetchApi = async () => {
      if (componentMounted) {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(true);
        localStorage.setItem("products",JSON.stringify(data))
         if(!localStorage.getItem("cart")){
            localStorage.setItem ("cart","[]")
         }
      }
      return () => {
        componentMounted = false;
      };
    };
    FetchApi();


  }, []);
   let cart=JSON.parse(localStorage.getItem("cart"))

  const handleProduct=(product)=>{
      let item = products.find(function(ele){
        return ele.id==product.id
      })

    if(cart.length==0){
           cart.push(item);
    }else{
          let res=cart.find(element=>element.id==product.id)
           if(res===undefined){
            cart.push(item)
           }
        }
        localStorage.setItem("cart",JSON.stringify(cart))
  }
  


  return (
    <div>
    {
        loading?(
            <>
            <Row xs={1} sm={2} md={3} className="g-4">
              {products.map((product) => (
                <Col  sm={12} md={6} lg={4} xl={4} style={{display:"flex",justifyContent:"center"}}  >
                  
                  <Card className="main_card">
                 
                    <Card.Img
                      className="main_image"
                      variant="top"
                      src={product.image}
                    />
                             
                    <Card.Body>
                      <Card.Title>{product.title.substring(0, 20)} </Card.Title>
                      <Card.Text>$ {product.price}</Card.Text>
                    </Card.Body>
                    <div className="buttons">
                      <Link to="/details" >
                      <Button variant="secondary" className="view_button "  >
                         Buy Now
                        </Button>
                        </Link>
                        
                     
                        <Button variant="warning" className="add_button" onClick={()=>handleProduct(product)} style={{color:"white"}} >Add To Card</Button>
                      
                    </div>
                  </Card>
     
                </Col>
              ))}
            </Row>
            </>
        ):(
            <h1>Loading...</h1>
        )
    }
    </div>
  )
}

export default Main