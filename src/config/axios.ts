import axios from 'axios'

export const reqApi = axios.create({
  baseURL: process.env.API_URL ?? 'http://localhost:3000',
  timeout: 15000,
})
