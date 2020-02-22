import React, { Component } from 'react'
import ContainerParent from '../Container'
import dataBarang from '../../data'
import Barang from './Barang'

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

  addPrice = harga => {

    const filterHarga = this.state.barang.map(item => {

      if(item.harga === harga){
        return { ...item, harga: item.harga * harga }
      }else {
        return item
      }

    });
    
    this.setState({barang:filterHarga})

  }

  render() {

    console.log(this.state.barang)

    const filterPrice = this.state.barang.sort((a, b) => {
      return a.harga - b.harga
    });

    const listBarangAfterSort = filterPrice.map((item, idx) => (
      <Barang
        key={idx}
        id={item.id}
        nama_barang={item.nama_barang}
        kategori={item.kategori}
        img={item.img}
        distributor={item.distributor}
        retur={item.retur}
        harga={item.harga}
        deskripsi={item.deskripsi}
        addPrice={this.addPrice}
      />
    ));

    return (
      <ContainerParent>
        { listBarangAfterSort }
      </ContainerParent>
    )
  }
}

export default ListBarang