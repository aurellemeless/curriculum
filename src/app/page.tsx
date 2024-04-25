import CV from '~/app/components/cv';
import { DUMMY_DATA } from '~/app/constants/dummy';

export default function Home() {
	return (
		<main>
			<CV {...DUMMY_DATA} />
		</main>
	);
}
