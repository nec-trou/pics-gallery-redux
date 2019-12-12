import React from 'react'

const GridItem = ({ pictureSource }) => {
  const picture = pictureSource
  return (
    <div className="grid-item-wrapper">
      <img className="grid-item__image" src={picture.download_url} alt=""></img>
      <div className="grid-item__info">
        <p className="grid-item__author">{picture.author}</p>
        <a className="grid-item__link" href={picture.url} target="_blank"></a>
      </div>
    </div>
  )
}

export default GridItem
