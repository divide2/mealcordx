import Api from '@/utils/api'

export default {
  add (product) { // 添加作品
    return Api.post('/v1/product', product)
  },
  detail (id) { // 作品详情
    return Api.get(`/v1/product/${id}`)
  },
  delete (id) { // 删除作品
    return Api.delete('/v1/product', id)
  },
  edit (product) { // 修改作品
    return Api.put('/v1/product', product)
  },
  find (userId) { // 查找某用户的作品列表
    return Api.get(`/v1/product/${userId}/products`)
  },
  all (query) { // 获取首页的作品列表
    return Api.get('/v1/product/find', query)
  },
  comment (query) { // 添加作品评论
    return Api.post('/v1/product/comment', query)
  }
}
