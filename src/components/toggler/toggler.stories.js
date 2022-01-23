import toggler from "./toggler.vue"

export default {
    title: "toggler",
    components : { toggler }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        toggler
    },
    data(){
      return {
          args
      }  
    },
    template:`<toggler/>`
})
