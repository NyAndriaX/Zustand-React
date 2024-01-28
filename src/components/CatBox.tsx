import { useCatStore } from "../stores/catStore";

const CatBox = () => {
	const bigCats = useCatStore((state) => state.cats.bigCats);
	const smallCats = useCatStore((state) => state.cats.smallCats);
	const increaseBigCats = useCatStore((state) => state.increaseBigCats);
	const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);
	const summary = useCatStore((state) => state.summary);
  console.log(summary());
	return (
		<div className="box">
			<h1>Cat box</h1>
			<p>big cat:{bigCats}</p>
			<p>small cats:{smallCats}</p>
			{/* <p>{summary()}</p> */}
			<div>
				<button onClick={increaseBigCats}>add big cats</button>
				<button onClick={increaseSmallCats}>add small cats</button>
			</div>
		</div>
	);
};

export default CatBox;
