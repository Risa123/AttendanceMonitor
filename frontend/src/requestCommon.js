const SERVER_ADDRESS = "http://localhost:8000/"

export async function get(requestName){
  const request = await fetch(SERVER_ADDRESS + requestName,{method:"GET"})
  if (request.status !== OK) {

  }
  return request.json()
}

export async function post(requestName,body){
    const request = await fetch(SERVER_ADDRESS + requestName,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })
    if (request.status !== OK) {

    }
    return request.json()
}

export const BAD_REQUEST = 400
export const OK = 200
export const INTERNAL_ERROR = 500
export const CREATED = 201
export const NOT_FOUND = 404
export const UNAUTHORISED = 401