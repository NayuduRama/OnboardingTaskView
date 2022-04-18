import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar, Modal, Row, Col, Form} from 'react-bootstrap';  

function Products () {
    const [products, setProducts] = useState([]);
    const [product, setProduct]= useState([])
    const [display, setDisplay] = React.useState(false);
    const [displayEdit, setDisplayEdit] = React.useState(false);
    const [displayDelete, setDisplayDelete] = React.useState(false);

    const getProducts = async () =>{
      const res = await Axios.get('https://localhost:44352/api/ProductsNew');
      setProducts(res.data); 
    }
 
  useEffect(() => {  
    getProducts();
  }, []);

  const  handleAddProduct = (event) => {
    event.preventDefault();
    setDisplay(false);
    console.log(event.target.ProductName.value, event.target.Price.value);
    Axios.post('https://localhost:44352/api/ProductsNew', {
            Name:event.target.ProductName.value,
            Price:event.target.Price.value,
    }).then((res) => {
      console.log(res.status);  
      window.location.reload(false);
    }) 
    .catch((err) => {
      console.log(err);
    }) 
}
const  handleEditProduct = (event) => {
  event.preventDefault(); 
  setDisplay(false);
  product.Name= event.target.ProductName.value;
  product.Price = event.target.Price.value;
  console.log(event.target.ProductName.value, event.target.Price.value);
  console.log("edit product handle");
  console.log(product);
  Axios.put(`https://localhost:44352/api/ProductsNew/${product.Id}`, product).then((res) => {
    console.log(res.status);  
    window.location.reload(false);
  }) 
  .catch((err) => {
    console.log(err);
  }) 
}
const preHandleEditProduct = (product) => {
  setDisplayEdit(true);
  setProduct(product);
  console.log("Pre handle edit");
  console.log(product)
};
const  handleDeleteProduct = (event) => {
  event.preventDefault(); 
  setDisplay(false); 
  Axios.delete(`https://localhost:44352/api/ProductsNew/${product.Id}`).then((res) => {
    console.log(res.status);  
    window.location.reload(false);
  }) 
  .catch((err) => {
    console.log(err);
  }) 
}

const preHnadleDeleteProduct = (product) => {
  setDisplayDelete(true);
  setProduct(product);
  console.log("Delete");
  console.log(product)
};

    return ( 
        <div className='container'> 
         <div>
          <div>
          {/* Add a new Product */}
          <ButtonToolbar>
                  <Modal show={display} onHide={() => setDisplay(false)}>
                      <Modal.Header closeButton>
                          <Modal.Title>Add a new Product</Modal.Title>
                      </Modal.Header>
                      <Modal.Body> 
                          <Row>
                              <Col sm={6}>
                                  <Form onSubmit={handleAddProduct}>
                                      <Form.Group controlId="ProductName">
                                          <Form.Label>Customer Name</Form.Label>
                                          <Form.Control type="text" name="ProductName" required 
                                          /> 
                                      </Form.Group>
                                      <Form.Group controlId="Price">
                                          <Form.Label>Price</Form.Label>
                                          <Form.Control type="text" name="Price" required 
                                          /> 
                                      </Form.Group>

                                      <Form.Group>
                                          <Button variant="primary" type="submit">
                                              Add Product
                                          </Button>
                                      </Form.Group>
                                  </Form>
                              </Col>
                          </Row>
                          </Modal.Body>
                      <Modal.Footer> 
                          <Button className="btn btn-danger" onClick={() => setDisplay(false)}>Close</Button> 
                      </Modal.Footer>
                  </Modal>
              <Button variant='primary'  onClick={() => setDisplay(true)}>
                  Add Product
              </Button>
          </ButtonToolbar>
          </div>
            {/* Edit customer modal */}
            
          <Modal show={displayEdit} onHide={() => setDisplayEdit(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Customer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                     <Row>
                            <Col sm={6}>
                                <Form onSubmit={handleEditProduct}>
                                    <Form.Group controlId="ProductName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control 
                                        defaultValue={product.Name}
                                        type="text" name="ProductName" required 
                                        /> 
                                    </Form.Group>
                                    <Form.Group controlId="Price">
                                        <Form.Label>Product Price</Form.Label>
                                        <Form.Control 
                                          defaultValue={product.Price}
                                          type="text" name="Price" required 
                                        /> 
                                    </Form.Group>
                                    <Form.Group> 
                                        <button   className="btn btn-success" type="submit">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path> </svg>     
                                            </button>
                                    </Form.Group>
                                </Form>
                            </Col>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer> 
                        <Button className="btn btn-danger" onClick={() => setDisplay(false)}>Close</Button> 
                    </Modal.Footer>
          </Modal>
          {/* Delete customer modal */}
          <Modal show={displayDelete} onHide={() => setDisplayDelete(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                     <Row>
                            <Col sm={6}>
                                  Are you sure? 
                            </Col>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer> 
                    <button   className="btn btn-danger" type="submit" onClick={handleDeleteProduct}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path> </svg>     
                                            </button>
                        <Button className="btn btn-dark" onClick={() => setDisplayDelete(false)}>Close</Button> 
                    </Modal.Footer>
          </Modal>
          
        </div>
         <Table className="table">
                <thead>
                    <tr> 
                        <th>Name</th>
                        <th>Price</th> 
                    </tr> 
                </thead>
                <tbody>
                    {products.map(product => (
                    <tr key={product.Id}> 
                        <td>{product.Name}</td>
                        <td>${product.Price}</td> 
                        <td>  
                            <button type="button" className="btn btn-success" onClick={() => preHandleEditProduct(product)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                                </svg>
                                        Edit Product             
                            </button> 
                      </td>  
                        <td>  
                            <Button variant='danger' className='m-2' onClick={() => preHnadleDeleteProduct(product)}>
                                   <i className="bi bi-archive-fill"></i>
                            </Button>
                        </td> 
                    </tr>) )}
                </tbody>
            </Table>

        </div>
     );
     
}
export default Products;