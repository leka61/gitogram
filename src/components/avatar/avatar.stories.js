import avatar from "./avatar.vue"

export default {
    title: "avatar",
    components : { avatar },
    argTypes:{
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
        avatar
    },
    data(){
      return {
          args
      }  
    },
    template:`<avatar 
    :size="args.size"
    :avatar="args.avatar"
    />`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    size: 'l'
}

