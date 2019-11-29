
# 导航守卫(钩子函数)  vue add router

- 全局守卫:配置在main.js里面,守护配置的每一个路由
### 1.router.beforeEach
### 2.router.beforeResolve
### 3.router.afterEach

- 路由独享守卫:给指定的路由身上添加守卫,配置在router.js里,给添加守卫的路由进行守卫
### 1.beforeEnter

- 组件内守卫:配置在每个组件内部的script标签里面,守卫指定的组件
### 1.beforeRouteLeave
### 2.beforeRouteEnter
### 3.beforeRouteUpdate

# 动态路由(跳转的页面根据传递参数不同而不同)
- router.js里面要跳转路径后面添加冒号参数[:id],跳转的时候添加:to={name:'question',params:{id:xxx}}


# 路由元信息(在每个路由上存储传递信息,用来记录是否需要登陆或其他操作)  
- 是在组件要验证的组件身上添加一个meta:{}进行验证信息,然后在全局守卫通过to.matched进行判断该路由是否需要验证

# vuex相当于一个存放数据的仓库,用于各个组件之间的通讯   vue add vuex
## state 
state相当于组件中的data数据(data() {return {}}),可以在组件中拿出他的数据
- 1.通过this.$store.state.name 拿到store中name='shanshan'的数据
- 2.通过先引入import {mapState} from 'vuex'得到store对象,然后将他放在computed中就像计算属性一样可以使用(...mapState(['name','age','sex'])),然后在组件中直接引用name,age,sex
- 3.如果和组件内有重名的话,就修改mapState,如 ...mapState({
    storeName: (state) => {
        return state.name
    }
}),这就是name重名,然后传入对象形式,接收函数为参数,state就是store中的state,storeName就是重命名,直接在组件中使用storeName就行

## getters
getters相当于就是组件中的getComputed计算属性,可以直接通过state拿取数据然后改变
- 1.也可以直接在组件中得到,this.$store.getters.person拿到store中的计算属性
- 2.先引入import {mapGetters} from 'vuex',然后放在getComputed中实现(...mapGetters(['person'])),直接使用person
- 3.如果重名,就修改命名,不用像上面传入函数,直接后面写store中的属性名即可
...mapGetters({
    storePerson: 'person'
})
- 4.在store.js文件中,getters接收的参数有两个,第一个就是store中的state,第二个就是getters自己,也可以使用自己
## mutations
mutations是更改vuex数据的地方,在组件内部不要直接修改vuex的数据,所以放在mutations里面执行,且执行的是同步代码,因为是方法,所以通过map方式获取之后要放在methods里面执行
- 1.在mutaions里面是一个方法,接收两个参数,state就是上面的state,还有一个参数对象,是通过修改后传递的数据
mutationsStudentList(state,payload) {

}
- 2.在组件中$store直接获取,this.$store.commit('mutationsStudentList',{tempObj,name:'胡豪'})  commit的是mutations里面的方法,后面的参数是组件中改变的数据,也可以传递改变state原有的属性,例如name,也可以修改
- 3.在组件中通过mapMutations获取到mutations的mutationsStudentList方法,然后在methods里面通过this.mutationsStudentList({tempObj,name:'胡豪'})改变数据
...mapMutations(['mutationsStudentList']);
methods: {
    this.mutationsStudentList({tempObj,name:'胡豪'});
}

## actions
actions是执行异步方法的函数,它主要是通过在组件中执行actions的方法,然后再actions里面commit一个对应的mutations的方法来执行
- 1.在actions里面是一个方法,接收两个参数,第一个是上下文对象context,也可以直接获取{commit},相当于context.commit,第二个参数是commit函数时接收的参数
- - vuex:
actionsStudentList({commit},payload) {
    setTimeout(() => {
        commit('mutationsStudentList',payload)//提交的时是上面mutations里面执行的函数,payload是组件执行actionsStudentList传递改变的参数
    },2000)
}
- 2.在组件中可以通过this.$store.dispatch('actionsStudentList',{tempObj,name:'胡豪'}),来执行actions中的异步函数,传递的是要改变的数据
- 3.在组件中也可以通过mapActions获取,...mapActions(['actionsStudentList']); 调用this.actionsStudentList({tempObj,name:'胡豪'})
组件中
...mapActions(['actionsStudentList']);
- - methods:{
    this.actionsStudentList({tempObj,name:'胡豪'})//执行vuex中的actions中的actionsStudentList函数
}

## modules
modules是将vuex状态按照功能分出模块,每个页面不同的数据放在一起,但是会将state中的数据放在每一个模块下,而getters、mutations、actions是在全局变量下
#### 无命名空间:(方式一 直接获取)
- 获取state: this.$store.state.moduleName(learn).price  state放在每个模块下,后面要加上模块名
- 获取getters: this.$store.getters.coursePrice  getters就像以前那样直接获取
- 获取mutations: this.$store.commit('mutationsChangePrice',{price:1000}) 像以前一样commit一个mutations,后面传入改变的数据
- 获取actions: this.$store.dispatch('actionsChangePrice',{price:1000})  像以前一样直接dispatch一个mutations,来异步该案数据
#### 无命名空间:(方式二 map方式获取)
- 获取state:无命名空间的话,不能通过...mapState(['courseName'])获取  无法通过mapState获取
- 获取getters: ...mapGetters(['coursePrice'])  像以前一样获取
- 获取mutations: ...mapMutations(['mutationsChangePrice'])  this.mutationsChangePrice({price:1000}) 和以前获取一样
- 获取actions: ...mapActions(['actionsChangePrice'])  this.actionsChangePrice({price:1000})  和以前获取一样
#### 有命名空间：(方式一 直接获取)
- 获取state: this.$store.state.moduleName(learn).price  state后面加上模块名
- 获取getters:this.$store.getters['learn/coursePrice'] 在getters后面加上中括号,前面是模块名,后面是要选择的getters属性
- 获取mutations: this.$store.commit('learn/mutationsChangePrice',{price:5000}) 在获取函数前面添加一个模块名和'/'即可
- 获取actions: this.$store.dispatch('learn/actionsChangePrice',{price:5000}) 在获取函数前面添加一个模块名即可
#### 有命名空间：(方式二 map方式获取)
- 获取state: ...mapState('learn',['price']) 获取时,在前面要添加模块名
- 获取getters: ...mapGetters('learn',['coursePrice'])
- 获取mutations: ...mapMutations('learn',['mutationsChangePrice'])   调用 this.mutationsChangePrice({price:9999})
- 获取actions: ...mapActions('learn',['actionsChangePrice'])   调用 this.actionsChangePrice({price:9999})


#使用vue创建项目
- vue3版本构建项目  vue create my-vue(项目名)
- vue2版本构建项目  vue init webpack my-vue(项目名)