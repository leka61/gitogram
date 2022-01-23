import headerMenu from "./headerMenu.vue"
import menuIcons from "../../components/menuIcons/menuIcons.vue"
import logo from "../../components/logo/logo.vue"

export default {
    title: "headerMenu",
    components : { headerMenu },
    subcomponents: { logo, menuIcons }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        headerMenu, logo, menuIcons
    },
    data(){
      return {
          args
      }  
    },
    template:`<headerMenu/>`
})
