import React, { useState } from "react";
import AddRoomForm from "../../components/Dashboard/AddRoomForm";
import { imageUpload } from "../../api/utils";
// import AddRoomForm from "../../../components/Dashboard/AddRoomForm/AddRoomForm";
// import { imageUpload } from "../../../api/utils";

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("upload Img");
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("ckkkk");
    const form = event.target;
    const location = form.location.value;
    const title = form.title.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.files[0];
    // const to = dates.startDate;
    // const from = dates.endDate;

    // upload image
    imageUpload(image)
      .then((data) => {
        const roomData = {
          image: data.data.display_url,
        };
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <h3 className="text-center">add room here...</h3>
      <AddRoomForm
        uploadButtonText={uploadButtonText}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        loading={loading}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
