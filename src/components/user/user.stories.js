import avatar from "../../components/avatar/avatar.vue"
import user from "./user.vue"

export default {
    title: "user",
    components : { user },
    subcomponents: { avatar },
    argTypes:{
        size:{
            control:{
                type:'select'
            },
            options : ['xs','s','m','l']
        },
        name:{
            type:'text'
        },
        avatar:{
            type:'text'
        },
        type:{
            type:'text'
        }
    }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        user, avatar
    },
    data(){
      return {
          args
      }  
    },
    template:`<user :src="args.avatar" :name="args.name" :size="args.size" :type="args.type"/>`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    name: 'User 1',
    type: '',
    size: 's'
}

