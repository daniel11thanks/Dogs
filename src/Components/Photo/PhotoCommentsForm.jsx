import React from "react";
import PropTypes from "prop-types";
import { COMMENT_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import ErrorMessage from "../../Helper/ErrorMessage";
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState("");


  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const{ response, json } = await request(url, options);
    if(response.ok) {
        setComment('');
        setComments((comments) => [...comments, json])
    }
  }
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}><Enviar /></button>
      <ErrorMessage error={error} />
    </form>
  );
};

PhotoCommentsForm.propTypes = {
  id: PropTypes.any,
  setComments: PropTypes.any,
  single: PropTypes.any,
};
export default PhotoCommentsForm;
