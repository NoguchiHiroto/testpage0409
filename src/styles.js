const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: window.screen.availWidth * 0.7,
  // height: window.screen.availHeight * 0.85 ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: `${window.screen.availHeight * 0.01}px ${window.screen.availWidth * 0.01}px `,
  // paddingBottom: 0,
};
const buttonStyle = {
  position: 'relative',
  width: 85,
  height: 50,
  margin: 5,
  marginBottom: 0,
  // marginTop: window.screen.availWidth * 0.9,
  padding: 0,
};

const modalInputStyle = {
  position: 'relative',
  // border: 'solid #222',

  width: style.width,
  height: (style.height - buttonStyle.height) * 0.95,
  p: 4,
  // padding: `${window.screen.availHeight * 0.1}px ${window.screen.availWidth * 0.1}px`,
  padding: 0,
};


const styles = {
  main: style,
  input: modalInputStyle,
  button: buttonStyle,
}
export default styles;