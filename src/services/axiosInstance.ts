import axios from "axios";

 const instance = axios.create({
    baseURL: `https://api.github.com/graphql`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    },
  });

  export default instance;