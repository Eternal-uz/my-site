<template>
<div class="flex">
    <div class="w-1/2 px-4 py-4 hover:transform hover:scale-105 cursor-pointer" >
        <img class="w-full h-full shadow p-8 m-2  " src="../assets/0001.jpg" alt="">
    </div>
    <div class="w-1/2 px-4 py-4" >
        <img class="w-full h-full shadow drop-shadow-2xl p-8 m-2 hover:transform cursor-pointer" src="../assets/VueUdemyCertificate.jpg" alt="">
    </div>
</div>
    <MyButton @click="this.$router.go(-1)"  class="text-white m-4">Назад</MyButton>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
export default {
    name: "Certificates",
    components: { MyButton }
}
</script>