import React from "react";
import Dialog from "@material-ui/core/Dialog";

import Slide from "@material-ui/core/Slide";
import SignUp from "./SignUp";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const SlideDialog = ({ open, setOpen }) => {
  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <SignUp />
      </Dialog>
    </div>
  );
};
export default SlideDialog;
