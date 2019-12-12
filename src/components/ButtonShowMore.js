import React from 'react'
import { connect } from 'react-redux'
import { fetchPictures } from '../store/actions/updatePictures'

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
const mapStateToProps = state => ({ channel: state.channel })
const mapDispatchToProps = { getPictures: fetchPictures }
ButtonShowMore = connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore)
export default ButtonShowMore
