import stats from "./stats.vue"

export default {
    title: "stats",
    components : { stats },
    argTypes:{
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
        stats
    },
    data(){
      return {
          args
      }  
    },
    template:`<stats :stars="args.stars" :forks="args.forks" />`
})

defaultView.args = {
    stars: '7',
    forks: '9'
}

