import api from '../../mock-api.json'
export const getUserInfo = async () => {
  const getUserData = await api
  return getUserData
};