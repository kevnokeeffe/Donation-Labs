<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p>{{donations}}</p>
  </div>
</template>

<script>
    import DonationService from '@/services/donationservice'
    export default {
        name: 'Donations',
        data () {
            return {
                messagetitle: ' Donations List ',
                donations: [],
                errors: []
            }
        },
        // Fetches Donations when the component is created.
        created () {
            this.loadDonations()
        },
        methods: {
            loadDonations: function () {
                DonationService.fetchDonations()
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.donations = response.data
                        console.log(this.donations)

                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            }
        }

    };
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
