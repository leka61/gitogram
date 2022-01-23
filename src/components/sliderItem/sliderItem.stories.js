import sliderItem from "./sliderItem.vue"
import user from "../../components/user"
import progress from "../../components/progress"
import button from "../../components/button"

export default {
    title: "sliderItem",
    components : { sliderItem },
    subcomponents: { user, progress, button },
    argTypes:{
        // size:{
        //     control:{
        //         type:'select'
        //     },
        //     options : ['xs','s','m','l']
        // },
        avatar:{
            type:'text'
        },
        hoverBtnText:{
            type:'text'
        },
        name:{
            type:'text'
        },
        sliderText:{
            type:'text'
        },
        sliderImg:{
            type:'text'
        }
    }
}

export const defaultView = (args)=>({
    props:Object.keys(args),
    components:{
        sliderItem
    },
    data(){
      return {
          args
      }  
    },
    template:`<sliderItem 
    :avatarUrl="args.avatar"
    :hoverBtnText="args.hoverBtnText"
    :sliderText="args.sliderText"
    :sliderImg="args.sliderImg"
    :username="args.name"
    />`
})

defaultView.args = {
    avatar: 'https://picsum.photos/200/300',
    sliderText: 'The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.',
    sliderImg: 'https://picsum.photos/800/500',
    name: 'User 1',
    hoverBtnText: 'Follow'
}

