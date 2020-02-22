import React, { Component } from 'react'
import ContainerParent from '../Container'
import dataBarang from '../../data'
import Barang from './Barang'
import TotalHarga from './TotalHarga'


class ListBarang extends Component {

  constructor(props) {
    super(props)
    this.state = {
      barang: []
    }
  }

  componentDidMount() {
    this.setState({ barang: dataBarang })
  }

  addPrice = (qty,harga) => {

    const filterQty = this.state.barang.map(item => {

      if(item.qty === qty && item.harga === harga){
        return { ...item, qty: item.qty + 1, harga: (item.harga) * item.qty}
      }else {
        return item
      }

    });
    
    this.setState({barang:filterQty})

  }

  render() {

    console.log(this.state.barang)

    // const filterPrice = this.state.barang.sort((a, b) => {
    //   return a.harga - b.harga
    // });

    const listBarangAfterSort = this.state.barang.map((item, idx) => (
      <Barang
        key={idx}
        id={item.id}
        nama_barang={item.nama_barang}
        kategori={item.kategori}
        img={item.img}
        distributor={item.distributor}
        retur={item.retur}
        harga={item.harga}
        qty={item.qty}
        addPrice={this.addPrice}
      />
    ));

    return (
      <ContainerParent>
        { listBarangAfterSort }
        {/* <TotalHarga  /> */}
      </ContainerParent>
    )
  }
}

export default ListBarang