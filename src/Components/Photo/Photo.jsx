import React from "react";

import { useParams } from "react-router-dom";
import { PHOTO_GET2 } from "../../api";
import Loading from "../../Helper/Loading";
import PhotoContent from "./PhotoContent";
import useFetch from "../../Hooks/useFetch";
import ErrorMessage from "../../Helper/ErrorMessage";
import Head from "../../Helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET2(id);
    request(url, options);
  }, [request, id]);

  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
};

export default Photo;
