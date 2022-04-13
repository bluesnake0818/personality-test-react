import react from "react"

function Step6(props) {
  if (props.currentStep !== 6) {
    return null
  } 
  return(
    <react.Fragment>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        />
    </div>
    <button className="btn btn-success btn-block">Submit</button>
    </react.Fragment>
  );
}

export default Step6