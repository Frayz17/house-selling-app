import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class House extends Component {
  constructor (props) {
    super(props)
    const { images } = this.props.house
    let currentImage
    images.length > 0 ? currentImage = 0 : currentImage = null

    this.state = {
      currentImage
    }
  }

  nextImage = () => {
    const { currentImage } = this.state
    const { images } = this.props.house

    if (currentImage != null && currentImage < images.length) {
      this.setState({
        currentImage: currentImage + 1
      })
    }
  }

  prevImage = () => {
    const { currentImage } = this.state

    if (currentImage != null && currentImage > 0) {
      this.setState({

        currentImage: currentImage - 1
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

    const { currentImage } = this.state

    // console.log(images.length)
    // console.log(this.state.currentImage)
    console.log(currentImage > images.length ? true : null)

    return (
      <HouseBox>TextTrackCueList

        <WrapperLeft>
          <Carusel>
            <button disabled={currentImage == 0 ? true : null} onClick={this.prevImage} className='arrowLeft'>prev</button>
            <button disabled={currentImage > images.length ? true : null} onClick={this.nextImage} className='arrowRight'>next</button>
            <img src={images[0]} width='50px' alt='houses' />
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
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`

const WrapperLeft = styled.div`
  width: 20%;
`
const WrapperRight = styled.div`
  width: 80%;
  margin-left: 5px;
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
