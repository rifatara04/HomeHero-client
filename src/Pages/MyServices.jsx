import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyServices = () => {
  const instance = useAxios();
  const { user } = useAuth();
  const [myServices, setMyServices] = useState([]);
  useEffect(() => {
    instance.get(`/my-services?email=${user?.email}`).then((data) => {
      setMyServices([...data.data]);
    });
  }, [user]);

  const handleDeleteService = (id) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You want to delete this service",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   instance.delete(`/delete-service/${id}`)
    .then(res => {
      Swal.fire({
      title: "Deleted!",
      text: "Your service has been deleted.",
      icon: "success"
    });
    const remaining = myServices.filter(service => service._id !== id)
    setMyServices([...remaining])
    }).catch(err => {
      toast.error(err.code)
    })
  }
});
    
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Service Name</th>
              <th>Category</th>
              <th>created_at</th>
              <th>Service Price</th>
              <th>Service Update</th>
              <th>Service Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myServices.map((service, idx) => (
              <tr key={service._id}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={service.serviceImg} alt="service image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.serviceName}</div>
                    </div>
                  </div>
                </td>
                <td>{service.category}</td>
                <td>{service.created_at}</td>
                <td>{service.price}</td>
                <td>
                  <Link
                    to={`/my-service-card/${service._id}`}
                    className="btn btn-primary rounded-full"
                  >
                    update
                  </Link>
                </td>

                <td>
                  <button onClick={()=>handleDeleteService(service._id)} className="btn btn-primary rounded-full">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
