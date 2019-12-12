import React from 'react'
import { connect } from 'react-redux'
import { fetchPictures } from '../store/actions/updatePictures'

let ButtonReload = ({ getPictures }) => {
  getPictures()
  return (
    <button
      onClick={() => {
        getPictures()
      }}
      className="btn btn-reload"
    >
      Update pictures
    </button>
  )
}
const mapStateToProps = state => ({ pictures: state.pictures })
const mapDispatchToProps = { getPictures: fetchPictures }
ButtonReload = connect(mapStateToProps, mapDispatchToProps)(ButtonReload)
export default ButtonReload
