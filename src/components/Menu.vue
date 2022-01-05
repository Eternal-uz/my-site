<template>
  <transition-group name="menu-item"  >
    <div key="menu-item"  class="absolute right-1/3 top-1/3">
      <ul v-show="open"  class="menu flex flex-col p-8 opacity-80 rounded-md w-full">
        <router-link :to="{path: '/works'}" class="menu-item text-white text-2xl">
          <i class="fas mx-1 px-1 fa-briefcase"></i>Работы
        </router-link>
        <router-link :to="{path: '/about'}" class="menu-item cursor-pointer text-white text-2xl">
          <i class="fas mx-1 px-1 fa-exclamation-circle"></i>Обо мне
        </router-link>
        <router-link :to="{path: '/contact'}" class="menu-item cursor-pointer text-white text-2xl">
          <i class="fas mx-1 px-1 fa-id-card-alt"></i>Контакты
        </router-link>
        <router-link :to="{path: '/certificates'}" class="menu-item cursor-pointer text-white text-2xl">
          <i class="fas mx-1 px-1 fa-wrench"></i>Сертификаты
        </router-link>
      </ul>
    </div>
  </transition-group>
  <router-view />
</template>

<script>
export default {
    name: "menu",
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.menu-item-enter-active,
.menu-item-leave-active {
  transition: all 0.4s ease;

}
.menu-item-enter,
.menu-item-leave-to {
  opacity: 0;
  transform: translateX(180px);
}
.menu-item-move {
  transition: transform 0.4s ease;
}
</style>
