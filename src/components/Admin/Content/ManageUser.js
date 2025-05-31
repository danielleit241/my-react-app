import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { BsFileEarmarkPlus } from "react-icons/bs";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };

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
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
