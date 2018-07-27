
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';


//Vue.use(ElementUI);








var app = new Vue({
		el: '#app',
		data: {
			message: 'Ohayo'
		},
		mounted: function () {
			this.$nextTick(function () {
				console.log("mounted")
			})
		},
		updated: function () {
			this.$nextTick(function () {
				console.log("updated")
			})
		},
		computed: {
			fonct5: function () {
				console.log("computed1")
				this.message = this.message
			},
			now: function () {
				return Date.now()
			}
		}
	})

	var app2 = new Vue({
		el: '#app-2',
		data: {
			message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
		}
	})
	var dataa = {
	seen: true,

	todos: [{
			text: 'had l framework zwin'
		}, {
			text: 'walakin dakchi dial components mabghach ykhdam lia mzian'
		}, {
			text: 'aslane khasni nzid nkhdam mazal'
		}
	],
	message: 'chihaja'

}
/*Object.freeze(dataa)*/
/*je peux pas mettre Object.freeze(dataa.seen)*/

var app3 = new Vue({
		el: '#app-3',
		data: dataa,

		methods: {
			fonct1: function () {
				this.message = this.message + "abc"
			},
			reverseMessage: function () {
				this.message = 'abc'
			},

		},
		created: function () {
			console.log(this.seen);
		},

		computed: {
			fonct2: function () {
				console.log("called")
				return this.message.split('').reverse().join('')
				
			},
			fonct4: {
				get: function () {
					return this.message
				},
				set: function (value) {
					let p = value.split(' ')
						this.message = p[0]
				}
			}

		}

	})

	var vm = new Vue({
		el: '#demo',
		data: {
			firstName: 'nsit 3la smiti',
			lastName: 'chismia',
			//fullName: ' '
		},
		watch: {
			firstName: function (val) {
				this.fullName = val + ' ' + this.lastName
					console.log(this.firstName)
			},
			lastName: function (val) {
				this.fullName = this.firstName + ' ' + val
			}
		},
		computed: {
			fonct6: {
				get: function () {
					return this.firstName + ' ' + this.lastName
				},
				set: function (value) {
					var n = value.split(' ')
						this.firstName = n[0]
						this.lastName = n[1]
				}
			}
		}
	})

	var example1 = new Vue({
		el: '#example-1',
		data: {
			name: 'safaa '
		},
		methods: {
			greet: function (evnt) {
				alert('bonjour ' + this.name)
				if (evnt) {
					alert(evnt)
					alert(evnt.target)
					alert(evnt.target.tagName)
				}
			},
			warn: function (message, event) {

				if (event)
					event.preventDefault()
					//event
					alert(message)
			}

		}
	})

	/*var example1 = new Vue({
	el: '#example-1',
	data: {
	name: 'safaa '
	},
	methods:{
	greet: function(){
	alert('bonjour '+this.name)

	}

	}
	})*/

	/*let message = {
	props: {
		type: {
			type: String,
		default:
			"succes"
		},
		messagee: String
	},
	template: '<div class="ui message" :class="type">{{messagee}}</div>'

}//*/

/*
Vue.component('message',{
props:{
typee:{type:String , default: 'succes'},
message:String
},
template:'<div class="ui message" :class="type">{{message}}</div>'

})*/

/*
Vue.component('blog-post', {
props: ['postTitle'],
template: '<h3>{{ postTitle }}</h3>'
})
 */
//import message from "component1.js"


var examplee = new Vue({
		el: '#examplee',
		
		data: {
			checkedNames: [],
			picked: "",
			toggle: "",
			selected: "",
			messagee: 'bonjour'
		},

	})

	/*
	var comp1={
	props : {
	name: String,
	age: Number,
	typee:{type:String , default: 'succes'},
	message: String

	},
	template:'<div class="ui message" :class="type">{{message}}</div>'


	}



	var vv = new Vue({
	el: '#vv'
	components:{comp1},
	data:{
	message:'nihahah'
	},



	})

	 */

function testquestion(newQuestion, oldQuestion) {
	return this.answer;

}

var enveloppe1 = {
	answer: "je suis l'enveloppe 1",
	question: testquestion
};

var enveloppe2 = {
	answer: "je suis l'enveloppe 2",
	question: testquestion
};

var watchExampleVM = new Vue({
		el: '#watch-example',
		data: {
			question: '',
			answer: 'Je ne peux pas vous donner une réponse avant que vous ne posiez une question !'
		},
		watch: {
			// à chaque fois que la question change, cette fonction s'exécutera
			question: function (newQuestion, oldQuestion) {
				this.answer = "J'attends que vous arrêtiez de taper..."
					this.debouncedGetAnswer()
			}
		},
		created: function () {
			// _.debounce est une fonction fournie par lodash pour limiter la fréquence
			// d'exécution d'une opération particulièrement couteuse.
			// Dans ce cas, nous voulons limiter la fréquence d'accès à
			// yesno.wtf/api, en attendant que l'utilisateur ait complètement
			// fini de taper avant de faire la requête ajax. Pour en savoir
			//  plus sur la fonction `_.debounce` (et sa cousine
			// `_.throttle`), visitez : https://lodash.com/docs#debounce
			
			this.getAnswer = function () {
				if (this.question.indexOf('?') === -1) {
					this.answer = "Les questions contiennent généralement un point d'interrogation. ;-)"
						return
				}
				this.answer = 'Je réfléchis...'
					var vm = this
					axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer)
					})
					.catch(function (error) {
						vm.answer = "Erreur ! Impossible d'accéder à l'API." + error
					})
			};
			this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
		}
	})

		
	
Vue.component('button-counter', {
  
  
  data: function () {
    return {
      count: 0
    }
  },//*/
  template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
  
})

Vue.component('nihaha',{
	props:['title','elt'],
	data : function (){
		return {
			postFontSize : 1
		}
	},
	methods : {
		incrementfontsize : function (){
			this.postFontSize += 0.1;
		}
	},
	
	template:'<div :style="{fontSize: postFontSize + \'em\'}" ><h3>{{title}}</h3><h4>{{elt}}</h4><button v-on:click="incrementfontsize">Enlarge text</button></div>'
	
	
})//*/

/*Vue.component('nihaha',{
	props:['title'],
	
	template:'<h3>{{title}}</h3>'
	
	
	
})//*/

new Vue({
	el:'#chismia',
	data:{
	p:[
	  { id: 1, title: 'zankyo no terror' },
      { id: 2, title: 'one piece' },
      { id: 3, title: 'wa7d l anime ma3rftch smitou ' },
		  {id: 4, title: 'hadchi malou mab9ach khdam :( '}
	  ],
	  //elt:'yarbi ykhdam lia hadchi',
	  postFontSize:1
	}
	
})//*/	

/*
new Vue({
	el:'#chismia',
	data:{
	p:[
	  { title: 'zankyo no terror' },
      {  title: 'one piece' },
      { title: 'wa7d l anime ma3rftch smitou ' }
	  ],
	}
	
})//*/	




new Vue({ 
el: '#components-demo',
data: function(){
	return {
		count:0,
}
 }


})	

/*
var hoho={
	props:[lala],
	data:function(){
		return{
			la:this.lala
		}
	},
	computed:{
		narmalizedSize:function(){
			return this.lala.trim().tolowerCase();
		}
	},
	template:
	
}

new Vue({ 
el: '#components12',
components:{hoho},
data: {
	la:"",
}
 


})//*/	


/*
Vue.component('dakchidialslot',{
	props:['anime'],
	template:'<div class="dakchidialslot"><h4>{{anime}}</h4><a v-bind:href="url" class="nav-link"><slot></slot></a></div>'
})

/*Vue.component('wa7dlcomponent',{
	props:['tanfakar'],
	template:
	
})//*/
	
	
	Vue.component('componentymkan', {
  props: {
    // Basic type check (`null` matches any type)
    propA: Number,
    // Multiple possible types
    propB: [String, Number],
    // Required string
    propC: {
      type: String,
      required: true
    },
    // Number with a default value
    propD: {
      type: Number,
      default: 100
    },
    // Object with a default value
    propE: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return { message: 'hello' }
      }
    },
    // Custom validator function
    propF: {
      validator: function (value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  template:'<p>1232456</p>'
})
	
	
new Vue({
	el:'#vue9',
	data:{
		propF:'',
		propC:''
	},
	
	
})	
new Vue({
      el: '#a',
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  })



  
  
  
  
  
  
new Vue({
      el: '#apppp',
      data: function() {
        return { visible: false }
      }
    })
	
	
	
	