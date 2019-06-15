import axios from 'axios'
import User from '../models/User'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users')

  return response.data
}

export {
  getUsers
}
