import axios from 'axios';
const API = {
    // 获取机构信息
    // fetch(page,pageSize) {//加载
    //     return request(`/api/users?_page=${page}&_limit=${pageSize}`);
    // },
    // fetch(page,pageSize) {//加载
    //     return axios.get(`/system/winner/list?currentPage=${page}&pageSize=${pageSize}`);
    // },
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
    search(page,values,pageSize) {//搜索
        if(values===undefined){
          values='';
        }
        return axios.get(`/system/winner/search?searchStr=${values}&currentPage=${page}&pageSize=${pageSize}`);
    },

};

export default API;