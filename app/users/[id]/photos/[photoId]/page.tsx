import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotosPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotosPage {id} {photoId}
    </div>
  );
};

export default PhotosPage;
