import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteDeleteUser } from "../../../services/apiService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataDelete)) {
      console.log("dataDelete: ", dataDelete.id);
      setEmail(dataDelete.email);
    }
  }, [dataDelete]);

  const handleClose = () => {
    setEmail("");
    props.resetDeleteData();
    setShow(false);
  };

  const handleDeleteUser = async () => {
    let data = await deleteDeleteUser(dataDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      props.setCurrentPage(1);
      await props.fetchListUsersWithPaginate(1);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
      return;
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user with email is <b>{email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
