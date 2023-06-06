import React from "react";
import Container from "../../components/Shared/Container/Container";
import Heading from "../../components/Rooms/Heading";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";
import { useLoaderData, useParams } from "react-router-dom";

const RoomDetails = () => {
  const roomData = useLoaderData();
  console.log(roomData);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <Heading
              title="Veluvana Bali - Owl Bamboo House"
              subtitle="Sidemen, Indonesia"
            ></Heading>
            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
              <img
                className="object-cover w-full"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-820954888871612167/original/f37e01a9-cb1a-446d-be7e-c1d62d1f1c23.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mt-6">
            <RoomInfo></RoomInfo>
            <div className="mb-10 md:col-span-3 order-first md:order-last">
              <RoomReservation></RoomReservation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
