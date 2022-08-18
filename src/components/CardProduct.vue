<template>
  <div class="product">{{ product.name }}</div>
</template>

<script>
export default {
  name: "CardProduct",
  components: {},
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>


<style scoped lang="scss">
.product {
  width: 10rem;
  height: 10rem;
  background-color: rgb(125, 88, 88);
}
</style>
