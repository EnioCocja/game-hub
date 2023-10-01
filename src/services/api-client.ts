import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7eff5eefe6414bbda39bb7bf44038c77'
    }
})