import React from 'react'

export default function Square({value, squareClick}) {


  return <div className='square' onClick={squareClick}>{value}</div>
}
