<template>
  <div id="home-page">
    <header class="relative h-screen flex items-center justify-center text-white" data-aos="fade-in" data-aos-delay="200">
        <img class="absolute bottom-0 left-16" src="@/assets/img/iheader-shape.png" alt="">
        <div class="container flex flex-col items-center justify-center">
          <div class="name flex items-center gap-5 mb-3">
            <span class="inline-block h-[1px] bg-white w-16" />
            <span>
              Aleen Co.
            </span>
            <span class="inline-block h-[1px] bg-white w-16" />
          </div>
          <h2 class="text-4xl font-bold text-center mb-10">
            Your All-in-One Travel Partner – Flights, Hotels, <br> and Visa Services Made Simple
          </h2>
          <p class="w-1/2 text-center">
            AL-Leen Travel & Tourism Co. Provides Passenger’s Safety and Comfort in its Services , Specialized Travel & Tourism Company Established in December 2004
          </p>
          <ul class="text-[18px] flex items-center gap-3 text-white mt-10">
            <li>
              Flights
            </li>
            <li>
              •
            </li>
            <li>
              Hotels
            </li>
            <li>
              •
            </li>
            <li>
              Visa
            </li>
            <li>
              •
            </li>
            <li>
              Groups
            </li>
          </ul>
          <nuxt-link to="#about" class="bg-secondary text-white px-5 py-2 mt-10">
            Explore
          </nuxt-link>
        </div>
    </header>
    <section id="about" class="py-20">
      <div class="container grid grid-cols-2 items-center">
        <div class="img-content">
          <img class="w-8/12 mx-auto" src="@/assets/img/about-image.png" alt="">
        </div>
        <div class="info">
          <div class="name flex items-center gap-5 mb-3">
            <span class="inline-block h-[1px] bg-main w-16" />
            <span class="text-main">
              About US
            </span>
            <span class="inline-block h-[1px] bg-main w-16" />
          </div>
          <h2 class="text-3xl mb-4">
            Travel & Tourism to or <br> <span class="text-main">from Iraq</span>
          </h2>
          <p class="text-gray-400 mb-10">
            Recently the services sector in Iraq has been growing notably due to global & local changes had its influences on the Transportaion and tourism Sector which led that Al-leen Travel and Tourism Co. to be among the first selected companies in Iraq.
          </p>
          <span class="text-xl inline-block mb-3">
            Goals
          </span>
          <ul>
            <li class="flex items-center gap-2 mb-2">
              <Icon class="text-xl text-main" name="akar-icons:check-box-fill"/>
              Playing a Major role in developing Services
            </li>
            <li class="flex items-center gap-2">
              <Icon class="text-xl text-main" name="akar-icons:check-box-fill"/>
              Implement Our Values in Global Travel & Tourism Market
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="strategies">
      <div class="container grid grid-cols-3 gap-16">
        <div class="title col-span-full text-center mb-5">
          <h2 class="text-3xl mb-4">
            Travel <span class="text-main">Strategies</span>
          </h2>
        </div>
        <div class="item">
          <div class="num w-10 h-10 text-white text-xl flex items-center justify-center rounded bg-main  mb-2">
            1
          </div>
          Global Alliance network with best companies , exceeding our customer’s expectations.
        </div>
        <div class="item">
          <div class="num w-10 h-10 text-white text-xl flex items-center justify-center rounded bg-main  mb-2">
            2
          </div>
          Strive to be the first choice of passengers with innovative technology and courteous , convenient service.
        </div>
        <div class="item">
          <div class="num w-10 h-10 text-white text-xl flex items-center justify-center rounded bg-main  mb-2">
            3
          </div>
          High Quality Services offerings to all clients , passengers in different fields of Tourism.
        </div>
      </div>
    </section>
    <section id="services" class="py-32">
      <div class="container grid grid-cols-2 gap-16 items-center">
        <div class="info">
          <div class="name flex items-center gap-5 mb-3">
            <span class="inline-block h-[1px] text-main bg-main w-16" />
            <span class="text-main">
              Services.
            </span>
            <span class="inline-block h-[1px] bg-main w-16" />
          </div>
          <h2 class="text-4xl font-bold mb-10">
            What We <span class="text-main">Provide</span> Of Our <br> Customers
          </h2>
          <p class="">
            At our company, we provide a comprehensive range of travel services designed to make your journey smooth and enjoyable. From convenient flight and hotel bookings to hassle-free visa processing, we ensure that every aspect of your travel is covered. Our expert team also offers personalized tour packages to help you explore the world your way, while our travel insurance options give you peace of mind. Trust us to handle all your travel needs with professionalism and care.
          </p>
        </div>
        <div class="services grid grid-cols-2 gap-10">
          <div class="item">
            <div>
              <icon class="text-main text-3xl" name="lucide:plane" />
            </div>
            <h2 class="text-xl font-semibold mb-5">Flights</h2>
            <p class="text-gray-500">
              Enjoy hassle-free flight reservations with competitive prices.
            </p>
          </div>
          <div class="item">
            <div>
              <icon class="text-main text-3xl" name="solar:buildings-linear" />
            </div>
            <h2 class="text-xl font-semibold mb-5">Hotels</h2>
            <p class="text-gray-500">
              Choose from a variety of hotels worldwide to suit your budget and preferences.
            </p>
          </div>
          <div class="item">
            <div>
              <icon class="text-main text-3xl" name="solar:user-id-bold" />
            </div>
            <h2 class="text-xl font-semibold mb-5">Visa</h2>
            <p class="text-gray-500">
              We assist you with the visa application process to make your travel easy.
            </p>
          </div>
          <div class="item">
            <div>
              <icon class="text-main text-3xl" name="icon-park-outline:beach-umbrella" />
            </div>
            <h2 class="text-xl font-semibold mb-5">Groups</h2>
            <p class="text-gray-500">
              Explore our specially curated tour packages for memorable vacations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="partners" class="py-20">
      <div class="container">
        <div class="title flex flex-col justify-center items-center">
          <div class="name flex items-center gap-5 mb-3">
            <span class="inline-block h-[1px] text-main bg-white w-16" />
            <span class="text-white">
                Services.
              </span>
            <span class="inline-block h-[1px] bg-white w-16" />
          </div>
          <h2 class="text-4xl font-bold  mb-10 text-center text-white">
            Our Partners
          </h2>
        </div>
        <div class="logos grid grid-cols-5 items-center gap-20 py-20">
          <img src="@/assets/img/partners/01.png" alt="">
          <img src="@/assets/img/partners/02.png" alt="">
          <img src="@/assets/img/partners/03.png" alt="">
          <img src="@/assets/img/partners/04.png" alt="">
          <img src="@/assets/img/partners/05.png" alt="">
          <img src="@/assets/img/partners/06.png" alt="">
          <img src="@/assets/img/partners/07.png" alt="">
          <img src="@/assets/img/partners/08.png" alt="">
          <img src="@/assets/img/partners/09.png" alt="">
          <img src="@/assets/img/partners/10.png" alt="">
        </div>
      </div>
    </section>
    <section id="pkg" class="py-20">
      <div class="container max-w-screen-lg grid grid-cols-3 gap-10">
        <div class="title col-span-full flex items-center justify-center gap-3 flex-col text-center">
          <div class="name flex items-center gap-5 mb-3">
            <span class="inline-block h-[1px] bg-main w-16" />
            <span class="text-main">
              Packages
            </span>
            <span class="inline-block h-[1px] bg-main w-16" />
          </div>
          <h2 class="text-3xl mb-4">
            We Have Beast <span class="text-main">Packages</span> <br> For You
          </h2>
        </div>
        <div class="item relative">
          <img src="@/assets/img/pkg/01.jpg" class="h-[500px] w-full object-cover rounded-lg" alt="">
          <div class="name text-white absolute bottom-5 left-5 text-2xl">
            DUBAI
          </div>
        </div>
        <div class="item relative">
          <img src="@/assets/img/pkg/02.jpg" class="h-[500px] w-full object-cover rounded-lg" alt="">
          <div class="name text-white absolute bottom-5 left-5 text-2xl">
            Saudi Arabian
          </div>
        </div>
        <div class="item relative">
          <img src="@/assets/img/pkg/03.jpg" class="h-[500px] w-full object-cover rounded-lg" alt="">
          <div class="name text-white absolute bottom-5 left-5 text-2xl">
            Egypt
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container grid grid-cols-3 gap-5">
        <div class="title col-span-full flex items-center justify-center gap-3 flex-col text-center">
          <div class="name flex items-center gap-5 mb-3">
            <span class="inline-block h-[1px] bg-main w-16" />
            <span class="text-main">
                Contact
              </span>
            <span class="inline-block h-[1px] bg-main w-16" />
          </div>
          <h2 class="text-3xl mb-4">
            Keep In Touch <span class="text-main">With Us</span>
          </h2>
        </div>
        <div class="item flex items-center gap-5">
          <div class="icon w-14 h-14 border border-main rounded-full flex items-center justify-center text-xl">
            <Icon name="solar:phone-linear" />
          </div>
          <span class="text-xl">
            +964 790 697 4762
          </span>
        </div>
        <div class="item flex items-center gap-5">
          <div class="icon w-14 h-14 border border-main rounded-full flex items-center justify-center text-xl">
            <Icon name="solar:phone-linear" />
          </div>
          <span class="text-xl">
            +964 770 640 5171
          </span>
        </div>
        <div class="item flex items-center gap-5">
          <div class="icon w-14 h-14 flex-none border border-main rounded-full flex items-center justify-center text-xl">
            <Icon name="hugeicons:location-05" />
          </div>
          <span class="text-xl">
            Baghdad – Al Fatih Building Near National Theater
          </span>
        </div>
        <div class="map-location col-span-full">
          <iframe class="h-[300px] w-full rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1333470527584!2d44.367902448298715!3d33.31487675587783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2z2KjYutiv2KfYr9iMINio2LrYr9in2K8g2YXYrdin2YHYuNip!5e0!3m2!1sar!2siq!4v1729409646959!5m2!1sar!2siq" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    <footer class="pt-10">
      <div class="container">
        <a href="https://cloudfares.net/" class="flex items-center justify-center gap-3">
          Powered By <img class="w-32" src="@/assets/img/cloud-fare-logo.png" alt="">
        </a>
      </div>
    </footer>
  </div>
</template>
<script setup>
onMounted(() => {
})

definePageMeta({
  layout: "default",
})
</script>
