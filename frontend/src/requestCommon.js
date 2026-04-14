export const BAD_REQUEST = 400
export const OK = 200
export const INTERNAL_ERROR = 500
export const CREATED = 201
export const NOT_FOUND = 404
export const UNAUTHORISED = 401

const SERVER_ADDRESS = "http://localhost:8000/"

export async function get(requestName){
  const request = await fetch(SERVER_ADDRESS + requestName,{
    method:"GET",
    headers:{
      "Authorization":"test"
    }
  })
  if (request.status !== OK) {
     throw new RequestException(await request.text())
  }
  return request.json()
}

export async function post(requestName,body, auth){
    const request = await fetch(SERVER_ADDRESS + requestName,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":auth
        },
        body:JSON.stringify(body)
    })
    if (request.status !== OK) {
        throw new RequestException(await request.text())
    }
    return request.json()
}

class RequestException extends Error {
  
}