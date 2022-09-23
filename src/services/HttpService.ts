function handleResponseError(response: Response, data: any) {
  const error = data || response.statusText
  return Promise.reject(error)
}

/***
 * Handle response from endpoints
 * When you get a http error 401, you're automaticly disconnect from front side.
 * @param response
 */
function handleResponse<T>(response: Response): Promise<T> {
  return response.text().then((text: string) => {
    let data;
    try {
      data = text && JSON.parse(text)
    } catch (e) {
      data = {
        status: response.status,
        error: response.statusText,
        message: response.statusText,
      }
    }

    if (!response.ok) {
      return handleResponseError(response, data)
    }

    return data as Promise<T>
  })
}

function get<T>(url: string): Promise<T> {
  const requestOptions: RequestInit = {
    method: "GET",
    headers: {Accept: 'application/json'}
  }

  return fetch(url, requestOptions).then((response) => {
    return handleResponse<T>(response)
  })
}

export const httpService = {
  get
}