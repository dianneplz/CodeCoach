import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import commentsByPost from "../../redux/actions/commentsByPost";

export function PostComponent() {
  const allPosts = useSelector((state) => state.posts);
  const { postId } = useParams();
  const id = Number(postId);
  const post = allPosts.find((post) => post.id === id);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    comment: ""
  })

  function handleChange (e){
    const {name, value} = e.target;
    setForm({
      [name]: value
    })
  }

  function handleClick(e){
    e.preventDefault()
    dispatch(commentsByPost(form));
    setForm({
      comment: "",
    });
  }

  return (
    <>
      <h1> Post </h1>
      <ul>{post.time}</ul>

      <form className="column-6">
          <div className="field">
            <label htmlFor="firstName" className="form-label">
              Title
            </label>
            <input
              name="comment"
              value={form.comment}
              placeholder="comment"
              onChange={handleChange}
            ></input>
          </div>
          
          <button
            type="button"
            className="button-primary"
            onClick={handleClick}
            data-testid="submitButton"
          >
            Comment!
          </button>
        </form>

    </>
  );
}
