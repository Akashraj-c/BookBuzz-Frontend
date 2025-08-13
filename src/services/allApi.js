import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/register`, reqBody)
}

export const loginApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/login`, reqBody)
}

export const addBookApi = async (reqBody, reqHeader) => {
    return await commonApi('POST', `${serverUrl}/addbook`, reqBody, reqHeader)
}

export const getAllBooksApi = async () => {
    return await commonApi('GET', `${serverUrl}/allbooks`)
}

export const AbookDetailsApi = async (id) => {
    return await commonApi('GET', `${serverUrl}/abook/${id}`)
}