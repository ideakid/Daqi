import Axios from 'axios'
const RESOURE_NAME = 'stations'
export default {
  getAll () {
    return Axios.get(RESOURE_NAME)
  }
}
