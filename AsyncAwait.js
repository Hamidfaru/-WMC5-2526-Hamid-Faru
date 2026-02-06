

    


const  users = [
    {id:1,name:'Hamid'},
    {id:2,name:'Souzan'},
    {id:3,name:'Hemalin'},
]

const articles = [
    {userId:1, articles:['one','tow','three']},
    {userId:2,articles:['four', 'five']},
    {userId:3,articles:['six','seven','eight']},
]

const getData = async()=>{
    try{
    
    const user = await getUser('MALIN')
    const articles= await getArticles(user.Id)
    console.log(articles); ['one', 'tow','three']
    } catch(error)
    }

    
    

getData()

function getUser(name) {
    return new Promise ((resolve, reject) =>{
        const user =users.find((user)=> user.name===name)
    
        if (user){
            return resolve(user)

        }else {
            reject('No such user with name : ${name}')

        }

    })
}

function getArticles(userId){
    return new Promise ((resolve, reject)=> {
        const userArticles = articles.find((user)=> user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject('Wrong ID')

        }
    })

}
