import Api from '@/services/api'

export default {
  fetchDonations () {
    return Api().get('/donations')
  },
  postDonation (donation) {
    return Api().post('/donations', donation,
      { headers: {'Content-type': 'application/json'} })
  }
}
