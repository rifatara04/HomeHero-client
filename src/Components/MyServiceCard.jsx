import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const MyServiceCard = () => {
  const navigate = useNavigate();
  const [service,setService] = useState(null);
    const instance = useAxios();
    const {user} = useAuth()
  const {id} = useParams()

  useEffect(()=>{
    instance.get(`/my-services/${id}`)
    .then(data => {
        setService(data.data);
    })
  },[id])
  const handleUpdateService = e => {
    e.preventDefault();
    const serviceName = e.target.service.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const description = e.target.desc.value;
    const serviceImg = e.target.photo.value;
    const providerName = e.target.name.value;
    const email = e.target.email.value;
    const created_at = new Date();
    const newObj = {serviceName,category,serviceImg,price,description,providerName,email,created_at}
   
    instance.put(`/update-service/${id}`,newObj)
    .then(res => {
      toast.success("service successfully updated");
      navigate("/my-service")
    }).catch(err => {
      toast.error(err.code)
    })
    e.target.reset()
  }
  return (
     <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold text-3xl text-base-content text-center mt-4'>Update Service </h1>
       <form onSubmit={handleUpdateService}>
         <fieldset className="fieldset">
          <label className="label">Change Service Name</label>
          <input type="text" className="input" placeholder="service name" name='service' defaultValue={service?.serviceName}/>
          <label className="label">Change Category</label>
          <input type="text" className="input" placeholder="Category" name='category' defaultValue={service?.category}/>
          <label className="label">Change Price</label>
          <input type="number" className="input" placeholder="Price" name='price' defaultValue={service?.price}/>
          <label className="label">Change Description</label>
          <input type="text" className="input" placeholder="Description" name='desc' defaultValue={service?.description}/>
          <label className="label">Change Image URL</label>
          <input type="text" className="input" placeholder="Image URL" name='photo' defaultValue={service?.serviceImg}/>
          <label className="label">Change Provider Name</label>
          <input type="text" className="input" placeholder="Provider Name" name='name' readOnly defaultValue={user?.displayName}/>
          <label className="label">Change Email</label>
          <input type="email" className="input" placeholder="Email" name='email' readOnly defaultValue={user?.email}/>
          
          <button className="btn btn-neutral mt-4">Change Service</button>
        </fieldset>
       </form>
      </div>
    </div>
  );
};

export default MyServiceCard;
