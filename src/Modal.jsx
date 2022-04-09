import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring';
import { changeStateAction } from './actions/actions';

import SearchButton from './searchButton.jsx';
import styles from './styles.js';
import ResponsiveDatePickers from './DatePicker.jsx';
import RewardField from './RewardField.jsx';
import LangSelectMobile from './LangSelectMobile';
const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = styles.main;
const modalInputStyle = styles.input;
const buttonStyle = style.button;
export default function SpringModal() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.stateReducer.modalOpen);
  const handleOpen = () => dispatch(changeStateAction.changeModalOpen(true));
  const handleClose = () => dispatch(changeStateAction.changeModalOpen(false));

  return (
    <div>
      <Button onClick={handleOpen}>絞り込み</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx = {modalInputStyle}>
              <Typography id="spring-modal-title" variant="h6" component="h2">
                絞り込み検索
              </Typography>


              <Typography id="spring-modal-description" sx={{ mt: 2}}>
                {window.screen.availWidth > 479 ? '報酬金額' : ''}
              </Typography>
              <RewardField />

              <Typography id="spring-modal-description" sx={{ mt: 2, mb:0}}>
                期間
              </Typography>
              <ResponsiveDatePickers />

              {window.screen.availWidth > 479 ?  '' :
              <React.Fragment>
                <Typography id="spring-modal-description" sx={{ mt: 2}}>
                  開発言語
                </Typography>
                <LangSelectMobile /> 
              </React.Fragment>
              }

            </Box>

            <Box sx = {{height: style.height - modalInputStyle.height, textAlign: 'right', position: 'relative', bottom: 0}}>
              <Button onClick={handleClose} style = {buttonStyle}>閉じる</Button>
              <SearchButton />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
