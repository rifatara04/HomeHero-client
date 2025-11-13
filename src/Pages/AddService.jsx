import React from 'react';
import useAxios from '../Hooks/useAxios';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router';

const AddService = () => {
    const {user} = useAuth();
    const instance = useAxios()
    const navigate = useNavigate();

    const handleAddService = e => {
        e.preventDefault();
        const created_at = new Date();
        const serviceName = e.target.service.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const description = e.target.desc.value;
        const serviceImg = e.target.photo.value;
        const providerName = e.target.name.value;
        const email = e.target.email.value;
        const newService = {serviceName,category,description,serviceImg,created_at,price,providerName,email}
  
        instance.post("/add-service",newService)
        .then(data => {
            toast.success("service added")
            navigate("/my-service")
        }).catch(err => {
            toast.error(err.code)
        })
        e.target.reset()
    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleAddService}>
         <fieldset className="fieldset">
          <label className="label">Service Name</label>
          <input type="text" className="input" placeholder="service name" name='service'/>
          <label className="label">Category</label>
          <input type="text" className="input" placeholder="Category" name='category'/>
          <label className="label">Price</label>
          <input type="number" className="input" placeholder="Price" name='price'/>
          <label className="label">Description</label>
          <input type="text" className="input" placeholder="Description" name='desc'/>
          <label className="label">Image URL</label>
          <input type="text" className="input" placeholder="Image URL" name='photo'/>
          <label className="label">Provider Name</label>
          <input type="text" className="input" placeholder="Provider Name" name='name' readOnly defaultValue={user.displayName}/>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' readOnly defaultValue={user.email}/>
          
          <button className="btn btn-neutral mt-4">Add Service</button>
        </fieldset>
       </form>
      </div>
    </div>
    );
};

export default AddService;