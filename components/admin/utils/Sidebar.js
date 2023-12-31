import React from "react";

export default function Sidebar() {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{height:"5000px"}}>
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src="/admin/images/logo.svg/" alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">
            <img src="/admin/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img
                    className="img-xs rounded-circle "
                    src="/admin/images/faces/face15.jpg"
                    alt
                  />
                  <span className="count bg-success" />
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal text-white">Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-toggle="dropdown">
                <i className="mdi mdi-dots-vertical" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                aria-labelledby="profile-dropdown"
              >
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Account settings
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Change Password
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      To-do list
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Admin Pages</span>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="/admin">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer" />
              </span>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="/admin/clasik">
              <span className="menu-icon">
                <i className="mdi mdi-laptop" />
              </span>
              <span className="menu-title">Basic Element</span>
            </a>
          </li>
          {/* <li className="nav-item menu-items">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop" />
              </span>
              <span className="menu-title">Basic Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li> */}
          <li className="nav-item menu-items">
            <a className="nav-link" href="/admin/struktur">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play" />
              </span>
              <span className="menu-title">Kabinet</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <span className="menu-icon">
                <i className="mdi mdi-table-large" />
              </span>
              <span className="menu-title">Tables</span>
            </a>
          </li>
          {/* <li className="nav-item menu-items">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar" />
              </span>
              <span className="menu-title">Charts</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/icons/mdi.html">
              <span className="menu-icon">
                <i className="mdi mdi-contacts" />
              </span>
              <span className="menu-title">Icons</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <span className="menu-icon">
                <i className="mdi mdi-security" />
              </span>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/blank-page.html">
                    {" "}
                    Blank Page{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-404.html">
                    {" "}
                    404{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-500.html">
                    {" "}
                    500{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/login.html">
                    {" "}
                    Login{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/register.html">
                    {" "}
                    Register{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li> */}
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html"
            >
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box" />
              </span>
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
