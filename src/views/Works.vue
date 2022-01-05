<template>
  <div class="max-w-full md:max-w-auto p-10">
    <h2 class="text-bold text-4xl text-center mb-10">ПОСЛЕДНИЕ И ЛУЧШИЕ РАБОТЫ</h2>
    <div class="flex flex-wrap max-h-screen ">

      <div class="w-1/4 box  relative p-2">
        <a target="blank" href="https://crud-todo.vercel.app/" class="boxCover hidden absolute bottom-4 right-4 left-4 top-4">
          <i class="fas fa-sign-in-alt absolute right-0 top-0 bottom-0 right-0 p-2"></i>
          <span class="text-blue-600 p-2">html, css, javascript, vuejs, vue-router, vuex</span>
        </a>
        <img src="../assets/crud-todo.png" class="w-full h-full">
        <p class="absolute bottom-6 left-4 bg-white rounded-md px-4 py-2">Веб-проекты</p>
      </div>

      <div class="w-1/4 box relative p-2">
        <a target="blank" href="https://vuerouterexample.netlify.app/" class="boxCover hidden absolute bottom-4 right-4 left-4 top-4">
          <i class="fas fa-sign-in-alt absolute right-0 top-0 bottom-0 right-0 p-2"></i>
          <span class="text-blue-600 p-2">html, css, javascript, vuejs</span>
        </a>
        <img
          src="../assets/vueexamle.jpg"
          class="w-full h-full"
        />
        <p class="absolute bottom-6 left-4 bg-white rounded-md px-4 py-2">Веб-проекты</p>
      </div>

      <div class="w-1/4 box relative p-2">
        <a target="blank" href="https://n-one-ashy.vercel.app/" class="boxCover hidden absolute bottom-4 right-4 left-4 top-4">
          <i class="fas fa-sign-in-alt absolute right-0 top-0 bottom-0 right-0 p-2"></i>
          <span class="text-blue-600 p-2">html, css, vuejs, vue-router, vuex, firebase, tailwind, vue-i18n, howler </span>
          
        </a>
        <img
          src="../assets/music-app.jpg"
          class="w-full h-full"
        />
        <p class="absolute bottom-6 left-4 bg-white rounded-md px-4 py-2">Веб-проекты</p>
      </div>

      <div class="w-1/4 box relative p-2">
        <a target="blank" href="#" class="boxCover hidden absolute bottom-4 right-4 left-4 top-4">
          <i class="fas fa-sign-in-alt absolute right-0 top-0 bottom-0 right-0 p-2"></i>
          <span class="text-blue-600 p-2">html, css, vuejs, vue-router, vuex, firebase, tailwind, etc</span>
        </a>
        <img
          src="../assets/metsenat.jpg"
          class="h-full w-full object-contain"
        />
        <p class="absolute bottom-6 left-4 bg-white rounded-md px-4 py-2">Веб-проекты</p>
      </div>
      <div>
        <my-button class=" mb-10  text-bold text-2xl text-white" @click="this.$router.go(-1)" >Назад</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from '../components/UI/MyButton.vue';
export default {
  components: { MyButton },
  name: "works",
};
</script>

<style scoped>
.box:hover {
  transition: transform 1s ease-out;
}
.box:hover  .boxCover {
  cursor: pointer;
  display: block;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 99;
  transform: scale(1);
}
</style>
