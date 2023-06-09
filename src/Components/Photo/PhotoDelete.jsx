//import React from 'react'

import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../api";
import styles from "./PhotoDelete.module.css";
import PropTypes from "prop-types";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  console.log(loading);
  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
        {loading ? (<button className={styles.delete} disabled>
      Deletar
    </button>):(<button onClick={handleClick} className={styles.delete}>
      Deletar
    </button>)}
    
    </>
  );
};

PhotoDelete.propTypes = {
  id: PropTypes.any,
};

export default PhotoDelete;
