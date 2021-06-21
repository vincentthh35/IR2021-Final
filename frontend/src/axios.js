import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:4000/api/' });

const getPoems = async () => {
  try {
    const res = await instance.get('/getPoems'); //, { params: {} }
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export { getPoems };
