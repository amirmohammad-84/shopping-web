import { useRouter } from "next/navigation";
import { removeLoginToken } from "../../helpers/auth";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../../store/auth";

const UserInfo = () => {
    const user = useAppSelector(selectUser) as { name?: string }; // 👈 تعریف دستی نوع با name
    const router = useRouter();

    const logoutHandler = async () => {
        await removeLoginToken();
        router.push('/');
    };

    return (
        <>
            <span>username: </span>
            <h2>{user?.name ?? 'کاربر ناشناس'}</h2>

            <button onClick={logoutHandler}>logout</button>
        </>
    );
};

export default UserInfo;
