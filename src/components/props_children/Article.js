import React, { Component } from 'react'
import Container from './Container'

export default class Article extends Component {
  render() {
    return (
      <Container>
        <ArticleChild title='beatles' />
      </Container>
    )
  }
}

const ArticleChild = (props) => {

  return (
    <>
      <p>{props.title}</p>
    </>
  )

}
