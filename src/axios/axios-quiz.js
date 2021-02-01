import axios from 'axios'


export default axios.create({
  baseURL: 'https://react-quiz-6f104-default-rtdb.firebaseio.com',
})