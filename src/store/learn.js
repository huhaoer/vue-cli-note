export default {
    namespaced: true,//加上命名空间
    state:{
        courseName: 'js课堂',
        price:200
    },
    getters:{
        coursePrice(state) {
            return `￥${state.price}`;
        }
    },
    mutations:{
        mutationsChangePrice(state,payload) {
            state.price = payload.price
        }
    },
    actions:{
        actionsChangePrice({commit},payload) {
            setTimeout(() => {
                commit('mutationsChangePrice',payload)
            }, 1000);
        }
    }
}