import card from "./card.vue"
import stats from "../../components/stats/stats.vue"

export default {
    title: "card",
    components : { card },
    subcomponents: { stats },
    argTypes:{
        name:{
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
        stats,card
    },
    data(){
      return {
          args
      }  
    },
    template:`<card :title="args.name" :text="args.desc" :stars="args.stars" :forks="args.forks" />`
})

defaultView.args = {
    name: 'repository name',
    desc: 'repository desc',
    stars: '7',
    forks: '9'
}

