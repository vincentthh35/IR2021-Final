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

const getPoemNumber = async () => {
  try {
    console.log(`GET: /getPoemNumber\n`);
    const res = await instance.get('/getPoemNumber');
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
};

const getMusic = async (songId) => {
  try {
    console.log(`GET: /getMusic\nsongId: ${songId}`);
    const res = await instance.get('/getMusic', {
      params: { id: songId },
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'audio/wav',
      }
    });
    const blob = new Blob([res.data], {
      type: 'audio/wav',
    });
    const url = URL.createObjectURL(blob);
    // console.log(res.data);
    console.log(url.slice(5));
    return url.slice(5);
  } catch (e) {
    console.log(e);
  }
};

const getLyrics = async (songId) => {
  try {
    console.log(`GET /getLyrics\nsongId: ${songId}`);
    const res = await instance.get('/getLyrics', { params: { id: songId } });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export { getPoems, submitArticle, getPoemNumber, getMusic, getLyrics };
