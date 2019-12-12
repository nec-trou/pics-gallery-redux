import {
  REQUEST_PICTURES,
  RECEIVE_PICTURES,
  LOAD_MORE_PICTURES,
} from '../actions/updatePictures'

const pictureListReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PICTURES:
      return { ...state, loading: true }
    case RECEIVE_PICTURES:
      return { ...state, json: action.json, loading: false }
    case LOAD_MORE_PICTURES:
      return {
        ...state,
        json: { ...state, json: action.json },
      }

    default:
      return state
  }
}
export default pictureListReducer
