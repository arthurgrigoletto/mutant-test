import axios from 'axios'
import User from '../models/User'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users', { cancelToken: source.token })

  return response.data
}

export default api
