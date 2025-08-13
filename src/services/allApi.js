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

export const getAllBooksApi = async (searchKey) => {
    return await commonApi('GET', `${serverUrl}/allbooks?search=${searchKey}`)
}

export const AbookDetailsApi = async (id) => {
    return await commonApi('GET', `${serverUrl}/abook/${id}`)
}

export const AddReviewApi = async (reqBody, reqHeader, id) => {
    return await commonApi('POST', `${serverUrl}/addreview/${id}`, reqBody, reqHeader)
}

export const getAllReviewApi = async (id) => {
    return await commonApi('GET', `${serverUrl}/allreviews/${id}`)
}