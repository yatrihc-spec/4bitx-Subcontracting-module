import { useEffect, useState } from "react";

import AOS from "aos";

import {
  FiSearch,
  FiPlus,
  FiFilter,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiX,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import "./subcontractor.css";

function Subcontractor() {

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const subcontractors = [
    {
      id: "SUB-001",
      name: "Raj Engineering",
      contact: "Rahul Kumar",
      email: "rahul@rajengineering.com",
      phone: "+91 98765 43210",
      location: "Ahmedabad",
      orders: 28,
      status: "Active",
      rating: "4.8",
    },
    {
      id: "SUB-002",
      name: "Mehta Industries",
      contact: "Amit Mehta",
      email: "amit@mehtaindustries.com",
      phone: "+91 98250 12345",
      location: "Vadodara",
      orders: 21,
      status: "Active",
      rating: "4.6",
    },
    {
      id: "SUB-003",
      name: "Shree Fabrication",
      contact: "Kiran Shah",
      email: "kiran@shreefab.com",
      phone: "+91 99123 45678",
      location: "Rajkot",
      orders: 18,
      status: "Pending",
      rating: "4.4",
    },
    {
      id: "SUB-004",
      name: "Patel Works",
      contact: "Harsh Patel",
      email: "harsh@patelworks.com",
      phone: "+91 98989 76543",
      location: "Ahmedabad",
      orders: 34,
      status: "Active",
      rating: "4.9",
    },
    {
      id: "SUB-005",
      name: "Apex Engineering",
      contact: "Dhruv Shah",
      email: "dhruv@apexeng.com",
      phone: "+91 99090 12345",
      location: "Surat",
      orders: 15,
      status: "Inactive",
      rating: "4.2",
    },
    {
      id: "SUB-006",
      name: "Krishna Works",
      contact: "Jay Krishna",
      email: "jay@krishnaworks.com",
      phone: "+91 98700 11223",
      location: "Gandhinagar",
      orders: 12,
      status: "Active",
      rating: "4.5",
    },
  ];

  const filteredSubcontractors =
    subcontractors.filter((subcontractor) =>
      `${subcontractor.name} ${subcontractor.contact} ${subcontractor.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <main className="subcontractor-page">

      <div className="subcontractor-container">

        {/* HEADER */}

        <section
          className="subcontractor-header"
          data-aos="fade-up"
        >

          <div>



            <h1>
              Subcontractors
            </h1>

            <p>
              Manage your production partners and vendors.
            </p>

          </div>

          <button
            className="subcontractor-primary"
            onClick={() => setShowModal(true)}
          >
            <FiPlus />
            Add Subcontractor
          </button>

        </section>


        {/* STATS */}

        <section className="subcontractor-stats">

          <div className="subcontractor-stat">

            <div className="sub-stat-icon blue">
              <FiUsers />
            </div>

            <div>
              <strong>48</strong>
              <span>Total Vendors</span>
            </div>

          </div>


          <div className="subcontractor-stat">

            <div className="sub-stat-icon green">
              <FiCheckCircle />
            </div>

            <div>
              <strong>41</strong>
              <span>Active</span>
            </div>

          </div>


          <div className="subcontractor-stat">

            <div className="sub-stat-icon orange">
              <FiClock />
            </div>

            <div>
              <strong>5</strong>
              <span>Pending</span>
            </div>

          </div>


          <div className="subcontractor-stat">

            <div className="sub-stat-icon red">
              <FiAlertCircle />
            </div>

            <div>
              <strong>2</strong>
              <span>Inactive</span>
            </div>

          </div>

        </section>


        {/* MAIN CARD */}

        <section
          className="subcontractor-card"
          data-aos="fade-up"
        >

          <div className="subcontractor-toolbar">

            <div className="subcontractor-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search subcontractors..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <button className="filter-button">
              <FiFilter />
              Filter
            </button>

          </div>


          {/* CARDS */}

          <div className="subcontractor-grid">

            {filteredSubcontractors.map((subcontractor) => (

              <article
                className="vendor-card"
                key={subcontractor.id}
              >

                <div className="vendor-top">

                  <div className="vendor-avatar">
                    {subcontractor.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <span
                    className={`vendor-status ${subcontractor.status.toLowerCase()}`}
                  >
                    {subcontractor.status}
                  </span>

                </div>


                <div className="vendor-info">

                  <h3>
                    {subcontractor.name}
                  </h3>

                  <span className="vendor-id">
                    {subcontractor.id}
                  </span>

                </div>


                <div className="vendor-details">

                  <div>
                    <FiUsers />
                    <span>
                      {subcontractor.contact}
                    </span>
                  </div>

                  <div>
                    <FiMail />
                    <span>
                      {subcontractor.email}
                    </span>
                  </div>

                  <div>
                    <FiPhone />
                    <span>
                      {subcontractor.phone}
                    </span>
                  </div>

                  <div>
                    <FiMapPin />
                    <span>
                      {subcontractor.location}
                    </span>
                  </div>

                </div>


                <div className="vendor-bottom">

                  <div className="vendor-orders">

                    <strong>
                      {subcontractor.orders}
                    </strong>

                    <span>
                      Orders
                    </span>

                  </div>

                  <div className="vendor-rating">

                    <strong>
                      ★ {subcontractor.rating}
                    </strong>

                    <span>
                      Rating
                    </span>

                  </div>


                  <div className="vendor-actions">

                    <button title="View">
                      <FiEye />
                    </button>

                    <button title="Edit">
                      <FiEdit2 />
                    </button>

                    <button
                      className="danger"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {filteredSubcontractors.length === 0 && (
            <div className="vendor-empty">
              No subcontractors found.
            </div>
          )}

        </section>

      </div>


      {/* ADD MODAL */}

      {showModal && (

        <div
          className="vendor-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="vendor-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="vendor-modal-header">

              <div>

                <span>
                  VENDOR MANAGEMENT
                </span>

                <h2>
                  Add Subcontractor
                </h2>

              </div>

              <button
                onClick={() => setShowModal(false)}
              >
                <FiX />
              </button>

            </div>


            <div className="vendor-form">

              <div className="vendor-form-group">

                <label>
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Enter company name"
                />

              </div>


              <div className="vendor-form-group">

                <label>
                  Contact Person
                </label>

                <input
                  type="text"
                  placeholder="Enter contact name"
                />

              </div>


              <div className="vendor-form-grid">

                <div className="vendor-form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="company@example.com"
                  />

                </div>


                <div className="vendor-form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                  />

                </div>

              </div>


              <div className="vendor-form-group">

                <label>
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter location"
                />

              </div>


              <div className="vendor-form-group">

                <label>
                  Notes
                </label>

                <textarea
                  rows="4"
                  placeholder="Add notes..."
                ></textarea>

              </div>

            </div>


            <div className="vendor-modal-footer">

              <button
                className="vendor-cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button className="vendor-save">
                Add Subcontractor
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Subcontractor;