import request from './request';
const API = {
    // 获取机构信息
    // fetch(page,pageSize) {//加载
    //     return request(`/api/users?_page=${page}&_limit=${pageSize}`);
    // },
    fetch(page,pageSize) {//加载
        return request(`/system/winner/list?currentPage=${page}&pageSize=${pageSize}`);
    },
    remove(id,options) {//删除
        return request(`/system/winner/delete`, options);
    },
    // remove(id,options) {//删除
    //     return request(`/api/users/${id}`, options);
    // },
    patch(id,options) {//编辑
        console.log(options);
        return request(`/system/winner/add`, options);
    },
    create(id,options) {//编辑
        console.log(options);
        return request(`/system/winner/add`, options);
    },

};

export default API;