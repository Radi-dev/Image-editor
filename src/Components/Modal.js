import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const OurModalComponent = ({ isOpen, onSetNewStyles, closeModal }) => {
return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        <input
          type="color"
          onChange={(e) => { onSetNewStyles({ color: e.target.value }) } }>
        </input>
        <button onClick={() => closeModal()}>close</button>
      </Modal>
    </div>
  );
}
export default OurModalComponent