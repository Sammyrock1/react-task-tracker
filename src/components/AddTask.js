import React from 'react';
import { useState } from 'react';

const myStyle = {
  label:{
     marginRight: "10rem",
  fontSize: "15px",
  fontWeight: 700,
  },
   FormControl:{
  marginTop: "10px",
},
 myInputStyle: {
  padding: "5px 5px ",
  borderRadius: "4px",
  border: "1px solid",
  width: "100%",
},
};


const AddTask = ({onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
  e.preventDefault()

  if (!text) {
    alert("Please add task ")
    return;
  }
  onAdd({ text, day, reminder });

  setDay("");
  setText("");
  setReminder(false);
}

    return (
      <form className="Add-Form" onSubmit={onSubmit}>
        <div
          className="Form-Control"
          style={{
            ...myStyle.FormControl,
            // marginTop: "10px",
          }}
        >
          <label
            style={{
              ...myStyle.label,
              // display: "flex",
              // fontSize: "15px",
              // fontWeight: "700",
            }}
          >
            Task
          </label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(event) => setText(event.target.value)}
            style={{
              ...myStyle.myInputStyle,
              // padding: "5px 5px ",
              // borderRadius: "4px",
              // border: "1px solid",
              // width: "100%",
            }}
          />
        </div>

        <div
          className="Form-Control"
          style={{
            ...myStyle.FormControl,
            // marginTop: "10px",
          }}
        >
          <label
            style={{
              ...myStyle.label
              // display: "flex",
              // fontSize: "15px",
              // fontWeight: 700,
            }}
          >
            Day & Time
          </label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(event) => setDay(event.target.value)}
            style={{
              ...myStyle.myInputStyle,
              // padding: "5px 5px ",
              // borderRadius: "4px",
              // border: "1px solid",
              // width: "100%",
            }}
          />
        </div>

        <div
          className="Form-Control Form-Control-check"
          style={{
            ...myStyle.FormControl
            // marginTop: "18px",
          }}
        >
          <label
            style={{
              ...myStyle.label
              // style={{
              //   marginRight: "10rem",
              //   fontSize: "15px",
              //   fontWeight: 700,
            }}
          >
            Set Reminder
          </label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(event) => setReminder(event.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    ); }
        
export default AddTask;