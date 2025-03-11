export const SET_TOKEN = (key: string, token: string) => {
  localStorage.setItem(key, token)
}
export const GET_TOKEN = (key: string) => {
  return localStorage.getItem(key)
}
