import { Modal } from 'semantic-ui-react'
import React from "react";

const Notfound = (isOpen) => {
  const [open, setOpen] = React.useState(isOpen);
  const onCloseProcessign = ()=>{
    setOpen(false);
    window.location.href="/";
  }
  return (
    <div>
      
      <Modal
                onClose={() => onCloseProcessign()}
                onOpen={() => setOpen(true)}
                open={open}
                defaultOpen
              >
                <Modal.Header>Repositories/User Not Found</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <h5>
                      Please check entered username.
                    </h5>
                  </Modal.Description>
                </Modal.Content>
                
              </Modal>
    </div>
  );
};

export default Notfound;
