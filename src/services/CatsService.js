import axios from "axios";

axios.defaults.headers.common['x-api-key'] = '8b06bd36-7b19-474f-9d78-12d40543c3ea';

const requestParameters = {
    size: 'med',
    order: 'ASC',
    limit: 15,
    page: 1, 
    format: 'json'
}

const getCatsFromAPI = async () =>
{
    const res = await axios.get('https://api.thecatapi.com/v1/images/search', { params: requestParameters });

    if (res.status > 226)
    {
        throw new Error(`Error, status ${res.status}`);
    }
    
    return await JSON.parse(res.request.response).map(item => ({...item, favorite: false}));
}

export default getCatsFromAPI;