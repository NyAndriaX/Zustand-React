import CatBox from './components/CatBox';
import CatBox2 from './components/CatBox2';
import CatController from './components/CatController';
import { BearBox } from './components/BearBox';
import './App.css';

function App() {
	return (
		<div className="container">
			<h1>Zustand</h1>
			<div>
				<BearBox />
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
				<CatBox />
				<CatBox2 />
				<CatController />
			</div>
		</div>
	);
}

export default App;
