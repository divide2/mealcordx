import Api from '@/utils/api'

export default {
  getMineProducts () {
    return Api.get('/v1/mine/products')
  }
}
