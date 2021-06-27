<template>
    <nav class="bg-white shadow md:shadow-none" role="navigation">
        <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
            <div class="mr-4 md:mr-8">
                <a href="#" rel="home">
                    <i class="fas fa-viruses fa-2x text-blue-500"></i>
                </a>
            </div>
            <h1 class="text-xl md:text-2xl font-open-sans font-semibold text-blue-500 ">Pantau Covid-19</h1>
            <div class="ml-auto md:hidden">
                <button class="flex items-center px-3 py-2 border rounded" type="button" @click="navbar = !navbar">
                    <i class="fas fa-bars"></i> 
                </button>
            </div>
            <div class="w-full md:w-auto md:flex-grow md:flex md:items-center" :class="[{ block: navbar }, { hidden: !navbar }]">
                <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0 font-open-sans">
                    <li>
                        <a class="block px-4 py-1 md:p-2 lg:px-4" href="https://corona.jakarta.go.id/id/contact" title="Layanan Darurat">Layanan Darurat COVID-19</a>
                    </li>
                    <li>
                        <a class="block px-4 py-1 md:p-2 lg:px-4" href="https://covid19api.com/" title="API">API</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            navbar: true,
        }
    }
}
</script>

<style>

</style>