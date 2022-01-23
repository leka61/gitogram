import card from "../../components/card/card.vue"
import post from "./post.vue"

export default {
    title: "post",
    components : { post },
    subcomponents: { card },
    argTypes:{
        name:{
            type:'text'
        },
        avatar:{
            type:'text'
        },
        username:{
            type:'text'
        },
        desc:{
            type:'text'
        },
        stars:{
            type:'text'
        },
        forks:{
            type:'text'
        }
    }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        post,card
    },
    data(){
      return {
          args
      }  
    },
    template:`<post :avatar-url="args.avatar" :username="args.username">
                <template #card>
                    <card :title="args.name" :text="args.desc" :stars="args.stars" :forks="args.forks" />
                </template>
            </post>`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    username: 'User 1',
    name: 'repository name',
    desc: 'repository desc',
    stars: '7',
    forks: '9'
}

