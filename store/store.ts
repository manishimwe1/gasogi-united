import { create } from "zustand";

interface appState {
	isDeleteModelOPen: boolean;
	setDeleteModelOpen: (open: boolean) => void;

	isRenameModelOpen: boolean;
	setRenameModelOpen: (open: boolean) => void;

	fileId: string | null;
	setFileId: (fileId: string) => void;

	filename: string;
	setFilename: (filename: string) => void;
}

export const useAppStore = create<appState>()((set) => ({
	fileId: null,
	setFileId: (fileId: string) =>
		set((state) => ({ fileId })),

	filename: "",
	setFilename: (filename: string) =>
		set((state) => ({
			filename,
		})),
	isDeleteModelOPen: false,
	setDeleteModelOpen: (open) =>
		set((state) => ({ isDeleteModelOPen: open })),
	isRenameModelOpen: false,
	setRenameModelOpen: (open) =>
		set((state) => ({ isRenameModelOpen: open })),
}));
