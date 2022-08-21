<template>
  <div class="add-container">
    <div class="add-input text">
      <label for="name">
        Наименование товара
        <div class="dot"></div>
      </label>
      <input type="text" id="name" placeholder="Введите наименование товара" />
    </div>
    <div class="add-textarea text">
      <label for="description"> Описание товара </label>
      <textarea
        type="text"
        id="description"
        placeholder="Введите наименование товара"
      />
    </div>
    <div class="add-input text">
      <label for="link">
        Ссылка на изображение товара
        <div class="dot"></div>
      </label>
      <input type="text" id="link" placeholder="Введите наименование товара" />
    </div>
    <div class="add-input text">
      <label for="price">
        Цена товара
        <div class="dot"></div>
      </label>
      <input type="text" id="price" placeholder="Введите наименование товара" />
    </div>
    <div class="add-button"><button type="button">Добавить товар</button></div>
  </div>
</template>

<script>
export default {
  name: "AddCardProduct",
  components: {},
};
</script>


<style scoped lang="scss">
.add-container {
  width: 22rem;
  height: 28rem;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  .text {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    label {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      padding-bottom: 4px;
      display: flex;
      .dot {
        width: 4px;
        height: 4px;

        background: #ff8484;
        border-radius: 4px;
      }
    }
  }
  .add-input {
    input {
      border: none;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 3rem;
      padding-left: 1rem;
      &:focus {
        outline: none;
      }
    }
  }
  .add-textarea {
    textarea {
      resize: none;
      border: none;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 5rem;
      padding: 1rem 0 0 1rem;
      &:focus {
        outline: none;
      }
    }
  }
  .add-button {
    display: flex;
    justify-content: center;
    button {
      height: 3rem;
      width: 100%;
      border: none;
      color: white;
      font-weight: 600;
      font-size: 18px;
      line-height: 15px;
      cursor: pointer;
      background: #7bae73;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  }
}
</style>
