export default {
    state: {
        name: 'shanshan',
        age: 18,
        sex: 'famale',
        studentList: []
    },
    getters: {//相当于计算属性
        person(state, getters) {//两个参数 第一个是上面的state,第二个是他自己
            return `姓名：${state.name} 年龄:${state.age}`
        },
        newPersonList(state, getters) {//两个参数
            // 将state里面的数组进行计算属性,map遍历,输出姓名是addStudent组件输入框传入的名字,年龄是addStudent组件输入框传入的年龄,返回的是一个每一项是`姓名：${item.name} 年龄:${item.age}`的数组
            return state.studentList.map((item) => { return `姓名：${item.name} 年龄:${item.age}` })
        }
    },
    mutations: {//修改vuex数据,且同步执行
        mutationsStudentList(state, payload) {//接收两个参数,state和payload(载荷)是组件传递进来要更改的数据
            state.studentList.push(payload.tempObj);//更改studentList渲染的数据
            state.name = payload.name;//更改原来的name属性值
        }

    },
    actions: {//通过提交一个mutations来执行异步任务,actions就是用来提交mutations的
        actionsStudentList({ commit }, payload) {//接收一个参数context上下文对象,可以直接获取里面的{commit},相当于context.commit
            setTimeout(() => {

                commit('mutationsStudentList', payload)//按照组件执行的dispatch方法找到actions的changeStudentList执行,并提交触发mutations的changeStudentList方法
            }, 2000);
            console.log(111)
        }
    }
}