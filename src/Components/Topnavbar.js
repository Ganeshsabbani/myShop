import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';


const Topnavbar = () => {

  const item=JSON.parse(localStorage.getItem("cart"))



  return (
    <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Myshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="CART" id="basic-nav-dropdown">
           {item.length? (
                  <div className="cart_detail">
                    <div className="cart_item">
                      {item.map((e) => {
                        return (
                          <div className="item_details">
                            <img
                              src={e.image}
                              style={{
                                width: "100px",
                                height: "100px",
                                margin: "5px",
                              }}
                            ></img>
                            <span>
                              {" "}
                              <b>{e.title.substring(0, 15)}</b>
                            </span>
                            <span  style={{ marginRight: "10px" }}>
                              {" "}
                              <b>${e.price}</b>
                            </span>
                            
                          
                          
                            
                          </div>
                        );
                      })}
                     
                    </div>
                  </div>
                ) : (
                  <h6 style={{margin:"10px"}} >Your cart is empty!</h6>
                )} 
            </NavDropdown>
            <Nav.Link >
            <Badge bg="warning" text="dark">
                       {item.length}
                     </Badge>{' '}
            </Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
// <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
export default Topnavbar