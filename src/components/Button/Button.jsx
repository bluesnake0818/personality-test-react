import styles from './Button.module.css'

const Button = (props) => {
  const styleObj = {
    margin: "1rem",
    width: "50%",
    height: "6rem",
    borderRadius: "10px",
    fontSize: 14,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: "4px",
    textAlign: "center",
  }

  styleObj.color = props.color
  styleObj.borderColor = props.color
  styleObj.width = props.width
  styleObj.margin = props.margin

  return (
    <button style={styleObj}>
      {props.name}
    </button>
  )
}

export default Button