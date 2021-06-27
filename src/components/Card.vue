<template>
    <div class="grid md:grid-cols-3 gap-4">
        <!-- Box 1 -->
        <div class="shadow-md bg-yellow-300 p-5 text-center rounded" data-aos="zoom-in" data-aos-duration="1200">
            <div class="grid grid-cols-2">
                <div>
                    <i class="fas fa-head-side-cough-slash fa-6x mt-10 md:mt-0"></i>
                </div>
                <div>
                    <h3 class="text-xl text-yellow-900 font-open-sans font-bold mb-4">POSITIF</h3>
                    <div class="text-lg mb-4">
                        <span class="font-bold">Baru:</span>
                        {{ numberWithCommas(stats.NewConfirmed) }} Orang
                    </div>
                    <div class="text-lg mb-4">
                        <span class="font-bold">Total:</span>
                        {{ numberWithCommas(stats.TotalConfirmed) }} Orang
                    </div>
                </div>
            </div>
        </div>

        <!-- Box 2 -->
        <div class="shadow-md bg-red-300 p-5 text-center rounded" data-aos="zoom-in" data-aos-duration="1200">
            <div class="grid grid-cols-2">
                <div>
                    <i class="fas fa-dizzy fa-6x mt-10 md:mt-0"></i>
                </div>
                <div>
                    <h3 class="text-xl text-red-900 font-open-sans font-bold mb-4">MENINGGAL</h3>
                    <div class="text-lg mb-4">
                        <span class="font-bold">Baru:</span>
                        {{ numberWithCommas(stats.NewDeaths) }} Orang
                    </div>
                    <div class="text-lg mb-4">
                        <span class="font-bold">Total:</span>
                        {{ numberWithCommas(stats.TotalDeaths) }} Orang
                    </div>
                </div>
            </div>
        </div>

        <!-- Box 3 -->
        <div class="shadow-md bg-green-300 p-5 text-center rounded" data-aos="zoom-in" data-aos-duration="1200">
            <div class="grid grid-cols-2">
                <div>
                    <i class="fas fa-file-medical fa-6x mt-10 md:mt-0"></i>
                </div>
                <div>
                    <h3 class="text-xl text-green-900 font-open-sans font-bold mb-4">SEMBUH</h3>
                    <div class="text-lg mb-4">
                        <span class="font-bold">Baru:</span>
                        {{ numberWithCommas(stats.NewRecovered) }} Orang
                    </div>
                    <div class="text-lg mb-4">
                        <span class="font-bold">Total:</span>
                        {{ numberWithCommas(stats.TotalRecovered) }} Orang
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['stats'],
    setup () {
    return {
        numberWithCommas (x) {
            return x.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
        };
    }
}
</script>

<style>

</style>