import React from "react";
import Calendar from "./Calender";
import Button from "../../components/Rooms/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar></Calendar>
      <hr />
      <Button label="reserve"></Button>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div className="font-bold">Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
