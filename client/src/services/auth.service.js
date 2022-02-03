import axios from "axios";

const API_URL = "/auth";

const signup = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const upload = (file) => {
  const BASE_URL = 'http://localhost:5000/';
  
  console.log("f",file)
  return   axios.post(BASE_URL + 'uploadfile', file).then(response => {
    console.log("d",response.data)
  }).catch(err => {
    alert(err.message);
  });
}
     

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  upload,
  login,
  logout,
  getCurrentUser,
};

export default authService;
