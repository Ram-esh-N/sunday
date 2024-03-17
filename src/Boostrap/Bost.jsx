import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./Boos.css"

function Bost() {
  //   const [validated, setValidated] = useState(false);

  //   const handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     if (form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();
  //     }

  //     setValidated(true);
  //   };

  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="row">
        <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-md-4" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu col-md-4">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
        </div>
  {/* <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div> */}
</nav>
      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3"> <br/>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback><br/>
        </Form.Group> <br/>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form> */}
    <div className="container mt-5 d-flex justify-content-center align-item-center">
      <div className="row">
      <div className="header-col-4 d-flex justify-content-center align-item-center">
         <div className="head">
          <h1>flexioex</h1>
         </div>
         <div className="nav-col-4 mt-4 d-flex justify-content-center align-item-center">
              <div className="home">Home</div>
              <div className="home">bout</div>
              <div className="home">Contact</div>
              <div className="home">Product</div>
         </div>
         <div className="cart-col-4 mt-4 d-flex float-end justify-content-center; align-item-center pl-3 ">
              <div className="cord">o</div>
              <div className="cord">o</div>
              <div className="cord">o</div>
         </div>
    </div>
      </div>
  
    </div>
   
      <div className="container mt-5  gap-1 mb-5 " >
        <div className="row">
        <div className="col-md-4 bg-primary text-white p-5  "><p> <button className='btn btn btn-danger border  '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div>
        <div className="col-md-4 bg-success text-white p-5 "><p> <button className='btn btn btn-primary  border '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div>
        <div className="col-md-4 bg-warning text-white p-5 "><p> <button className='btn btn btn-primary  border '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div>
        {/* <div className="col-md-3 bg-danger text-white p-5 "><p> <button className='text-info bg-danger p-3 border btn btn-primary  '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div> */}
        </div>
      </div>
      <div className="container mt-5 mb-5 justify-content-center d-flex  " >
      <div className="row">
        <div className="col-md-4 bg-primary text-white p-5 "><p> <button className='btn border btn btn-primary   '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div>
        <div className="col-md-4 bg-success text-white p-5  "><p> <button className='btn border btn btn-primary   '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div>
        <div className="col-md-4 bg-warning text-white p-5  "><p> <button className='btn border btn btn-primary   '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div>
        {/* <div className="col-md-3 bg-danger text-white p-5 "><p> <button className='text-info bg-danger p-3 border btn btn-primary  '>click me</button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro accusantium culpa laboriosam, quisquam labore, cumque, distinctio eveniet vel ex voluptatem. Veniam eum fugit ipsa qui adipisci culpa excepturi impedit.</p></div> */}
        </div>
      </div>

     

     

    </div>

  );
}

export default Bost;