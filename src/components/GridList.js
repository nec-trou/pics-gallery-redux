import React from 'react'
import { connect } from 'react-redux'
import GridItem from './GridItem'

let GridList = ({ pictures, loading }) => {
  let gridList = ''
  if (pictures) {
    gridList = pictures.map((item, index) => (
      <div key={`${index}`} className="grid-item">
        <GridItem pictureSource={pictures[index]} />
      </div>
    ))
  }
  if (loading) {
    gridList = <div className="grid loading-indicator">Loading...</div>
  }
  return <div className="grid">{gridList}</div>
}

const mapStateToProps = state => ({
  pictures: state.json,
  loading: state.loading,
})

GridList = connect(mapStateToProps, null)(GridList)
export default GridList
