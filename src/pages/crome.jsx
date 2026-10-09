import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiDownload,
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiPackage,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import "./crome.css";

function Crome() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="crome-page">
      <div className="crome-container">

        {/* PAGE HEADER */}
        <section className="crome-header" data-aos="fade-up">
          <div className="crome-header-left">
            <div className="crome-title-icon">
              <FiPackage />
            </div>

            <div>
              <h1>Crome Management</h1>
              <p>
                Track crome orders sent to parties for further processing.
              </p>
            </div>
          </div>

          <button className="download-btn">
            <FiDownload />
            <span>Download Report</span>
          </button>
        </section>

        {/* STAT CARDS */}
        <section className="crome-stats" data-aos="fade-up">
          
          <div className="crome-stat-card">
            <div className="stat-content">
              <span className="stat-label">Total Cromes</span>
              <strong>0</strong>
            </div>

            <div className="stat-icon blue">
              <FiPackage />
            </div>
          </div>

          <div className="crome-stat-card">
            <div className="stat-content">
              <span className="stat-label">In Progress</span>
              <strong>0</strong>
            </div>

            <div className="stat-icon orange">
              <FiClock />
            </div>
          </div>

          <div className="crome-stat-card">
            <div className="stat-content">
              <span className="stat-label">Completed</span>
              <strong>0</strong>
            </div>

            <div className="stat-icon green">
              <FiCheckCircle />
            </div>
          </div>

        </section>

        {/* ORDERS SECTION */}
        <section
          className="crome-orders-section"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          
          {/* SEARCH + FILTER */}
          <div className="crome-toolbar">

            <div className="crome-search">
              <FiSearch />

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filter-wrapper">
              <button
                className="filter-btn"
                onClick={() => setShowFilter(!showFilter)}
              >
                <FiFilter />
                <span>Filter</span>
                <FiChevronDown
                  className={showFilter ? "rotate-icon" : ""}
                />
              </button>

              {showFilter && (
                <div className="filter-dropdown">

                  <button
                    className={status === "All Status" ? "selected" : ""}
                    onClick={() => {
                      setStatus("All Status");
                      setShowFilter(false);
                    }}
                  >
                    <span className="filter-dot all"></span>
                    All Status
                  </button>

                  <button
                    className={status === "In Progress" ? "selected" : ""}
                    onClick={() => {
                      setStatus("In Progress");
                      setShowFilter(false);
                    }}
                  >
                    <span className="filter-dot progress"></span>
                    In Progress
                  </button>

                  <button
                    className={status === "Completed" ? "selected" : ""}
                    onClick={() => {
                      setStatus("Completed");
                      setShowFilter(false);
                    }}
                  >
                    <span className="filter-dot completed"></span>
                    Completed
                  </button>

                  <button
                    className={status === "Rejected" ? "selected" : ""}
                    onClick={() => {
                      setStatus("Rejected");
                      setShowFilter(false);
                    }}
                  >
                    <span className="filter-dot rejected"></span>
                    Rejected
                  </button>

                </div>
              )}
            </div>

          </div>

          {/* TABLE HEADER */}
          <div className="crome-table">

            <div className="crome-table-header">
              <span>Order</span>
              <span>Party</span>
              <span>Quantity</span>
              <span>Status</span>
              <span>Date</span>
            </div>

            {/* EMPTY STATE */}
            <div className="crome-empty">

              <div className="empty-icon">
                <FiPackage />
              </div>

              <h3>No crome orders found.</h3>

              <p>
                Crome orders will appear here when they are created.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Crome;