import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import Image from "next/image";
import Link from "next/link";
import { Accordion, Nav } from "react-bootstrap";
const menuLinks = [
  {
    title: "Home",
    path: "/",
    role: ["public"],
  },
  {
    title: "About",
    id: 1,
    role: ["public"],
    subMenu: [
      {
        title: "Non-Profit",
        path: "/",
        role: ["public"],
      },
    ],
  },
  {
    title: "Classes",
    id: 4,
    role: ["public"],
    subMenu: [
      {
        title: "Find Classes",
        path: "/",
        role: ["public"],
      },
      {
        title: "All Classes(Admin)",
        path: "/",
        role: ["Super Admin"],
      },
      {
        title: "My Classes(Enrolled)",
        path: "/",
        role: ["Learner", "Teacher", "Super Admin", "School Leader"],
      },
      {
        title: "My Classes(Teaching)",
        path: "/",
        role: ["Teacher"],
      },
    ],
  },
  {
    title: "Jobs",
    id: 5,
    role: ["public"],
    subMenu: [
      {
        title: "Find Jobs",
        path: "/",
        role: ["public"],
      },
      {
        title: "All Jobs(Admin)",
        path: "/",
        role: ["Super Admin"],
      },
      {
        title: "My Job Applications",
        path: "/",
        role: ["Teacher"],
      },
      {
        title: "My Job Postings",
        path: "/",
        role: ["School Leader"],
      },
    ],
  },
  {
    title: "Users",
    id: 6,
    role: ["Super Admin"],
    subMenu: [
      {
        title: "All Users",
        path: "/",
        role: ["Super Admin"],
      },
    ],
  },
];

const Navbar = () => {
  const MenuItem = ({ title, path, subMenu, id, role }) => {
    if (subMenu) {
      return (
        <Dropdown>
          <DropdownToggle
            id="dropdown-basic"
            className="nav4Links d-flex text-justify mt-1 mx-auto px-1 me-1 rounded-0 bg-white border-0"
            style={{ fontWeight: "light", color: "#468284" }}
          >
            {title}
          </DropdownToggle>
          <Dropdown.Menu
            aria-labelledby="collasible-nav-dropdown"
            data-bs-popper="static"
          >
            {subMenu.map((item, index) => {
              return <DropdownItem {...item} key={index}></DropdownItem>;
            })}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return (
      <Link
        href={path}
        style={{ fontWeight: "light", color: "#468284" }}
        className=" nav4Links cursorPointer d-flex text-justify mx-auto px-1 me-1 rounded-0 text-decoration-none"
      >
        {title}
      </Link>
    );
  };
  const DropdownItem = ({ title, path, divider }) => {
    if (divider) {
      return <Dropdown.Divider />;
    }
    return <Dropdown.Item href={path}>{title}</Dropdown.Item>;
  };

  // MobileNavbar
  const MobileMenuItem = ({ title, path, subMenu, id }) => {
    if (subMenu) {
      return (
        <Accordion.Item eventKey={id} className="border-0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body className="p-0">
            <div>
              <ul className="dropdown-menu position-static d-grid ps-4 pe-2 pt-2 pb-2 rounded-3 mx-0 w-100 border-0 bg-light">
                {subMenu.map((item, index) => {
                  return (
                    <MobileDropdownItem
                      {...item}
                      key={index}
                    ></MobileDropdownItem>
                  );
                })}
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      );
    }
    return (
      <Link href={path} className="text-decoration-none" onClick={handleClose}>
        <Accordion.Item eventKey={id} className="accordionHome border-0">
          <Accordion.Header className="accordionHome">{title}</Accordion.Header>
        </Accordion.Item>
      </Link>
    );
  };
  // MobileDropdownItem
  const MobileDropdownItem = ({ title, path }) => {
    return (
      <li className="my-1" onClick={handleClose}>
        <Link
          href={path}
          className="mobileNavbar4Links rounded-2 text-decoration-none"
        >
          {title}
        </Link>
      </li>
    );
  };
  const [toggler, setToggler] = useState(false);
  const handleClose = () => {
    setToggler(false);
  };
  const handleShow = () => {
    setToggler(true);
  };
  return (
    <div className={`parentNavbar4 navbar4 `}>
      <div className="bg-white px-5 py-2">
        <div className="d-flex justify-content-between align-items-center mb-1 mt-1">
          <Link href="/" className="cursorPointer">
            <img
              className="logoNavbar4"
              src="/TagprosEdLogoLandscape.webp"
              width="140vw"
              height="auto"
            />
          </Link>
          <Link href="#" className="hamburgerNavbar4">
            <RxHamburgerMenu
              className="hamburgerNavbar4"
              onClick={handleShow}
            />
          </Link>
          <div className={`navbar4Links`}>
            {menuLinks.map((item, index) => {
              return <MenuItem {...item} key={index}></MenuItem>;
            })}

            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>

      <Offcanvas show={toggler} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <button className="btn btn-primary">Login</button>
          <Link href="/" className="cursorPointer" passHref>
            <Image
              src="/TagprosEdLogoLandscape.webp"
              width={135}
              height={40}
              className="ms-auto me-auto"
              alt="Tagpros Logo"
            />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion defaultActiveKey="0" className="accordion-sidebar">
            <Nav className="flex-column">
              {menuLinks.map((item, index) => {
                return <MobileMenuItem {...item} key={index}></MobileMenuItem>;
              })}
            </Nav>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;
