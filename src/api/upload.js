import Api from '@/utils/api'

export default {
  upload (query) {
    return Api.post('/v1/upload/image', query)
  }
}
