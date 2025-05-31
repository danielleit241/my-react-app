import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useState } from "react";
import TableUser from "./TableUser";
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
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  );
};

export default ManageUser;
