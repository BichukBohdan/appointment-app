import axios from "axios";

export const BASE_URL = "http://192.168.2.155:1337"
const BASE_API_URL = "http://192.168.2.155:1337/api/"
const API_KEY = '0b9653a378a672e62785935becdec6ea1790f2ece4af3cd95726140cd9e06a6165ea112784b6ed3fcd7cada44f265058435aa7e0546397dd1a11c02aafb189e45199d6a0e0cdf90b1b0620da58812e8987a23438d99db4beb70fa01cb3e016536d9851930755499d06bc5b40cae888b616417e810923e9020d4bdf2d0cde8d56'

const AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
})

const getSlider = () => AxiosInstance.get('/sliders?populate=*')
const getCategories = () => AxiosInstance.get('/categories?populate=*')

const getPremiumHospitals = () => AxiosInstance.get('/hospitals?filter[Premium][$eq]=true&populate=*')

const getHospitalsByCategory = (categoryName) => AxiosInstance.get(`/hospitals?filters[categories][Name][$in]=${categoryName}&populate=*`)

const createAppointment = (data) => AxiosInstance.post('/appointments', data)

const getAllHospitals = () => AxiosInstance.get('/hospitals?populate=*')

const getUserAppointments = (email) => AxiosInstance.get(`/appointments?filters[Email][$eq]=${email}&populate=*`)

export default {
  getSlider,
  getCategories,
  getPremiumHospitals,
  getHospitalsByCategory,
  createAppointment,
  getAllHospitals,
  getUserAppointments,
}
