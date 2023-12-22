"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useAppStore } from "@/store/store";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";

export function RenameModal() {
	const [input, setInput] = useState("");
	const [
		isRenameModelOPen,
		setRenameModelOpen,
		fileId,
		setFileId,
		filename,
	] = useAppStore((state) => [
		state.isRenameModelOpen,
		state.setRenameModelOpen,
		state.fileId,
		state.setFileId,
		state.filename,
	]);
	const { user } = useUser();

	const renameFile = async () => {
		if (!user || !fileId) return;

		const toastId = toast.loading("Renaming...");
		console.log(filename);

		await updateDoc(
			doc(db, "users", user.id, "files", fileId),
			{
				filename: input,
			},
		);
		toast.success("Renamed successfully", {
			id: toastId,
		});
		setInput("");
		setRenameModelOpen(false);
	};
	return (
		<Dialog
			open={isRenameModelOPen}
			onOpenChange={(isOpen) =>
				setRenameModelOpen(isOpen)
			}>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>
						Rename The File
					</DialogTitle>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<div className='grid flex-1 gap-2'>
						<Input
							id='link'
							defaultValue={filename}
							onChange={(e) =>
								setInput(e.target.value)
							}
							onKeyDownCapture={(e) => {
								if (e.key === "Enter") {
									renameFile();
								}
							}}
						/>
					</div>
					<Button
						type='submit'
						size='sm'
						className='px-3'>
						<span className='sr-only'>
							Copy
						</span>
						<Copy className='h-4 w-4' />
					</Button>
				</div>
				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<div className='flex gap-3'>
							<Button
								onClick={() =>
									setRenameModelOpen(
										false,
									)
								}
								size='sm'
								variant='ghost'
								className='px-3'>
								<span className='sr-only'>
									Cancel
								</span>
								<span>Cancel</span>
							</Button>
							<Button
								onClick={() => renameFile()}
								size='sm'
								className='px-3'>
								<span className='sr-only'>
									Rename
								</span>
								<span>Rename</span>
							</Button>
						</div>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
