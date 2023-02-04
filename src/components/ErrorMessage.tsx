import Alert from "@mui/material/Alert";
import { FC } from "react";

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <Alert severity="error">{message}</Alert>;
};

interface ErrorMessageProps {
  message: string;
}

export default ErrorMessage;
