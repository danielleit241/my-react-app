import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useState } from "react";
const ManageUser = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="manage-users-container">
      <div className="title">ManageUser</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <BsFileEarmarkPlus className="icon" />
            Add new users
          </button>
        </div>
        <div className="table-users-container">table of users</div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
};

export default ManageUser;
