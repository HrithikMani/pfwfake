
const BASE_URL = 'http://localhost:3000/login';

export const getAllusers = async()=>{
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data;
}

