import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { memo } from 'react';

export const Button = memo(
    <C extends React.ElementType>(props: ButtonProps<C, { component?: C }>) => {
        /* eslint-disable react/jsx-props-no-spreading */
        return <MuiButton {...props} />;
    }
);
