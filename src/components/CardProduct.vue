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
  width: 23rem;
  height: 25rem;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>
