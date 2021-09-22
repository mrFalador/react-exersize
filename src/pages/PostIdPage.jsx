import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
       const response = await PostService.getById(id);
       setPost(response.data); 
    })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        console.log(response.data)
        setComments(response.data); 
     })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div className="App">
            {isLoading
              ? <Loader/>
              :
              <div style={{marginTop: 10}}> 
              <h2>{post.id}. {post.title}</h2>
              <div style={{marginTop: 20}}>{post.body}</div>
              </div>        
            }
            <hr style={{margin: '15px 0'}}/>
            <h2>
                Комментарии:
            </h2>
            {isComLoading
              ? <Loader/>
              : <div>
                  {comments.map(com =>
                    <div key={com.id} style={{marginTop: 15}} className="post__comment">
                        <h5>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                  )}
              </div>
            }
        </div>
    );
};

export default PostIdPage;