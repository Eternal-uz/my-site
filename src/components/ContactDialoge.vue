<template>
  <transition name="kontakt">
    <div class="">
      <h2 class="font-bold text-2xl text-center my-4 p-2">не беру трубку?</h2>
      <p class="text-xs tracking-wider">
        Значит я вышел в обед или вы звоните слишком поздно :( Но это не беда, позвоните
        по номеру<b> позже ))</b> или в другой раз от 8:00 до 21:00 :)
      </p>
      <form class="border mt-4 flex flex-col">
        <h2 class="text-center">
          Или введите ваш номер, и нажиете на enter Я  сам вам перезвоним!
        </h2>
        <div class="flex justify-between">
          <my-input class="w-full p-2 m-2 outline-none border-2 border-" v-focus />
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ContactDialoge",
  props: { },
};
</script>

<style scoped>
.kontakt-enter-active,
.kontakt-leave-active {
  transition: all 0.4s ease;
}
.kontakt-enter,
.kontakt-leave-to {
  opacity: 0;
  transform: translateY(-90px);
}
.kontakt-move {
  transition: transform 0.4s ease;
}
</style>
