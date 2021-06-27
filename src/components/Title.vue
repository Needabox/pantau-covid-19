<template>
    <div class="text-center">
        <h2 class="text-3xl md:text-5xl font-open-sans font-semibold">{{ text }}</h2>
        <div class="text-lg md:text-2xl font-open-sans mt-4 mb-10">
            Diperbarui Tanggal : {{ timestamp }}
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DataTitle',
    props: ['text', 'dataDate'],
    computed: {
        timestamp: function() {
            return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}
</script>

<style>

</style>