<template>
  <button class="btn  my-8 relative z-20  bg-transparent 
                 block m-1 p-2 ">
      <slot/>
  </button>
</template>

<script>
export default {
    name: 'MyButton'

}
</script>

<style scoped>
.btn:before{
    content: '';
    padding: 25px;
    background: blue;
    border-radius: 90%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: transform 700ms;

}
.btn:hover::before{
    background: blue;
    padding-top: 30px;
    margin-bottom:10px;
    display: block;
    width: 100%;
    border-radius: 50px;
    bottom: 40px;
    top:0;
    transform: scale(1.3)
}

</style>