<template>
  <div class="container">
    <header>
      <div>Добавление товара</div>
      <div>
        <button type="button">По умолчанию</button>
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
  }
  .content {
    display: flex;
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
