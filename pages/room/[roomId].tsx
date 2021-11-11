import {useRouter} from "next/router";

const Room = () => {
	const router = useRouter();
	const {roomId} = router.query;


}

export default Room;