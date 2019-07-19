import React from "react";
import Dialog from "@material-ui/core/Dialog";

import Slide from "@material-ui/core/Slide";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const SlideDialog = ({ open, open1, setOpen, setOpen1 }) => {
  function handleClose() {
    setOpen(false);
    setOpen1(false);
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
        <SignUp setOpen={setOpen} />
      </Dialog>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <SignIn setOpen={setOpen} setOpen1={setOpen1} />
      </Dialog>
    </div>
  );
};
export default SlideDialog;
