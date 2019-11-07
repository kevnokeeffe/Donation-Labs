import Api from '@/services/api'

export default {
  fetchDonations () {
    return Api().get('/donations/all')
  }
}
