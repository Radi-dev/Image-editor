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

const OurModalComponent = ({ isOpen }) => {
return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
      >
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
export default OurModalComponent