import axios from "axios";




// ============== Auth ================
export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/users', { user: registerData });
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user
  }
  catch (err) {
    return { error: "Invalid credentials" }
  }
}
export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    localStorage.setItem('authToken', resp.data.token);
    return resp.data.user;
  }
  catch (err) {
    return { error: "Invalid credentials" }
  }
}
export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return false;
}