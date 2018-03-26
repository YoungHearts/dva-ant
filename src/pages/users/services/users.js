import { PAGE_SIZE } from '../constants';
import API from '../../../utils/api';
const usersService={
	fetch({ page = 1 }) {//获取数据
		console.log(page);
		return API.fetch(page,PAGE_SIZE);
	  },
		remove(id) {//删除
		return API.remove(id);
	  },
	  patch(id,values) {//编辑
			return API.patch({id,...values});
	  },
		create(values) {//创建
			return API.create(values);
	  },
		search( page = 1,values) {//搜索
			return API.search(page,values,PAGE_SIZE);
	  },
}
export default usersService
