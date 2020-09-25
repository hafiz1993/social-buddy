import React from 'react';
import { Link } from 'react-router-dom';

const NavList = (props) => {
    const allPost = props.data
    return (
        
            <div>
            <li>
                {
                    allPost.map(each =>
                        <Link key={each.id} style={{textDecoration:'none'}} to={`/post/${each.id}`}>
                            <ol key={each.id} style={{margin:'5px 0px', fontSize:'14px'}}>{each.title}</ol>
                        </Link>
                    )
                }
            </li>
        </div>
        
    );
};

export default NavList;