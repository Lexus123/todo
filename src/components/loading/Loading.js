import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import Card from '../ui/Card';

const Loading = () => {
	const theme = useSelector(state => state.themes.theme);

	const color = theme === "light" ? "#373737" : "#EEEEEE";

	return (
		<Card>
			<div className="flex h-full w-full flex-col items-center">
				<Loader
					type="TailSpin"
					color={color}
					height={100}
					width={100}
				/>
			</div>
		</Card>
	);
};

export default Loading;