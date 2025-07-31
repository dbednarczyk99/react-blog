import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopUp = ({show, handleClose, handleConfirm}) => {
  
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            This operation will completely remove this post from the blog. Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default PopUp;