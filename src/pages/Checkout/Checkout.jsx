import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const services = useLoaderData();
  const { title, price, _id, img } = services;
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const amount = form.amount.value;

    const bookings = {
      customerName: name,
      date: date,
      email: email,
      amount: amount,
      service_id: _id,
      image: img,
      service_title: title,
    };
    console.log(bookings);

    fetch("https://car-doctor-server-rho-ten.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <>
      <h2 className="text-center text-4xl font-bold">Service: {title}</h2>
      <form
        onSubmit={handleOrder}
        className="card-body px-20 py-14 font-semibold shadow-2xl bg-slate-200 w-11/12 mx-auto mt-10 mb-10 rounded"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Issue Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Enter your issue date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Enter your mail"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="amount"
              defaultValue={"$ " + price}
              placeholder="Due amount"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-block">
            Confirm Order
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
