import React from "react";

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const {_id, customerName, email, amount, image, date, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 h-24 rounded">
            <img src={image} alt="Image not found" />
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{date ? date : "N/A"}</td>
      <td>{amount}</td>
      <th>
        { status === "confirmed" ? <span className="text-green-700">Confirmed</span> :
          <span onClick={() => handleConfirm(_id)} className="text-yellow-600 cursor-pointer">Pending</span>
        }
      </th>
    </tr>
  );
};

export default BookingRow;
