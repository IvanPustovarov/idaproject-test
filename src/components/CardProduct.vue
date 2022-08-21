<template>
  <div class="product">
    <div class="picture">
      <img :src="product.link" alt="no-image" />
    </div>
    <div class="text">
      <div class="name">{{ product.name }}</div>
      <div class="description">{{ product.description }}</div>
      <div class="price">{{ product.price }} руб.</div>
    </div>
  </div>
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
  color: #3f3f3f;
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 25rem;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  .picture {
    height: 12.5rem;
    border-radius: 4px 4px 0px 0px;
    background-color: rgb(190, 190, 197);
    overflow: hidden;
    img {
      max-width: 100%;
      width: 100%;
    }
  }
  .text {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 11.5rem;
    justify-content: space-between;
    .name {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
    .description {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    .price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>
