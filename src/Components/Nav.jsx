import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaSearch } from 'react-icons/fa';
import { IoReorderThree } from 'react-icons/io';

function Nav() {
  const [openModal, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between bg-primary text-white p-10">
        <div className="flex space-x-4">
          <p className="flex items-center space-x-4 font-light">
            <span className="text-3xl text-secondary">
              <FiMail />
            </span>
            holidayplanners@gmail.com
          </p>
          <p className="flex items-center space-x-6">
            <span className="text-3xl text-secondary">
              <FiPhoneCall />
            </span>
            +1234567890
          </p>
        </div>
        <div className="flex justify-evenly items-center space-x-4">
          <p className="text-3xl text-secondary">
            <FaFacebookF />
          </p>
          <p className="text-3xl text-secondary">
            <FaInstagram />
          </p>
          <p className="text-3xl text-secondary">
            <FaTwitter />
          </p>
        </div>
      </div>
      <div className="flex justify-between p-8 container mx-auto">
        <p>holidayplanners</p>
        <div className="space-x-6 flex items-center">
          <button className="px-10 py-3 bg-secondary text-white rounded-lg font-semibold">
            Reserve
          </button>
          <i className="text-3xl">
            <FaSearch />
          </i>
          <button className="text-3xl" onClick={open}>
            <IoReorderThree />
          </button>
        </div>
      </div>
      {openModal && (
        <div className="bg-primary inset-0">
          <div>
            <p className="text-white">Holiday planners</p>
            <ul className="text-white">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/About"}>
                <li>About</li>
              </Link>
              <Link to={"/Destination"}>
                <li>Destination</li>
              </Link>
              <Link to={"/Tour"}>
                <li>Tour</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
