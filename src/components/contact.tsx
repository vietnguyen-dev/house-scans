const Contact = () => {
  return (
    <div className="flex justify-center my-10" id="contact">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Contact Us</h2>
          <p className="text-center">
            Send us a message if you have any questions!
          </p>
          <form>
            <input
              type="text"
              placeholder="Name Here..."
              className="input input-bordered w-full max-w-xs mt-3"
            />
            <input
              type="email"
              placeholder="Email Here..."
              className="input input-bordered w-full max-w-xs mt-3"
            />
            <textarea
              className="textarea textarea-bordered w-full max-w-xs h-32 mt-3"
              placeholder="Message Here..."
            />
            <div className="card-actions justify-end mt-3">
              <button className="btn btn-success w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
