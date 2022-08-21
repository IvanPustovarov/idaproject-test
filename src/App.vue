<template>
  <div class="container">
    <header>
      <div class="text">Добавление товара</div>
      <div class="sort">
        По умолчанию
        <div class="arrow"></div>
      </div>
    </header>
    <div class="content">
      <div class="add-form">
        <AddCardProduct />
      </div>
      <div class="table">
        <CardProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddCardProduct from "./components/AddCardProduct.vue";
import CardProduct from "./components/CardProduct.vue";
export default {
  name: "App",
  components: { AddCardProduct, CardProduct },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: "SourceSansPro";
}

body {
  background: #e5e5e5;
}

@font-face {
  font-family: "SourceSansPro";
  src: local("SourceSansPro"),
    url(./fonts/SourceSansPro/SourceSansPro-Regular.otf) format("truetype");
}

.container {
  height: 100vh;
  padding: 0 1rem 0 1rem;
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 2rem 0;
    .text {
      font-size: 28px;
      font-weight: 600;
    }
    .sort {
      cursor: pointer;
      display: flex;
      text-align: center;
      padding: 0.75rem 1rem 0.75rem 1rem;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      color: #b4b4b4;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      .arrow {
        margin: 5px 0 0 5px;
        width: 4.6px;
        height: 4.6px;
        border-bottom: 1px solid #b4b4b4;
        border-right: 1px solid #b4b4b4;
        transform: rotate(45deg);
      }
    }
  }
  .content {
    display: flex;
    padding-bottom: 1rem;
    .add-form {
      margin-right: 1rem;
    }
    .table {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
}
</style>
