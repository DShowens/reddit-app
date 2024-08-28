import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReddit } from "../redux/redditSlice";
import { currentReddit, isLoading } from "../redux/redditSlice";


export const temp = [{
    title: "Temp1",
    author: "Me",
    likes: 5,
    comments: 25,
    pic: "source location",
    id: 1
},
{
    title: "Temp2",
    author: "You",
    likes: 8,
    comments: 21,
    pic: "source location",
    id: 2
},
{
    title: "Temp3",
    author: "Him",
    likes: 1,
    comments: 12,
    pic: "source location",
    id: 3
},
{
    title: "Temp4",
    author: "Her",
    likes: 23,
    comments: 35,
    pic: "source location",
    id: 4
}
];



function MultiCards() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReddit());
        
    },[dispatch])


    const state = useSelector(currentReddit);
    const loading = useSelector(isLoading);
    console.log('current Reddit state: ', state.data);
    console.log('Loading state: ', loading);

    if(loading) {
        return <div> loading state </div>
    }
 
    return (
        <div className="multi-cards">
             {/* {temp.map(entry => (
                <div className="card" key={entry.id}>
                    <p>Title: {entry.title}</p>
                    <p>Author: {entry.author}</p>
                    <p>Likes = {entry.likes}</p>
                    <p>Comments = {entry.comments}</p>
                    <p>Picture Somewhere: {entry.pic}</p>
                </div>
            ))} */}
                {/* {state.data.map(comment => (

                <div className="card" key={comment.name}>
                    <p>Title: {comment.title}</p>
                    <p>Author: {comment.author}</p>
                    <p>Comments: {comment.selftext}</p>
                </div>
             ))} */}
             {/* <div>{if (!loading) {state.children.map(comment => {
                for (let i=0; i<state.children.length; i++) {
                    return (
                        <div classname="card" key={i}>
                            <p>Title: {comment[i].title}</p>
                        </div>
                    )
                }})}}
             </div> */}
        </div>
    )
};

export default MultiCards;