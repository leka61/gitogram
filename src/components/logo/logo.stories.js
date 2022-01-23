import logo from "./logo.vue"

export default {
    title: "logo",
    components : { logo }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        logo
    },
    data(){
      return {
          args
      }  
    },
    template:`<logo/>`
})
