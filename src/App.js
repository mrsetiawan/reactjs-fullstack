import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from '../src/components/ProductList'


function App () {

  return (
    <ProductList />
  )
}
// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       nomor: [1, 2, 3, 4]
//     }

//     console.log(`constructor ${this.state.nomor}`)
//   }


//   componentDidMount() {
//     this.setState({ nomor: this.state.nomor.concat([5, 6, 8, 9]) })
//     console.log(`after didmount ${this.state.nomor}`)
//   }

//   render() {
//     console.log(`after render ${this.state.nomor}`)

//     return (
//       <>aaaa</>
//     )
//   }
// }
// export default App;


export default App;
