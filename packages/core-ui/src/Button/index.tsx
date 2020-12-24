import MuiButton, {
    ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import React, { memo } from 'react';

export interface ButtonProps extends MuiButtonProps {}

export const Button = memo((props: ButtonProps) => {
    return <MuiButton {...props} />;
});
