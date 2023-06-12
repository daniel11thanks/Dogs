import React from "react";
import styles from "./UserStatsgraphs.module.css";
import PropTypes from "prop-types";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {

  }, [data]);

  console.log(graph, setGraph, setTotal);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

UserStatsGraphs.propTypes = {
  data: PropTypes.any,
};

export default UserStatsGraphs;
