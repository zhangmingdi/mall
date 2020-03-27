import { request } from './request'

// 获取轮播图请求
export function getHomeDataList(type, page) {
  return request({
    url: '/home/multidata',
    params: {
      type,
      page
    }
  })
}

// 获取商品数据
export function getAllGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
