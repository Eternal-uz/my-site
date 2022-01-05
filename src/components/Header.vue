<template>
  <div class="header__menu relative flex justify-between px-8 mb-10 py-6">
    <div class="logo absolute left-8 top-8">
      <img class="w-20 h-20 text-blue-300 " src="../assets/VUE_JS_00001.svg" alt="" />
    </div>
    <div @click="showDialog" class="cursor-pointer">
      <span class="phone flex items-center absolute right-8 top-8">
        <img class="px-2 mt-2 " src="../assets/woman-with-headset.svg" alt="" />(93) 245 65 56
      </span>
      <my-dialog v-model:show="dialogeVisible" >
        <contact-dialoge  />
      </my-dialog>
    </div>
  </div>
</template>

<script>
import ContactDialoge from "./ContactDialoge.vue";
import MyDialog from "./UI/MyDialog.vue";
export default {
  name: "AppHeader",
  components: { ContactDialoge, MyDialog },
  data() {
    return {
        dialogeVisible: false,
    };
  },

  methods: {
    showDialog() {
      console.log(this.dialogeVisible);
      this.dialogeVisible = !this.dialogeVisible;
    },
  },
};
</script>

<style></style>
