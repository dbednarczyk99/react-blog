import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PopUp = ({show, handleClose, handleConfirm}) => {
  
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Potwierdzenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Czy na pewno chcesz usunąć ten post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Anuluj
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Usuń
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default PopUp;