import React from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setLoading, updateUser } = useAuth();
  const updateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const newObj = { displayName, photoURL };

    updateUser(newObj)
      .then(() => {
        toast.success("user profile updated");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
      });
    e.target.reset();
  };
  const lastLoginTime = Number(user?.reloadUserInfo.lastLoginAt);

  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
        <div className="flex items-center gap-5 flex-col my-8">
          <img
            src={user?.photoURL}
            alt="profile photo"
            className="w-24 rounded-full border-4 border-primary"
          />
          <div className="pl-4">
            <h2 className="font-bold text-xl lg:text-2xl text-base-content">
              Name : {user?.displayName}
            </h2>
            <h2 className="font-bold text-xl lg:text-2xl text-base-content">
              Email : {user?.email}
            </h2>
            <h2 className="font-bold text-xl lg:text-2xl text-base-content">
              Last login : {new Date(lastLoginTime).toLocaleDateString()}
            </h2>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={updateProfile}>
            <fieldset className="fieldset">
              <label className="label">Change Name</label>
              <input
                type="text"
                className="input"
                placeholder="change Name"
                name="name"
                defaultValue={user?.displayName}
              />
              <label className="label">Change Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="change Photo URL"
                name="photo"
                defaultValue={user?.photoURL}
              />

              <button className="btn btn-neutral mt-4">Save Changes</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;