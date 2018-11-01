import Api from '@/utils/api'

export default {
  add (query) {
    return Api.post('/v1/star', query)
  },
  delete (query) {
    return Api.delete('/v1/star', query)
  },
  get () {
    return Api.get('/v1/star/find')
  }
}
