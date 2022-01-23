import card from "../../components/card/card.vue"
import post from "../../components/post/post.vue"
// import menuIcons from '../../components/menuIcons/menuIcons.vue'
// import logo from '../../components/logo/logo.vue'
// import avatar from "../../components/avatar/avatar.vue"
import icon from "../../icons"
import baseline from "./baseline.vue"

export default {
    title: "baseline",
    components : { baseline },
    subcomponents: { post, card },
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
        baseline,post,card
    },
    data(){
      return {
          args
      }  
    },
    template:`<baseline><template #posts>
                    <div class="posts-container mt-8">
                        <ul class="posts__list">
                            <li v-for="(item,ndx) in 10" :key="ndx" class="posts__item">
                                <post :avatar-url="args.avatar" :username="args.username">
                                    <template #card>
                                        <card :title="args.name" :text="args.desc" :stars="args.stars" :forks="args.forks" />
                                    </template>
                                </post>
                            </li>
                        </ul>
                    </div>
                </template></baseline>`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    username: 'User 1',
    name: 'repository name',
    desc: 'repository desc',
    stars: '7',
    forks: '9'
}

