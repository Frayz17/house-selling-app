import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
      description,
      full_address: fullAddress,
      images,
      price,
      public_date: publicDate,
      rating,
      total_rooms: totalRooms } = this.props.house

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
          <BtnPrice>купить за {price}</BtnPrice>
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
  padding: 5px;
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

const BtnPrice = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 5px;
`

const Carusel = styled.div`
  >div {

  }
`

const HouseImage = styled.img`
  width: 100%;
`

/*
description:
"Дом не достроенный (без внутренних отделочных работ кирпич, газоблок) на 60 кв.м. крытый битумная черепица, утеплен 100мм, метало пластиковые окна."
full_address:
"Киев, Киевская область, Дарницкий"
id:
5401
images:
Array[2]
price:
203400
public_date:
"2018-07-07"
rating:
2
total_rooms:
2
*/
