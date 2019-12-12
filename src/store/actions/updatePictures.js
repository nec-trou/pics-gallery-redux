export const REQUEST_PICTURES = 'REQUEST_PICTURES'
export const RECEIVE_PICTURES = 'RECEIVE_PICTURES'

const SOURCE_URL = 'https://picsum.photos/v2/list'

export const requestPictures = () => ({
  type: REQUEST_PICTURES,
})
export const receivePictures = json => ({
  type: RECEIVE_PICTURES,
  json,
})
export function fetchPictures() {
  return function(dispatch) {
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
