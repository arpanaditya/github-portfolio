import axios from "axios";
import { username, API_URL } from "./Constant";

export const apidata = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(`${API_URL}/users/${username}`);
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    })
};

export const apirepos = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(`${API_URL}/users/${username}/repos`);
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    })
}
