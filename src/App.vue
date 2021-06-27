<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
  <Information class="mt-14"/>
  <footer>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-md md:text-2xl text-blue-700 font-open-sans font-bold mb-2">
            &copy; 2021 by <a href="https://muhammad-rafli.vercel.app/">MUHAMMAD RAFLI</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '@/components/Navbar.vue'
import Information from '@/components/Information.vue'

export default {
  components: {
    Navbar, Information
  },
  created() {
    AOS.init()
  },
}
</script>