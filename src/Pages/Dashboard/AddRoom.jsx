import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Dashboard/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/room";
// import AddRoomForm from "../../../components/Dashboard/AddRoomForm/AddRoomForm";
// import { imageUpload } from "../../../api/utils";

const AddRoom = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("upload Img");
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const location = form.location.value;
    const title = form.title.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.files[0];
    const to = dates.startDate;
    const from = dates.endDate;

    // upload image
    imageUpload(image)
      .then((data) => {
        const roomData = {
          image: data.data.display_url,
          location,
          title,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          total_guest,
          bathrooms,
          bedrooms,
          description,
          category,
          price: parseFloat(price),
          to,
          from,
        };
        // post room data to server
        addRoom(roomData)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error.message);
          });
        setLoading(false);
        console.log(roomData);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  const handleDates = (ranges) => {
    // return console.log(ranges);
    setDates(ranges.selection);
  };
  return (
    <div>
      <h3 className="text-center">add room here...</h3>
      <AddRoomForm
        uploadButtonText={uploadButtonText}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        loading={loading}
        dates={dates}
        handleDates={handleDates}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
