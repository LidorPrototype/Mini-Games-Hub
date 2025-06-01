import React from "react"

const styles = {
  hangmanContainer: {
    position: "relative",
    width: "250px",
    height: "400px",
    margin: "0 auto",
  },
  poleBase: {
    height: "10px",
    width: "100%",
    backgroundColor: "brown",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  poleVertical: {
    height: "100%",
    width: "10px",
    backgroundColor: "brown",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  poleTop: {
    height: "10px",
    width: "60%",
    backgroundColor: "brown",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: "10px",
  },
  poleRope: {
    height: "50px",
    width: "10px",
    backgroundColor: "brown",
    position: "absolute",
    top: "1px",
    left: "62%",
    transform: "translateX(-50%)",
    borderRadius: "12px",
  },
  head: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "7px solid black",
    position: "absolute",
    top: "12%",
    left: "62%",
    transform: "translateX(-50%)",
  },
  body: {
    width: "10px",
    height: "80px",
    backgroundColor: "black",
    position: "absolute",
    top: "24%",
    left: "62%",
    transform: "translateX(-50%)",
  },
  rightArm: {
    width: "60px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "24%",
    left: "73%",
    transform: "rotate(-30deg) translateX(-50%)",
    transformOrigin: "left bottom",
    borderRadius: "12px",
  },
  leftArm: {
    width: "60px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "35%",
    left: "59%",
    transform: "rotate(30deg) translateX(-100%)",
    transformOrigin: "right bottom",
    borderRadius: "12px",
  },
  rightLeg: {
    width: "70px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "47%",
    left: "68%",
    transform: "rotate(60deg) translateX(-30%)",
    transformOrigin: "left top",
    borderRadius: "12px",
  },
  leftLeg: {
    width: "70px",
    height: "10px",
    backgroundColor: "black",
    position: "absolute",
    top: "32%",
    left: "42%",
    transform: "rotate(-60deg) translateX(-70%)",
    transformOrigin: "right top",
    borderRadius: "12px",
  },
}

const BODY_PARTS = [
  <div key="head" style={styles.head} />,
  <div key="body" style={styles.body} />,
  <div key="right-arm" style={styles.rightArm} />,
  <div key="left-arm" style={styles.leftArm} />,
  <div key="right-leg" style={styles.rightLeg} />,
  <div key="left-leg" style={styles.leftLeg} />,
]

const HangmanDraw = ({ numberOfGuess }) => {
  return (
    <div style={styles.hangmanContainer}>
      {BODY_PARTS.slice(0, numberOfGuess)}
      <div style={styles.poleRope} />
      <div style={styles.poleTop} />
      <div style={styles.poleVertical} />
      <div style={styles.poleBase} />
    </div>
  )
}

export default HangmanDraw
