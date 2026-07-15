// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
// // FIX 1: Import as 'products' (plural) to represent the array
// import products from '../product'; 

// function ProductDetails() {
//   const { id } = useParams();
  
//   // FIX 2: Use 'products' (the array) to find the specific 'product' (the object)
//   // Also added String(p.id) to ensure comparison works even if ID is a number in your data
//   const product = products.find((p) => String(p.id) === id);

//   // Safety check: If product is not found
//   if (!product) {
//     return (
//       <>
//         <Link to="/" className="btn btn-dark my-3">Go Back</Link>
//         <h2>Product not found</h2>
//       </>
//     );
//   }

//   return (
//     <>
//       <Link to="/" className="btn btn-dark my-3">
//         Go Back
//       </Link>
//       <Row>
//         <Col md={6}>
//           <Image src={product.image} alt={product.name} fluid />
//         </Col>
//         <Col md={3}>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h3>{product.name}</h3>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <h5>Rating : {product.rating} | No. of reviews {product.numReviews || 0}</h5>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <p>Description : {product.description || "No description available"}</p>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <h3>Price : ₹{product.price}</h3>
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={3}>
//           <Card>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Status :</Col>
//                   <Col>
//                     {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Category :</Col>
//                   <Col>{product.category || "General"}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Brand :</Col>
//                   <Col>{product.brand || "Generic"}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Button 
//                   className="w-100" 
//                   disabled={product.countInStock === 0} 
//                   type="button"
//                 >
//                   Add To Cart
//                 </Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// }b

// export default ProductDetails;






import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';

// Check this line carefully:
// If your file is src/product.js, use this:
import products from '../product'; 

// Rest of your code...
function ProductDetails() {
  const { id } = useParams();
  
  // Find product by _id
  const product = products.find((p) => p._id === id);

  // MODIFICATION 1: Safety Check
  // If the product doesn't exist (e.g., user types wrong URL), 
  // this prevents the app from crashing.
  if (!product) {
    return (
      <div className="container">
        <Link to="/" className="btn btn-light my-3">Go Back</Link>
        <div className="alert alert-danger">Product not found</div>
      </div>
    );
  }

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      
      <Row>
        <Col md={6}>
          {/* fluid keeps the image within its column */}
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            
            <ListGroup.Item>
              {/* Added some basic styling to the rating section */}
              <strong>Rating:</strong> {product.rating} stars from {product.numReviews} reviews
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Price:</strong> ₹{product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Description:</strong> 
              <p className="mt-2">{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card shadow-sm>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <span className={product.countInStock > 0 ? "text-success" : "text-danger"}>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* MODIFICATION 2: Fixed Bootstrap 5 button class */}
              {/* 'btn-block' no longer works in Bootstrap 5. Use 'w-100' instead. */}
              <ListGroup.Item>
                <Button 
                  className="w-100 btn-dark" 
                  disabled={product.countInStock === 0} 
                  type="button"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
              
              <ListGroup.Item className="text-muted small">
                Category: {product.category} <br/>
                Brand: {product.brand}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetails;