import axios from 'axios';

// export axios with its base url
export default axios.create({
    baseURL: "http://localhost:3001"
});