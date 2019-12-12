export const REQUEST_PICTURES = 'REQUEST_PICTURES'
export const RECEIVE_PICTURES = 'RECEIVE_PICTURES'
export const LOAD_MORE_PICTURES = 'LOAD_MORE_PICTURES'

const SOURCE_URL = 'https://picsum.photos/v2/list'

export const requestPictures = () => ({
  type: REQUEST_PICTURES,
})

export const receivePictures = json => ({
  type: RECEIVE_PICTURES,
  json,
})
export function fetchPictures() {
  return dispatch => {
    dispatch(requestPictures())
    return fetch(SOURCE_URL)
      .then(
        response => response.json(),
        error =>
          console.log('There is a problem with pictures source url. ', error)
      )
      .then(json => {
        dispatch(receivePictures(json))
      })
  }
}

export const loadMorePictures = () => {
  return (dispatch, getState) => {
    const currentData = getState().json
    dispatch(requestPictures())
    return fetch(SOURCE_URL)
      .then(
        response => response.json(),
        error =>
          console.log('There is a problem with pictures source url. ', error)
      )
      .then(json => {
        dispatch(receivePictures([...currentData, ...json]))
      })
  }
}
