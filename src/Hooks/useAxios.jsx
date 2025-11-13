import axios from "axios";

const instance = axios.create({
    baseURL:"https://home-hero-server-nine.vercel.app"
})
const useAxios = () => {
    return instance
};

export default useAxios;