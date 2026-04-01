import React, { useEffect, useState } from "react";
import {
  getBookings,
  deleteBooking,
  updateBooking,
} from "../api/bookingApi";

const Admin = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await getBookings();
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await deleteBooking(id);
    fetchBookings();
  };

  const handleStatusChange = async (id, status) => {
    await updateBooking(id, { status });
    fetchBookings();
  };

  return (
    <div className="pt-24 px-4 md:px-8 pb-10">

      <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
        Admin Dashboard
      </h1>

      {/* 🔥 MOBILE VIEW (CARDS) */}
      <div className="space-y-4 md:hidden">
        {bookings.map((b) => {
          const paid = b.advanceAmount || 0;
          const total = b.totalAmount || 0;
          const remaining = total - paid;

          return (
            <div
              key={b._id}
              className="bg-white shadow-md rounded-2xl p-4 space-y-2"
            >
              <div className="flex justify-between">
                <h2 className="font-semibold">{b.name}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(b.checkIn).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm text-gray-600">📞 {b.phone}</p>
              <p className="text-sm text-gray-600">🏨 {b.roomType}</p>
              <p className="text-sm text-gray-600">👥 {b.guests} Guests</p>

              <div className="flex justify-between text-sm">
                <span className="text-green-600">Paid: ₹{paid}</span>
                <span className="text-red-500">Due: ₹{remaining}</span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <select
                  value={b.status}
                  onChange={(e) =>
                    handleStatusChange(b._id, e.target.value)
                  }
                  className="border px-2 py-1 text-sm rounded"
                >
                  <option value="pending">Pending (75%)</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </select>

                <button
                  onClick={() => handleDelete(b._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border text-sm">

          <thead className="bg-black text-white">
            <tr>
              <th className="p-2">Name</th>
              <th>Phone</th>
              <th>Room</th>
              <th>Guests</th>
              <th>CheckIn</th>
              <th>Paid</th>
              <th>Remaining</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => {
              const paid = b.advanceAmount || 0;
              const total = b.totalAmount || 0;
              const remaining = total - paid;

              return (
                <tr key={b._id} className="border-b text-center">

                  <td className="p-2">{b.name}</td>
                  <td>{b.phone}</td>
                  <td>{b.roomType}</td>
                  <td>{b.guests}</td>

                  <td>
                    {new Date(b.checkIn).toLocaleDateString()}
                  </td>

                  <td className="text-green-600 font-semibold">
                    ₹{paid}
                  </td>

                  <td className="text-red-500 font-semibold">
                    ₹{remaining}
                  </td>

                  <td>
                    <select
                      value={b.status}
                      onChange={(e) =>
                        handleStatusChange(b._id, e.target.value)
                      }
                      className="border px-2 py-1"
                    >
                      <option value="pending">Pending (75%)</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
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

export default Admin;