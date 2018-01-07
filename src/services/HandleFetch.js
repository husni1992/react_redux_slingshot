export default function handleFetch(
  dispatch,
  request,
  success,
  failed,
  json = true
) {
  /** check if network is not available and return error */
  if (!navigator.onLine) {
    console.info("Not online");
    return dispatch({
      type: failed,
      error: "No Internet"
    });
  }

  return request
    .then(response => {
      if (response.ok) {
        let parsedResponse = json ? response.json() : response.text();
        return parsedResponse
          .then(payload =>
            dispatch({
              type: success,
              httpStatus: response.status,
              payload
            })
          )
          .catch(error =>
            dispatch({
              type: failed,
              httpStatus: response.status,
              error: error.message
            })
          );
      } else {
        console.log(`Server returned error code: ${response.status}`);
        return dispatch({
          type: failed,
          error: `Server error: ${response.status}`,
          errorStatusCode: response.status ? response.status : null,
          errorBody: response.text()
        });
      }
    })
    .catch(error =>
      dispatch({
        type: failed,
        error: error.message
      })
    );
}
