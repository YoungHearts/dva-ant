import { PAGE_SIZE } from '../constants';
import API from '../../../utils/api';
const usersService={
	fetch({ page = 1 }) {//获取数据
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
		search(values) {//创建
			return API.search(values);
	  },
}
export default usersService
