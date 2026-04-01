import React, { useEffect, useState } from "react";
import {
  getBookings,
  deleteBooking,
  updateBooking,
} from "../api/adminApi";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // 🔐 If no token → redirect
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
    }
  }, [token, navigate]);

const fetchBookings = async () => {
  try {
    setLoading(true);

    const res = await getBookings();

    // ✅ Always ensure array
    setBookings(Array.isArray(res.data) ? res.data : res.data.data || []);
  } catch (err) {
    console.error(err);
    setError("Failed to load bookings 😢");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await deleteBooking(id, token); // ✅ token pass
    fetchBookings();
  };

  const handleStatusChange = async (id, status) => {
    await updateBooking(id, { status }, token); // ✅ token pass
    fetchBookings();
  };

  // 🔓 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin-login");
  };

  return (
    <div className="pt-20 px-4 pb-10 bg-gray-50 min-h-screen">

      {/* 🔥 TOP BAR */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-3xl font-semibold">
          Data of Bookings
        </h1>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>

      {/* 🔄 Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* ❌ Error */}
      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {/* 📱 MOBILE VIEW */}
      <div className="space-y-4 md:hidden">
        {bookings.map((b) => {
          const paid = b.advanceAmount || 0;
          const total = b.totalAmount || 0;
          const remaining = total - paid;

          return (
            <div
              key={b._id}
              className="bg-white shadow rounded-xl p-4 space-y-2"
            >
              <div className="flex justify-between">
                <h2 className="font-semibold">{b.name}</h2>
                <span className="text-xs text-gray-500">
                  {new Date(b.checkIn).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm">📞 {b.phone}</p>
              <p className="text-sm">🏨 {b.roomType}</p>
              <p className="text-sm">👥 {b.guests} Guests</p>

              <div className="flex justify-between text-sm">
                <span className="text-green-600">₹{paid}</span>
                <span className="text-red-500">₹{remaining}</span>
              </div>

              <div className="flex justify-between items-center">
                <select
                  value={b.status}
                  onChange={(e) =>
                    handleStatusChange(b._id, e.target.value)
                  }
                  className="border px-2 py-1 text-sm rounded"
                >
                  <option value="pending">Pending</option>
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
        <table className="w-full border text-sm bg-white">

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
                      <option value="pending">Pending</option>
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