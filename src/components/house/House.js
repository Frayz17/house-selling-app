import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function House ({ house }) {
  const {
    description,
    full_address: fullAddress,
    images,
    price,
    public_date: publicDate,
    rating,
    total_rooms: totalRooms } = house

  return (
    <HouseBox>

      <WrapperLeft>
        <img src={images[0]} width='50px' alt='houses' />
        <div>
          rating: <span>{rating}</span>
        </div>
      </WrapperLeft>

      <WrapperRight>
        <div>
          address: <span>{fullAddress}</span>
        </div>
        <div>
          description: <span>{description}</span>
        </div>
        <div>
          <span>rooms: <span>{totalRooms}</span></span>
          <span>date: <span>{publicDate}</span></span>
        </div>
        <div>
          <button>купить за {price}</button>
        </div>
      </WrapperRight>

    </HouseBox>
  )
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
  width: 50%
`
const WrapperRight = styled.div`
  width: 50%
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
