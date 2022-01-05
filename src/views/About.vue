<template>
  <div class="flex justify-center items-center px-4 header h-screen">
    <div class="w-1/2 px-4 mb-20">
      <div>
        <h1 class="font-bold text-2xl text-white text-center py-6 md:py-4">Обо мне</h1>
        <p class="text-white text-lg text-justify px-8 py-6 md:py-4 md:px-4">
          Я из небольшого городка Андижан, путешествовал по миру, жил в более чем 10
          странах и говорю на 5 языках. Изучаю кодирование почти два года. Я из тех людей,
          которые всегда учатся, учатся и учатся без остановки. Я уверен, что буду тем
          человеком, которого вы ищете.
          <br />
        </p>
        <p class="text-white text-lg text-justify px-8 py-6 md:py-4 md:px-4">
          В моих планах на будущее стать разработчиком fullstack (MEVN). В настоящее время
          я могу работать с<strong>
            HTML, CSS, SASS, SCSS, Bootstrap, Tailwind, Bulma, JavaScript, TypeScript,
            Vuejs, VueRouter, Vuex, Vite, Vitesse,
          </strong>
        </p>
      </div>
      <div class="py-4">
        <a
          class="text-white text-5xl text-justify px-8 py-6"
          href="https://www.facebook.com/azizbek.umaraliev/"
          target="blank"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          class="text-red-300 text-5xl text-justify px-8 py-6"
          href="https://www.instagram.com/azizlv/"
          target="blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          class="text-indigo-400 text-5xl text-justify px-8 py-6"
          href="https://github.com/Eternal-uz"
          target="blank"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          class="text-blue-400 text-5xl text-justify px-8 py-6"
          href="https://t.me/Azizlv"
          target="blank"
        >
          <i class="fab fa-telegram"></i>
        </a>
      </div>
      <div>
        <my-button class="mb-10 text-bold text-lg text-white" @click="this.$router.go(-1)"
          >Назад</my-button
        >
      </div>
    </div>
    <div class="rounded-2xl w-1/2 px-4">
      <img src="../assets/me.jpg" class="object-fill rounded-2xl" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
