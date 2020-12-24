import MuiButton, {
    ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import { memo } from 'react';

export interface ButtonProps extends MuiButtonProps {}

export const Button = memo((props: ButtonProps) => {
    /* eslint-disable react/jsx-props-no-spreading */
    return <MuiButton {...props} />;
});
