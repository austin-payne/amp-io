import { createContext, useContext, useMemo, memo } from 'react';
import { useAsync } from 'react-use';
import { fetchUser } from '../fetchUser';
import { User } from '../user';

type AuthContextLoading = {
    ready: false;
    user?: undefined;
};

type AuthContextReady = {
    ready: true;
    user?: User;
};

type AuthContext = AuthContextLoading | AuthContextReady;

const AuthContext = createContext<AuthContext>({
    ready: false,
});
AuthContext.displayName = 'AuthContext';

export const useAuth = () => useContext(AuthContext);

export type AuthProviderProps = {
    children: React.ReactNode;
    userRoute: string;
};

export const AuthProvider = memo(
    ({ children, userRoute }: AuthProviderProps) => {
        const { loading, value: user } = useAsync(
            async () => await fetchUser(userRoute),
            [userRoute]
        );

        const context = useMemo<AuthContext>(
            () =>
                loading
                    ? { ready: false }
                    : {
                          ready: true,
                          user,
                      },
            [loading, user]
        );

        return (
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        );
    }
);
