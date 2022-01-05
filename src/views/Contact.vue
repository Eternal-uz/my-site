<template>
<div class="header h-screen">
  <h1 class="text-white text-center text-bold text-3xl py-5" >Contact me</h1>
  <div class="flex  justify-center">
    <vee-form class="w-1/2  pl-14 p-6 " :validation-schema="loginSchema" @submit="login">
      <div class="mb-3">
        <label class="inline-block text-white mb-2">Полное имя</label>
        <vee-field
          name="name"
          type="text"
          class="block  py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Полное имя"
        />
        <ErrorMessage class="text-red-600" name="name" />
      </div>
      <div class="mb-3">
        <label class="inline-block text-white mb-2">Ваши сообщения</label>
        <vee-field
          as="textarea"
          name="message"
          type="textarea"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Ваши сообщения"
        />
        <ErrorMessage class="text-red-600" name="message" />
      </div>
      <div class="flex justify-between">
        <MyButton  @click="this.$router.go(-1)"  class="text-white bg-transparent  rounded transition pt-3">Назад</MyButton>
        <MyButton class="text-white bg-transparent  rounded transition pt-3">Отправить</MyButton>
      </div>
      <!-- <button
        type="submit"
        :disabled="login_in_submission"
        class="block bg-blue-500 text-white py-1.5 px-3 rounded transition hover:bg-blue-700"
      >
        Submit
      </button> -->
    </vee-form>
    <div class="w-1/2 flex justify-center items-center lg:w-full lg:h-96">
      <iframe class="w-2/4 h-3/4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5996.001980142932!2d69.20645897625819!3d41.28708291709395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a36d7325f11%3A0x73450e9fa393771b!2sChilanzar-6%2C%20Tashkent%20100097%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1641315722693!5m2!1sen!2s" style="border:0; border-radius: 15px" allowfullscreen="" loading="lazy"  ></iframe>
    </div>
  </div> 
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
export default {
    name: "Contact",
    data() {
        return {
            loginSchema: {
                name: "required",
                Message: "required|min:3|max:200",
            },
        };
    },
    components: { MyButton }
};
</script>

<style></style>
