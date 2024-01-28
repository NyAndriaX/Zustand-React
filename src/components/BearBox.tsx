import { useBearStore } from '../stores/bearStore';

export const BearBox = () => {
	// const bears = useBearStore(state => state.bears)
	// const increasePopulation = useBearStore(state => state.increasePopulation);
	// const removeAllBears = useBearStore(state => state.removeAllBears)
	const { bears, increasePopulation, removeAllBears,reset } = useBearStore();
	return (
		<div className="box">
			<h1>Bear Box</h1>
			<p>bears: {bears}</p>
			<div>
				<button onClick={increasePopulation}>add bear</button>{' '}
				<button onClick={removeAllBears}>remove all bear</button>
				<button onClick={reset}>Clear storage</button>
			</div>
		</div>
	);
};
