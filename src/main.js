/*ESSA É UMA CONFIGURAÇÃO PARA VUE JS 2 */
/*Importo tudo que vou precisar para meu projeto */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Produtos from './components/Produtos.vue';


Vue.use(VueRouter)

/* esse é o caminho de rotas defino aqui em routes 
assim passo o caminho path que é minha url e meu componente 
respectivo a essa url.*/
const routes = [
  {path: '/', component: Produtos},
]

/* A variavel router recebe crio uma nova instancia de 
VueRouter passo minha variavel routes e 
passo junto mode que retira # que aparece na url */
const router = new VueRouter({
  // mode: 'history',
  // linkActiveClass: 'active',
  routes
});

/*crio uma nova uma instancia de vue passo meu el que é o elemento que ele vai inserir meus 
meus dados, passo meu minha variavel router como metodo depois de el: passo metodo render 
para renderizar App*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})