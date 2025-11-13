import React, { useEffect, useRef, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyBooking = () => {
  const instance = useAxios();
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    instance
      .get(`/my-bookings?email=${user?.email}`)
      .then((res) => {
        setBookings([...res.data]);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  }, [user]);

  const handleBookingDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Booking",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance
          .delete(`/my-booking/${id}`)
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Booking has been deleted.",
              icon: "success",
            });
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings([...remaining]);
          })
          .catch((err) => {
            toast.error(err.code);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>bookingName</th>
              <th>bookingDate</th>
              <th>price</th>
              <th>email</th>
              <th>Delete Booking</th>
              <th>Add Review</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => {
              return (
                <tr key={booking._id}>
                  <th>{idx + 1}</th>
                  <td> {booking.bookingName} </td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.price}</td>
                  <td> {booking.userEmail} </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleBookingDelete(booking._id)}
                      className="btn btn-primary rounded-full"
                    >
                      Delete
                    </button>{" "}
                  </td>
                  <td>
                    {" "}
                    <Link
                      to={`/review-page/${booking.serviceId}`}
                      className="btn btn-primary rounded-full"
                    >
                      Add Review
                    </Link>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
