<template>
  <div class="header h-screen flex flex-col mx-auto max-w-full relative px-10">
    <app-header />
    <!-- menu toggle -->
    <div class="header__content flex px-8 py-6 mt-20">
      <div class="header__content-left">
        <h1 class="header__content-title mt-4 my-10 text-bold text-white text-4xl">
          Азизбек <br />
          Программист & MEVN developer
        </h1>
        <div class="mt-20">
          <MyButton
            @click="this.$router.push({ name: 'about' })"
            class="text-white font-medium text-xl"
            >Подробнее</MyButton
          >
        </div>
      </div>
      <div
        @click="open = !open"
        class="absolute top-1/2 right-0 text-white block p-1 m-1 text-4xl"
      >
        <i v-show="!open" class="fas fa-bars"></i>
        <i v-show="open" class="fas fa-times"></i>
      </div>
      <app-menu v-show="open" :open="open" />
    </div>
    <!-- pen icon -->
    <div>
      <div
        class="bg-white border-2 border-blue-900 w-60 h-60 absolute right-0 bottom-0 rounded-tl-full"
        :class="{ hidden: !pen }"
      >
        <div class="flex flex-col absolute right-1 bottom-24">
          <label @click="toRequest" class="chekbox"
            ><input type="radio" class="" id="radio-buttons" />
            Оставить заявку
          </label>
          <a @click="toResume" :href="item.loc" download class="chekbox"
            ><input type="radio" class="" id="radio-buttons" />
            {{item.title}}
          </a>
        </div>
      </div>
      <div @click="pen = !pen">
        <span
          v-show="!pen"
          class="absolute cursor-pointer text-white bottom-0 right-0 px-5 py-4 m-6 bg-blue-500 rounded-full text-lg"
        >
          <i class="fas fa-pencil-alt"></i>
        </span>
        <span
          v-show="pen"
          class="absolute cursor-pointer text-white bottom-0 right-0 px-6 py-4 m-6 bg-blue-500 rounded-full text-lg"
        >
          <i class="fas fa-arrow-down"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
import AppMenu from "../components/Menu.vue";
import AppHeader from "../components/Header.vue";
// import file from '../assets/files/'

export default {
  components: {
    MyButton,
    AppMenu,
    AppHeader,
  },
  data() {
    return {
      open: false,
      pen: false,
      checked: true,
      item:{title: 'Загрузить резуме', loc:'../assets/0001.jpg'}
    };
  },
  methods: {
    toRequest() {
      this.$router.push({ name: "Contact" });
    },
    toResume() {
      const link = document.createElement('a');
      link.href = 'localhost:8080/src/assets/0001.jpg';
      link.setAttribute('download', 'file.png'); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
  },
};
</script>

<style>
.header {
  background: linear-gradient(to bottom, #030407, #08162e);
}
.phone {
  color: #7e879e;
}
.menu-item:hover {
  transform: scale(1.2);
}
.menu {
  background: #060d19;
}
.chekbox:hover {
  color: blue;
}
/* input[type=checkbox]{
  width: 15px;
  height: 15px;  
  border-radius: 50%;

} */
.chekbox>input:hover: {
  padding-right: 10px;
}
</style>
