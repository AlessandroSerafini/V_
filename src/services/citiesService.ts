import { httpClient } from '../http-client';

export const getCities = async () => httpClient.get('/cities');
