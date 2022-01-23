import storyUserItem from "../../components/storyUserItem/storyUserItem.vue"
import headerMenu from "../../components/headerMenu/headerMenu.vue"
import menuIcons from '../../components/menuIcons/menuIcons.vue'
import logo from '../../components/logo/logo.vue'
import avatar from "../../components/avatar/avatar.vue"
import icon from "../../icons"
import topline from "./topline.vue"

export default {
    title: "topline",
    components : { topline },
    subcomponents:{avatar,storyUserItem,icon,headerMenu,menuIcons,logo},
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
        topline,avatar,storyUserItem,icon,headerMenu,menuIcons,logo
    },
    data(){
      return {
          args
      }  
    },
    template:`<topline> 
        <template #headline>
            <div class="c-menu mb-45">
                <headerMenu/>
            </div>
        </template>
        <template #content>
            <ul class="stories">
                <li v-for="(item,ndx) in 10" :key="ndx" class="stories-item">
                    <storyUserItem :avatar="args.avatar" :username="args.name"/>
                </li>
            </ul>
        </template>
    </topline>`
})

defaultView.args = {
    avatar:'https://picsum.photos/200/300',
    size: 'l',
    name: 'User 1'
}

