import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { forwardRef, memo } from 'react';

type NextLinkComposedProps = NextLinkProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
    (props, ref) => {
        const {
            as,
            href,
            replace,
            scroll,
            passHref,
            shallow,
            prefetch,
            ...other
        } = props;

        return (
            <NextLink
                href={href}
                prefetch={prefetch}
                as={as}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                passHref={passHref}
            >
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a ref={ref} {...other} />
            </NextLink>
        );
    }
);

type LinkPropsBase = {
    activeClassName?: string;
    ref?: React.Ref<HTMLAnchorElement>;
    naked?: boolean;
};

type LinkProps = LinkPropsBase &
    NextLinkComposedProps &
    Omit<MuiLinkProps, 'href' | 'ref'>;

export const Link = memo(
    forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
        const {
            href,
            activeClassName = 'active',
            className: classNameProps,
            naked,
            ...other
        } = props;

        const router = useRouter();
        const pathname = typeof href === 'string' ? href : href.pathname;
        const className = clsx(classNameProps, {
            [activeClassName]: router.pathname === pathname && activeClassName,
        });

        if (naked) {
            return (
                <NextLinkComposed
                    className={className}
                    ref={ref}
                    href={href}
                    {...other}
                />
            );
        }

        return (
            <MuiLink
                component={NextLinkComposed}
                className={className}
                href={pathname ?? undefined}
                ref={ref}
                {...other}
            />
        );
    })
);
