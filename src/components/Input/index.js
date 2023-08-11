import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export default function Input({ name, type, placeholder, icon, height, width, button, style = {}, label, variant, value, handleValue, color = "primary", InputProps = {}, ...props }) {
    return (
        <TextField name={name} type={type} placeholder={placeholder} InputProps={{
            startAdornment: (
                icon ? <InputAdornment position="start">{icon}</InputAdornment> : ""
            ), endAdornment: (
                button ? <InputAdornment position="end">{button}</InputAdornment> : ""
            ),
            ...InputProps
        }} sx={{ height: height, width: width, ...style }} label={label} variant={variant} value={value} onChange={handleValue} color={color} {...props} />
    )
};