import { PAGE_SIZE } from '../constants';
import API from '../../../utils/api';
const usersService={
	fetch({ page = 1 }) {//获取数据
		return API.fetch(page,PAGE_SIZE);
	  },
		remove(id) {//删除
		return API.remove(id,{
			method: 'POST',
		  body:  `id=${id}` 
		},);
	  },
	  patch(id,values) {//编辑
		return API.patch(id,{
		  method: 'PATCH',
		  body: JSON.stringify(values),
		});
	  }
}
export default usersService
// export function fetch({ page = 1 }) {//加载
//   return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
// }
// export function remove(id) {//删除
//   return request(`/api/users/${id}`, {
//     method: 'DELETE',
//   });
// }
// export function patch(id, values) {//编辑
//   return request(`/api/users/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify(values),
//   });
// }