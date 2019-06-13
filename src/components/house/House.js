import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default class House extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imageIndex: 0
    }
  }

  handlerNextImage = () => {
    const { imageIndex } = this.state
    const { images } = this.props.house

    if (imageIndex != null && imageIndex < images.length - 1) {
      this.setState({
        imageIndex: imageIndex + 1
      })
    }
  }

  handlerPrevImage = () => {
    const { imageIndex } = this.state

    if (imageIndex != null && imageIndex > 0) {
      this.setState({

        imageIndex: imageIndex - 1
      })
    }
  }

  render () {
    const {
      id,
      description,
      full_address: fullAddress,
      images,
      price,
      public_date: publicDate,
      rating,
      total_rooms: totalRooms } = this.props.house
    const { currency } = this.props
    const { imageIndex } = this.state

    return (
      <HouseBox>

        <WrapperLeft>
          <Carusel>
            <HouseImage src={images[imageIndex]} alt='houses' />
            <button
              disabled={imageIndex <= 0 ? true : null}
              onClick={this.handlerPrevImage}
              className='arrowLeft'>
              prev
            </button>
            <button
              disabled={imageIndex >= images.length - 1 ? true : null}
              onClick={this.handlerNextImage}
              className='arrowRight'>
            next
            </button>
          </Carusel>
          <div>
            rating: <span>{rating}</span>
          </div>
        </WrapperLeft>

        <WrapperRight>
          <div>
            Адрес: <span>{fullAddress}</span>
          </div>
          <div>
            Описание: <span>{description}</span>
          </div>
          <AdditionalInfo>
            <span>комнаты: <span>{totalRooms}</span></span>
            <span>дата: <span>{publicDate}</span></span>
          </AdditionalInfo>
          {/* <div> */}
          <BtnPrice to={`/checkout/${id}`}>Купить {price} {currency.toUpperCase()}</BtnPrice>
          {/* </div> */}
        </WrapperRight>

      </HouseBox>
    )
  }
}

House.propTypes = {
  house: PropTypes.object.isRequired
}

const HouseBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;

  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`

const WrapperLeft = styled.div`
  width: 30%;
`
const WrapperRight = styled.div`
  width: 70%;
  margin-left: 10px;
`
const AdditionalInfo = styled.div`
  margin-top: 5px;
  text-align: center;
  border: 1px solid #ccc;
`

const BtnPrice = styled(Link)`
  display: block;
  width: 70%;
  margin: auto;
  margin-top: 10px;
  text-align: center
  text-decoration: none;
  border: 1px solid black;
  padding 5px;
  color: black;
  background: #ddd
`

const Carusel = styled.div`
  
`

const HouseImage = styled.img`
  width: 100%;
`
