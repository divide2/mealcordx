import Api from '@/utils/api'

export default {
  all () {
    return Api.get('/v1/tag/all')
  },
  get (count) {
    return Api.get(`/v1/tag/count/${count}`)
  }
}
