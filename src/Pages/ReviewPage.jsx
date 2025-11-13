import useAxios from "../Hooks/useAxios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const ReviewPage = () => {
  const instance = useAxios();
  const { id } = useParams();
  const navigate = useNavigate();
  const {user} = useAuth();

  const handleAddReview = (e, id) => {
    e.preventDefault();
    const name = e.target.name.value;
    const review = e.target.reviewBox.value;
    const rating = e.target.rating.value;
    const reviewId = id;
    const photo = user.photoURL;
    const newObj = {name, review, rating, reviewId,photo };
    instance.post("/add-review",newObj)
    .then(res => {
      if(res.data.insertedId){
        toast.success("your review added")
        navigate("/my-booking")
      }
    }).catch(err => {
      toast.error(err.code)
    })
  };
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="font-bold text-3xl text-base-content text-center mt-4">
          Add Review
        </h1>
        <form onSubmit={(e) => handleAddReview(e, id)}>
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
          <input type="text" className="input" defaultValue={user.displayName} name='name' readOnly/>
            <label className="font-semibold text-lg">select rating</label>
            <select class="select" name="rating">
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
            <textarea
              className="textarea"
              placeholder="Write your review..."
              required
              name="reviewBox"
            ></textarea>
            <button className="btn btn-neutral mt-4">Add Review</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
