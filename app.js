import  axios  from "axios";


const getData = async (id) => {

    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id)
    const { data: postUser } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id)
    
    return {user, postUser};
    

}


export default getData;
