

const tempPlaceholder = [{
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
]

function MultiCards() {
    return (
        <div className="multi-cards">
            {tempPlaceholder.map(entry => (
                <div className="card">
                    <p>Title: {entry.title}</p>
                    <p>Author: {entry.author}</p>
                    <p>Likes = {entry.likes}</p>
                    <p>Comments = {entry.comments}</p>
                    <p>Picture Somewhere: {entry.pic}</p>
                </div>
            ))}
        </div>
    )
};

export default MultiCards;