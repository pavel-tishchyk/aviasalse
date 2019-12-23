import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',    
});

export const getSearchId = async () => (
    await instance.get(`search`)
        .then(response => response.data)
)

export const getTickets = async (searchId) => (
    await instance.get(`tickets?searchId=${searchId}`)
        .then(response => response.data)
)

