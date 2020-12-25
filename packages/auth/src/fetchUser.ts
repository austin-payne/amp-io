import { User } from './user';

export const fetchUser = async (
    userRoute: string,
    cookie = ''
): Promise<User | undefined> => {
    const res = await fetch(
        userRoute,
        cookie
            ? {
                  headers: {
                      cookie,
                  },
              }
            : {}
    );

    if (!res.ok) {
        return;
    }

    const json: unknown = await res.json();
    return json as User;
};
