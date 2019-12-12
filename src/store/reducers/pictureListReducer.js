import { REQUEST_PICTURES, RECEIVE_PICTURES } from '../actions/updatePictures'

const pictureListReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PICTURES:
      return { ...state, loading: true }
    case RECEIVE_PICTURES:
      return { ...state, json: action.json, loading: false }
    default:
      return state
  }
}
export default pictureListReducer
