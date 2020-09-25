import React from 'react';
import AllPosts from '../AllPosts/AllPosts';



const Home = (props) => {
    const allPost = props.data; 
    return (
        <div>
            {
                allPost.map(each=> <AllPosts data={each} key={each.id}/>)
            }
        </div>
    );
};

export default Home;