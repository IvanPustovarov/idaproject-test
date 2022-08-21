<template>
  <div class="add-container">
    <div class="add-input text">
      <label for="name">
        Наименование товара
        <div class="dot"></div>
      </label>
      <input
        type="text"
        id="name"
        placeholder="Введите наименование товара"
        v-model="name"
      />
    </div>
    <div class="add-textarea text">
      <label for="description"> Описание товара </label>
      <textarea
        type="text"
        id="description"
        placeholder="Введите описание товара"
        v-model="description"
      />
    </div>
    <div class="add-input text">
      <label for="link">
        Ссылка на изображение товара
        <div class="dot"></div>
      </label>
      <input
        type="text"
        id="link"
        placeholder="Введите ссылку"
        v-model="link"
      />
    </div>
    <div class="add-input text">
      <label for="price">
        Цена товара
        <div class="dot"></div>
      </label>
      <input
        type="number"
        id="price"
        placeholder="Введите цену"
        v-model="price"
      />
    </div>
    <div class="add-button">
      <button
        type="button"
        @click="submitForm"
        :disabled="!isFormValid"
        :class="{ disabled: !isFormValid }"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCardProduct",
  data() {
    return {
      name: "",
      description: "",
      link: "",
      price: null,
    };
  },
  computed: {
    isNameValid() {
      return this.name.length;
    },
    isLinkValid() {
      const linkRegex =
        /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
      return linkRegex.test(this.link);
    },
    isPriceValid() {
      return this.price;
    },
    isFormValid() {
      return this.isNameValid && this.isLinkValid && this.isPriceValid;
    },
  },
  methods: {
    submitForm() {
      const userData = {
        name: this.name,
        description: this.description,
        link: this.link,
        price: this.price,
      };

      console.log(userData);
    },
  },
};
</script>


<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
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
    .disabled {
      background-color: #eeeeee;
      cursor: not-allowed;
      color: #b4b4b4;
    }
  }
}
</style>
