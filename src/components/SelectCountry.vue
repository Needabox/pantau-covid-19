<template>
    <select
        @change="onChange()"
        v-model="selected"
        class="w-full border bg-white rounded px-3 py-2 outline-none"
    >
        <option value="0">PILIH NEGARA</option>
        <option v-for="country in countries" :key="country" :value="country.ID">{{ country.Country }}</option>
    </select>
</template>

<script>
export default {
    name: 'SelectCountry',
    props: ['countries'],
    data(){
        return {
            selected : 0,
        }
    },
    methods: {
        onChange(){
            const country = this.countries.find((item) => item.ID === this.selected)
            this.$emit('get-country', country)
        }
    }
}
</script>

<style>

</style>