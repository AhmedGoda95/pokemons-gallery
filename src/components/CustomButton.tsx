import Button from "@mui/material/Button";
import { FC, ReactElement } from "react";

const CustomButton: FC<CustomButtonProps> = ({
  handleClick,
  Icon = null,
  disabled = false,
  title,
}) => {
  return (
    <Button
      variant="contained"
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(8),
      })}
      onClick={handleClick}
      disabled={disabled}
      startIcon={Icon ?? ""}
    >
      {title}
    </Button>
  );
};

interface CustomButtonProps {
  handleClick: (...args: any[]) => any;
  Icon?: ReactElement | null;
  disabled?: boolean;
  title: string;
}

export default CustomButton;
