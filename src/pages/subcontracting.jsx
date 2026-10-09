import { useEffect, useState } from "react";

import AOS from "aos";

import {
  FiSearch,
  FiFilter,
  FiPlus,
  FiCalendar,
  FiChevronDown,
  FiX,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiPackage,
  FiClock,
  FiCheckCircle,
  FiHome,
  FiStar,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

import "./subcontracting.css";

function Subcontracting() {

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const orders = [
    {
      id: "SC-1024",
      product: "Premium Steel Components",
      subcontractor: "Raj Engineering",
      quantity: "1,250",
      date: "08 Oct 2026",
      status: "In Progress",
    },
    {
      id: "SC-1023",
      product: "Industrial Brackets",
      subcontractor: "Mehta Industries",
      quantity: "850",
      date: "07 Oct 2026",
      status: "Completed",
    },
    {
      id: "SC-1022",
      product: "Machine Housing",
      subcontractor: "Shree Fabrication",
      quantity: "420",
      date: "06 Oct 2026",
      status: "Pending",
    },
    {
      id: "SC-1021",
      product: "Metal Frames",
      subcontractor: "Patel Works",
      quantity: "670",
      date: "05 Oct 2026",
      status: "In Progress",
    },
    {
      id: "SC-1020",
      product: "Precision Shafts",
      subcontractor: "Apex Engineering",
      quantity: "320",
      date: "04 Oct 2026",
      status: "Completed",
    },
    {
      id: "SC-1019",
      product: "Steel Plates",
      subcontractor: "Krishna Works",
      quantity: "950",
      date: "03 Oct 2026",
      status: "Pending",
    },
  ];

  const filteredOrders = orders.filter((order) => {

    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.subcontractor.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="subcontracting-page glass-theme">

      <div className="subcontracting-container">

        {/* HEADER */}

        <section
          className="subcontracting-header"
          data-aos="fade-up"
        >

          <div>

            <h1>
              Subcontracting
            </h1>

            <p>
              Manage and monitor all subcontracting orders.
            </p>

          </div>

          <button
            className="sc-primary-button"
            onClick={() => setShowModal(true)}
          >
            <FiPlus />
            Create Order
          </button>

        </section>


        {/* STATS */}

        <section className="sc-stats">

          <div className="sc-stat">
            <div className="sc-stat-icon blue">
              <FiPackage />
            </div>

            <div>
              <strong>128</strong>
              <span>Total Orders</span>
            </div>
          </div>

          <div className="sc-stat">
            <div className="sc-stat-icon orange">
              <FiClock />
            </div>

            <div>
              <strong>24</strong>
              <span>Pending</span>
            </div>
          </div>

          <div className="sc-stat">
            <div className="sc-stat-icon blue">
              <FiPackage />
            </div>

            <div>
              <strong>36</strong>
              <span>In Progress</span>
            </div>
          </div>

          <div className="sc-stat">
            <div className="sc-stat-icon green">
              <FiCheckCircle />
            </div>

            <div>
              <strong>68</strong>
              <span>Completed</span>
            </div>
          </div>

        </section>


        {/* TABLE CARD */}

        <section
          className="subcontracting-card"
          data-aos="fade-up"
        >

          <div className="sc-toolbar">

            <div className="sc-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>


            <div className="sc-toolbar-actions">

              <div className="sc-select">

                <FiFilter />

                <div 
                  className="custom-dropdown" 
                  tabIndex="0" 
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                >
                  <div className="custom-dropdown-selected" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {statusFilter === 'All' ? 'All Status' : statusFilter}
                    <FiChevronDown style={{ marginLeft: '10px' }} />
                  </div>
                  {isDropdownOpen && (
                    <div className="custom-dropdown-options">
                      {['All', 'Pending', 'In Progress', 'Completed'].map(status => (
                        <div 
                          key={status}
                          className="custom-dropdown-option"
                          onClick={() => {
                            setStatusFilter(status);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {status === 'All' ? 'All Status' : status}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* <FiChevronDown /> */}

              </div>


              <button className="date-button">
                <FiCalendar />
                October 2026
              </button>

            </div>

          </div>


          {/* TABLE */}

          <div className="sc-table-wrapper">

            <table className="sc-table">

              <thead>

                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Subcontractor</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredOrders.map((order) => (

                  <tr key={order.id}>

                    <td>
                      <strong className="order-id">
                        {order.id}
                      </strong>
                    </td>

                    <td>
                      <span className="product-name">
                        {order.product}
                      </span>
                    </td>

                    <td>
                      <span className="subcontractor-name">
                        {order.subcontractor}
                      </span>
                    </td>

                    <td>
                      {order.quantity}
                    </td>

                    <td>
                      <span className="date-text">
                        {order.date}
                      </span>
                    </td>

                    <td>

                      <span
                        className={`sc-status ${order.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {order.status}
                      </span>

                    </td>

                    <td>

                      <div className="table-actions">

                        <button title="View">
                          <FiEye />
                        </button>

                        <button title="Edit">
                          <FiEdit2 />
                        </button>

                        <button
                          className="delete"
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredOrders.length === 0 && (
              <div className="empty-orders">
                No orders found.
              </div>
            )}

          </div>


          {/* FOOTER */}

          <div className="sc-table-footer">

            <span>
              Showing {filteredOrders.length} of{" "}
              {orders.length} orders
            </span>

            <div className="pagination">

              <button>‹</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>

            </div>

          </div>

        </section>

      </div>


      {/* MODAL */}

      {showModal && (

        <div
          className="sc-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="sc-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span>NEW ORDER</span>
                <h2>Create Subcontracting Order</h2>
              </div>

              <button
                onClick={() => setShowModal(false)}
              >
                <FiX />
              </button>

            </div>


            <div className="modal-body">

              <div className="form-group">

                <label>
                  Product
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                />

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Subcontractor
                  </label>

                  <select>
                    <option>
                      Select subcontractor
                    </option>

                    <option>
                      Raj Engineering
                    </option>

                    <option>
                      Mehta Industries
                    </option>

                    <option>
                      Shree Fabrication
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    Quantity
                  </label>

                  <input
                    type="number"
                    placeholder="0"
                  />

                </div>

              </div>


              <div className="form-grid">

                <div className="form-group">

                  <label>
                    Start Date
                  </label>

                  <input
                    type="date"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Expected Date
                  </label>

                  <input
                    type="date"
                  />

                </div>

              </div>


              <div className="form-group">

                <label>
                  Notes
                </label>

                <textarea
                  rows="4"
                  placeholder="Add order notes..."
                ></textarea>

              </div>

            </div>


            <div className="modal-footer">

              <button
                className="cancel-button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button className="save-button">
                Create Order
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Subcontracting;