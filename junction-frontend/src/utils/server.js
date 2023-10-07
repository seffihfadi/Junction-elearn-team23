import axios from 'axios'
// server functions

export const registerUser = async (data) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/register/', JSON.stringify(data))
    console.log('response', response)
    localStorage.setItem('TOKEN', response.data.access_token)
  } catch (error) {
    console.log('error registerUser', error)
  }
}
// {headers: {Authorization: `Bearer ${}`}}
export const getUser = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/getuser/', 
      {headers: {Authorization: `Bearer ${localStorage.getItem('TOKEN')}`}}
    )
    // console.log('response', response)
    return response.data.user
  } catch (error) {
    console.log('error get user', error)
  }
}