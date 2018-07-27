var message={
	props:{
		type:{type:String , default: "succes"},
		messagee:String
	},
	template:'<div class="ui message" :class="type">{{messagee}}</div>'
	
}

/*
Vue.component('message',{
	props:{
		typee:{type:String , default: 'succes'},
		message:String
	},
	template:'<div class="ui message" :class="type">{{message}}</div>'
	
})*/