// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// function SignupScreen() {
//   const [formValues, setFormValues] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     confirmpassword: '',
//     phoneNumber: '',
//     gender: '',
//     userType: '',
//     termsAccepted: false,
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const validateField = (name, value) => {
//     let error = '';
//     switch (name) {
//       case 'firstname':
//         if (!value) error = 'First name is required.';
//         break;
//       case 'email':
//         if (!value) error = 'Email is required.';
//         else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid.';
//         break;
//       case 'phoneNumber':
//         if (value.length < 10) error = 'Phone number must be at least 10 digits.';
//         break;
//       // --- PASSWORD VALIDATION ---
//       case 'password':
//         if (!value) error = 'Password is required.';
//         else if (value.length < 6) error = 'Password must be at least 6 characters.';
//         break;
//       case 'confirmpassword':
//         if (!value) error = 'Please confirm your password.';
//         else if (value !== formValues.password) error = 'Passwords do not match.';
//         break;
//       // ---------------------------
//       case 'gender':
//         if (!value) error = 'Please select a gender.';
//         break;
//       case 'userType':
//         if (!value) error = 'Please select a user type.';
//         break;
//       case 'termsAccepted':
//         if (!value) error = 'You must agree to terms.';
//         break;
//       default:
//         break;
//     }
//     setFormErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const val = type === 'checkbox' ? checked : value;

//     setFormValues({ ...formValues, [name]: val });
//     validateField(name, val);

//     // Special case: If user changes 'password', re-validate 'confirmpassword' automatically
//     if (name === 'password' && formValues.confirmpassword) {
//         if (val !== formValues.confirmpassword) {
//             setFormErrors(prev => ({...prev, confirmpassword: 'Passwords do not match.'}));
//         } else {
//             setFormErrors(prev => ({...prev, confirmpassword: ''}));
//         }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Final check before submitting
//     if (formValues.password !== formValues.confirmpassword) {
//         alert("Passwords do not match!");
//         return;
//     }
//     console.log(formValues);
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h3 className="text-center">Signup Here</h3>
//           <Form onSubmit={handleSubmit}>
//             {/* First Name */}
//             <Form.Group controlId="firstname" className="mt-3">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstname"
//                 value={formValues.firstname}
//                 onChange={handleChange}
//                 isInvalid={!!formErrors.firstname}
//               />
//               <Form.Control.Feedback type="invalid">{formErrors.firstname}</Form.Control.Feedback>
//             </Form.Group>

//             {/* Email */}
//             <Form.Group controlId="email" className="mt-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//                 isInvalid={!!formErrors.email}
//               />
//               <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
//             </Form.Group>

//             {/* Password Section */}
//             <Row>
//                 <Col md={6}>
//                     <Form.Group controlId="password" title="password" className="mt-3">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             name="password"
//                             placeholder="Enter password"
//                             value={formValues.password}
//                             onChange={handleChange}
//                             isInvalid={!!formErrors.password}
//                         />
//                         <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                     <Form.Group controlId="confirmpassword" title="confirmpassword" className="mt-3">
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             name="confirmpassword"
//                             placeholder="Confirm password"
//                             value={formValues.confirmpassword}
//                             onChange={handleChange}
//                             isInvalid={!!formErrors.confirmpassword}
//                         />
//                         <Form.Control.Feedback type="invalid">{formErrors.confirmpassword}</Form.Control.Feedback>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             {/* Phone Number */}
//             <Form.Group controlId="phoneNumber" className="mt-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="phoneNumber"
//                 value={formValues.phoneNumber}
//                 onChange={handleChange}
//                 isInvalid={!!formErrors.phoneNumber}
//               />
//               <Form.Control.Feedback type="invalid">{formErrors.phoneNumber}</Form.Control.Feedback>
//             </Form.Group>

//             {/* Gender */}
//             <Form.Group className="mt-3">
//               <Form.Label>Gender</Form.Label>
//               <Form.Select name="gender" onChange={handleChange} value={formValues.gender} isInvalid={!!formErrors.gender}>
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{formErrors.gender}</Form.Control.Feedback>
//             </Form.Group>

//             {/* User Type */}
//             <div className="mt-3">
//               <Form.Label>User Type</Form.Label>
//               <Form.Check type="radio" label="Student" name="userType" value="student" onChange={handleChange} isInvalid={!!formErrors.userType} />
//               <Form.Check type="radio" label="Professional" name="userType" value="professional" onChange={handleChange} isInvalid={!!formErrors.userType} feedback={formErrors.userType} feedbackType="invalid" />
//             </div>

//             {/* Terms */}
//             <Form.Group className="mt-3">
//               <Form.Check
//                 required
//                 label="Agree to terms and conditions"
//                 name="termsAccepted"
//                 checked={formValues.termsAccepted}
//                 onChange={handleChange}
//                 isInvalid={!!formErrors.termsAccepted}
//                 feedback={formErrors.termsAccepted}
//                 feedbackType="invalid"
//               />
//             </Form.Group>

//             <Button className="mt-3 w-100" variant="success" type="submit">
//               Register
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default SignupScreen;




import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function SignupScreen() {
  // 1. Initial State
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phoneNumber: '',
    gender: '',
    userType: '',
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({});

  // 2. Validation Logic
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstname':
        if (!value.trim()) error = 'First name is required.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = 'Email is required.';
        else if (!emailRegex.test(value)) error = 'Invalid email format.';
        break;
      case 'phoneNumber':
        if (!value) error = 'Phone number is required.';
        else if (value.length !== 10) error = 'Phone number must be exactly 10 digits.';
        break;
      case 'password':
        if (!value) error = 'Password is required.';
        else if (value.length < 6) error = 'Password must be at least 6 characters.';
        break;
      case 'confirmpassword':
        if (!value) error = 'Confirmation is required.';
        else if (value !== formValues.password) error = 'Passwords do not match.';
        break;
      case 'gender':
        if (!value) error = 'Please select your gender.';
        break;
      case 'userType':
        if (!value) error = 'Select a user type.';
        break;
      case 'termsAccepted':
        if (!value) error = 'You must accept the terms.';
        break;
      default:
        break;
    }
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  // 3. Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormValues({ ...formValues, [name]: val });
    validateField(name, val);

    // If password changes, immediately re-validate confirm password match
    if (name === 'password' && formValues.confirmpassword) {
      const matchError = val !== formValues.confirmpassword ? 'Passwords do not match.' : '';
      setFormErrors(prev => ({ ...prev, confirmpassword: matchError }));
    }
  };

  // 4. Helper for Success Icons
  // Only shows green checkmark if the field has a value AND no error
  const isFieldValid = (name) => {
    if (name === 'termsAccepted') return formValues.termsAccepted;
    return formValues[name] && !formErrors[name];
  };

  // 5. Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Final check for all fields
    const hasErrors = Object.values(formErrors).some(err => err !== '');
    const isComplete = Object.keys(formValues).every(key => {
        if (key === 'lastname') return true; // optional
        return formValues[key] !== '' && formValues[key] !== false;
    });

    if (!hasErrors && isComplete) {
      alert("Registration Successful!");
      console.log("Form Data Submitted:", formValues);
    } else {
      alert("Please complete the form correctly.");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <Card className="shadow p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Signup</h2>
              <Form onSubmit={handleSubmit}>
                
                {/* First Name */}
                <Form.Group controlId="firstname" className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    placeholder="Enter first name"
                    value={formValues.firstname}
                    onChange={handleChange}
                    isInvalid={!!formErrors.firstname}
                    isValid={isFieldValid('firstname')}
                  />
                  <Form.Control.Feedback type="invalid">{formErrors.firstname}</Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    value={formValues.email}
                    onChange={handleChange}
                    isInvalid={!!formErrors.email}
                    isValid={isFieldValid('email')}
                  />
                  <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                </Form.Group>

                {/* Password Fields */}
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="password" title="password" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="6+ chars"
                        value={formValues.password}
                        onChange={handleChange}
                        isInvalid={!!formErrors.password}
                        isValid={isFieldValid('password')}
                      />
                      <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="confirmpassword" title="confirmpassword" className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmpassword"
                        placeholder="Match password"
                        value={formValues.confirmpassword}
                        onChange={handleChange}
                        isInvalid={!!formErrors.confirmpassword}
                        isValid={isFieldValid('confirmpassword')}
                      />
                      <Form.Control.Feedback type="invalid">{formErrors.confirmpassword}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Phone Number */}
                <Form.Group controlId="phoneNumber" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="phoneNumber"
                    placeholder="10 digit mobile number"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!formErrors.phoneNumber}
                    isValid={isFieldValid('phoneNumber')}
                  />
                  <Form.Control.Feedback type="invalid">{formErrors.phoneNumber}</Form.Control.Feedback>
                </Form.Group>

                {/* Gender Select */}
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select 
                    name="gender" 
                    onChange={handleChange} 
                    value={formValues.gender} 
                    isInvalid={!!formErrors.gender}
                    isValid={isFieldValid('gender')}
                  >
                    <option value="">Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{formErrors.gender}</Form.Control.Feedback>
                </Form.Group>

                {/* User Type Radio Buttons */}
                <Form.Group className="mb-3">
                  <Form.Label className="d-block">User Type</Form.Label>
                  <Form.Check
                    inline
                    label="Student"
                    name="userType"
                    type="radio"
                    value="student"
                    onChange={handleChange}
                    isValid={formValues.userType === 'student'}
                  />
                  <Form.Check
                    inline
                    label="Professional"
                    name="userType"
                    type="radio"
                    value="professional"
                    onChange={handleChange}
                    isValid={formValues.userType === 'professional'}
                  />
                  {formErrors.userType && (
                    <div className="text-danger small mt-1">{formErrors.userType}</div>
                  )}
                </Form.Group>

                {/* Terms and Conditions Checkbox */}
                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="I agree to terms and conditions"
                    name="termsAccepted"
                    onChange={handleChange}
                    checked={formValues.termsAccepted}
                    isInvalid={!!formErrors.termsAccepted}
                    isValid={formValues.termsAccepted}
                  />
                  <Form.Control.Feedback type="invalid">{formErrors.termsAccepted}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-2">
                  Create Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupScreen;