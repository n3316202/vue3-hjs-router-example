import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category: "A",
        },
      ],
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCart(state, cart) {
      state.cart.push(cart);
    },
  },
  actions: {
    increment(context) {
      //비동기 처리 로직 수행 가능
      context.commit("increment");
    },
    addCart(context) {
      const cart = axios
        .get(
          "https://c0b5a227-4e66-4f44-93af-cd9c48b3c623.mock.pstmn.io/addCart"
        )
        .then((req) => {
          console.log(req.data);
        });
      console.log(cart);
      context.commit("addCart", cart);
    },
  },
});

export default store;
