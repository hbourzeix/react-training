import React from 'react'
import styled, { css } from 'styled-components'

const Description = styled.div`
 display: flex;
  align-items: flex-start;
`

const Figure = styled.div`
margin-right: 1em;
`

const Body = styled.div`
  flex:1;
`



// how would we display the image on the right ?
export const BeerDescription = ({ name, url, description }) => (
  <Description>
    <Figure>
        <img height="200px" src={url} alt={name}/>
    </Figure>
    <Body>
      <h3>{name}</h3>
      <p data-ut="description">{description}</p>
    </Body>
  </Description>
)

