import { User } from './user';

export const fetchUser = async (
    userRoute: string,
    cookie = ''
): Promise<User | undefined> => {
    console.log('starting fetch user');
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
    console.log('finished fetching user');

    if (!res.ok) {
        console.log('res not ok');
        console.log(await res.json());
        return;
    }
    console.log('awaiting to json');
    const json: unknown = await res.json();
    console.log('finished to json');
    return json as User;
};
