import menuIcons from "./menuIcons.vue"
import avatar from "../../components/avatar/avatar.vue"
import icon from "../../icons"

export default {
    title: "menuIcons",
    components : { menuIcons },
    subcomponents: { avatar, icon },
    argTypes:{
        avatar:{
            type:'text'
        },
        size:{
            control:{
                type:'select'
            },
            options : ['xs','s','m','l']
        }
    }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        avatar, icon, menuIcons
    },
    data(){
      return {
          args
      }  
    },
    template:`<menuIcons :src="args.avatar"/>`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    size: 'xs'
}
