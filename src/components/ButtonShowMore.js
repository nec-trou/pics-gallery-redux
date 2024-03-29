import React from 'react'
import { connect } from 'react-redux'
import { fetchMorePictures } from '../store/actions/updatePictures'

let ButtonShowMore = ({ getPictures }) => (
  <button
    onClick={() => {
      getPictures()
    }}
    className="btn btn-load-more"
  >
    Show more
  </button>
)
const mapStateToProps = state => ({ pictures: state.pictures })
const mapDispatchToProps = { getPictures: fetchMorePictures }
ButtonShowMore = connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore)
export default ButtonShowMore
