import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

type TBearStoreState = {
	bears: number;
	increasePopulation: () => void;
	removeAllBears: () => void;
};

// il faudrait typer les donners dans le useBearStore pour le react typescript
export const useBearStore = create<TBearStoreState>()(
	devtools(
		(set) => ({
			bears: 0,
			increasePopulation: () =>
				set((state) => ({
					bears: state.bears + 1,
				})),
			removeAllBears: () => set({ bears: 0 }),
		}),
		{
			enabled: true,
		}
	)
);
