// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm = new Vue({  
  el: '#app',  
  data: {  
     firstname : "Albert",  
     lastname : "Pinto",  
     htmlcontent : "lawal This is Vue.js Template Example!" ,
     message : 'You loaded this page on ' + new Date().toLocaleString(),
     seen: false  ,
     imgsrc : "https://www.fiordalisa.ch/wp-content/uploads/2017/12/IMG_4610.jpg"  
  }  
})  

var app4 = new Vue({  
  el: '#app-4',  
  data: {  
    todos: [  
      { text: 'HTML Tutorial' },  
      { text: 'CSS Tutorial' },  
      { text: 'JavaScript Tutorial' },  
      { text: 'AngularJS Tutorial' },  
      { text: 'Vue.js Tutorial' }  
    ]  
  }  
})  

var app = new Vue({  
  el: '#app2',  
  data: {  
    message2: 'This is  Vue.js Example!'  
  },  
  methods: {  
    reverseMessage: function () {  
      this.message2 = this.message2.split('').reverse().join('') ,
      alert(3);
    }  
  }  
})  

Vue.component('testcomponent',{  
  template : '<div v-on:mouseover.once = "changename()" v-on:mouseout = "originalname();"><h1>This Custom Component is created by <span id = "name">{{name}}</span></h1></div>',  
  data: function() {  
     return {  
        name : "Panda"  
     }  
  },  
  methods:{  
     changename : function() {  
        this.name = "Alex";  
     },  
     originalname: function() {  
        this.name = "Panda";  
     }  
  }  
});  
var vm = new Vue({  
  el: '#component_test1'  
});  
var vm1 = new Vue({  
  el: '#component_test2'  
 
});  

var vm = new Vue({  
  el: '#databinding',  
  data: {  
     view: 'component1'  ,
     view2: 'component2'  
  },  
  components: {  
     'component1': {  
        template: '<div><span style = "font-size:25;color:Blue;">This is a Dynamic Component Example</span></div>'  
       }  ,
       'component2': {  
        template: '<div><span style = "font-size:25;color:Blue;">Lawal This is a Dynamic Component Example</span></div>'  
        }
  }  
});  

var vm = new Vue({  
  el: '#com_props',  
  data: {  
     firstname :"",  
     lastname :"",  
     birthyear : ""  
  },  
  computed :{  
     getfullname : function(){  
        return this.firstname +" "+ this.lastname;  
     }  
  }  ,


  methods: {  
    getrandomno1 : function() {  
       return Math.random();  
    }  
 },  
 computed :{  
    getrandomno : function(){  
       return Math.random();  
    }  
 }  
})  
var vm = new Vue({  
  el: "#app7",  
  data: {  
     num1: 150,  
     num2 : 100,  
     total : ''  ,
     styleobj: {  
      backgroundColor: '#2196F3!important',  
      cursor: 'pointer',  
      padding: '8px 16px',  
      verticalAlign: 'middle',  
   }  
  },  
  methods : {  
     displaynumbers : function(event) {  
        console.log(event);  
        return this.total =  this.num1+ this.num2;  
     },  
     displaynumbers_minus : function(event) {  
      console.log(event);  
      return this.total =  this.num1- this.num2;  
   }
  },  
})   
   var vm = new Vue({  
  el: '#key_1',  
  data: {  
     name:'',  
     styleobj: {  
        width: "100%",  
        padding: "12px 20px",  
        margin: "8px 0",  
        boxSizing: "border-box"  
     }  
  },  
  methods : {  
     showinputvalue : function(event) {  
        this.name=event.target.value;  
     }  
  }  
})  

var vm9 = new Vue({  
  el: '#databinding3',  
  data: {  
     title : "Data Binding Simple Example",  
     hreflink : "http://www.javatpoint.com"  
  }  
})  

var vm = new Vue({  
  el: '#databinding6',  
  data: {  
     age : 0,  
     msg: '',  
     message : ''  
  }  
})  

var vm = new Vue({  
  el: '#databinding89',  
  data: {  
     show:true  
  },  
  methods : {  
  }  
})  
var vm = new Vue({  
  el: '#router_1',  
  router  
})  