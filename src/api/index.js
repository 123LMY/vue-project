import request from '../request/index'

//新增用户
export const adduser = p => request.post('api/test/user/save', p);
//获取信息
export const getmoive = () => request.get('api/douban/movie/top250');
