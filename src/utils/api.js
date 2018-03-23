import axios from 'axios';
const API = {
    // 获取机构信息
    // fetch(page,pageSize) {//加载
    //     return request(`/api/users?_page=${page}&_limit=${pageSize}`);
    // },
    fetch(page,pageSize) {//加载
        return axios.get(`/system/winner/list?currentPage=${page}&pageSize=${pageSize}`);
    },
    remove(id) {//删除
        return axios.post(`/system/winner/delete`, {id});
    },
    patch(options) {//编辑
        console.log(options);
        return axios.post(`/system/winner/update`, options);
    },
    create(options) {//编辑
        console.log(options);
        return axios.post(`/system/winner/add`, options);
    },

};

export default API;