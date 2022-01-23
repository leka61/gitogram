import storyUserItem from "./storyUserItem.vue"
import avatar from "../../components/avatar"

export default {
    title: "storyUserItem",
    components : { storyUserItem },
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
        }
    }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        storyUserItem
    },
    data(){
      return {
          args
      }  
    },
    template:`<storyUserItem 
    :username="args.name"
    :avatar="args.avatar"
    />`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    size: 'l',
    name: 'User 1'
}

