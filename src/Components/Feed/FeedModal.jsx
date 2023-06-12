import React from "react";
import useFetch from "../../Hooks/useFetch";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../api";
import PropTypes from "prop-types";
import ErrorMessage from "../../Helper/ErrorMessage";
import Loading from "../../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick (event){
    if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return <div className={styles.modal} onClick={handleOutsideClick}>
    {error && <ErrorMessage error={error}/>}
    {loading && <Loading />}
    {data && <PhotoContent data={data}/>}
  </div>;
};

FeedModal.propTypes = {
  photo: PropTypes.any,
  setModalPhoto: PropTypes.any,
};

export default FeedModal;
