import axios from 'axios';

const instance = axios.create({ baseURL: 'http://140.112.30.57:10726/api/' });

const getPoems = async (start, end) => {
  try {
    console.log(`GET: /getPoems\nstart: ${start}, end: ${end}`);
    const res = await instance.get('/getPoems', { params: { start, end } });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const submitArticle = async (article) => {
  try {
    console.log(`GET: /submitArticle\narticle: ${article}`);
    const res = await instance.get('/submitArticle', { params: { article } });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export { getPoems, submitArticle };
