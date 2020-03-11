import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Form,
  Button,
  Row,
  ListGroup

} from 'react-bootstrap'


export default class Fields extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    Validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    error: false
  }

  onChange (evt) {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
  
    this.setState({value, error});
    this.props.onChange({name, value, error});
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value })
  }

  render() {
    return (
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
        <Form.Text className="text-danger">
          {this.state.error}
        </Form.Text>
      </Form.Group>
    )
  }
}



// import React, { Component } from 'react'
// import Fields from './Fields';

// import {
//   Container,
//   Col,
//   Form,
//   Button,
//   Row,
//   ListGroup

// } from 'react-bootstrap'

// export default class MyForm extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       people: [],
//       fields: {
//         name:'',
//         email:''
//       },
//       fieldsError :{}
//     }
//   }
  

//   validate = () => {
//     const person = this.state.fields
//     const fieldsError = this.state.fieldsError
//     // const errMessages = Object.keys(fieldsError).filter((k) => fieldsError[k])
//     // if (!person.name) true
//     // if (!person.email) true
//     // if (errMessages.length) true 
//   }

//   onInputChange = ({name, value, error}) => {
//     const fields = {...this.state.fields}
//     const fieldsError = this.state.fieldsError
//     fields[name] = value
//     fieldsError[name] = error

//     this.setState({fields, fieldsError})
//   }

//   onFormSubmit = (event) => {
//     event.preventDefault()
    
//     const person = {...this.state.fields}
//     const people = [...this.state.people]
    
//     if(this.validate()) return

//     this.setState({
//       people:people.concat(person),
//       fields: {
//         name:'',
//         email:''
//       }
      
//     })

//   }

//   render() {
//     console.log(this.state.fields.name)
//     return (
//       <Container>
//         <Row>
//           <Col md={{ span: 6, offset: 3 }}>
//             <Row>
//               <Col xs={12} className='m-3'>
//                 <h3>
//                   <center>
//                     <b>What do you think in REACT ?</b>
//                   </center>
//                 </h3>
//               </Col>
//               <Col xs={12} className='mb-3'>
//                 <Form onSubmit={this.onFormSubmit}>

//                   <input 
//                     label="Name"
//                     name='name'
//                     placeholder="Enter Name"
//                     value={this.state.fields.name}
//                     onChange={this.onInputChange}
//                   />

//                   {/* <Fields 
//                     label="Email"
//                     name='email'
//                     placeholder="Enter Email"
//                     value={this.state.fields.email}
//                     onChange={this.onInputChange}
//                   /> */}

//                   <Button variant="primary" type="submit">
//                     Submit
//                   </Button>
//                 </Form>
//               </Col>
              
//               <Col xs={12}>
//                 <h3 className='text-center'>List</h3>
//                 <ListGroup>
//                   {this.state.people.map((item,idx) => (
//                       <ListGroup.Item key={idx}>
//                         <span>Nama: {item.name} <br /> Alamat: {item.email}</span> 
//                       </ListGroup.Item>
//                     )
//                   )}
//                 </ListGroup>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }
