import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectHours({ createHours, createMinutes }) {
  const classes = useStyles();
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleChangeHour = (event) => {
    setHour(event.target.value);
  };
  const handleChangeMinutes = (event) => {
    setMinutes(event.target.value);
  };
  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label-one">Hora</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined-one"
          value={hour}
          onChange={handleChangeHour}
          label="Hora"
        >
          {createHours().map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label-two">Minutos</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined-two"
          value={minutes}
          onChange={handleChangeMinutes}
          label="Minutos"
        >
          {createMinutes().map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
