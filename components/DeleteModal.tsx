"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { db, storage } from "@/firebase";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import toast from "react-hot-toast";

export function DeleModal() {
	const [
		isDeleteModelOPen,
		setDeleteModelOpen,
		fileId,
		setFileId,
	] = useAppStore((state) => [
		state.isDeleteModelOPen,
		state.setDeleteModelOpen,
		state.fileId,
		state.setFileId,
	]);
	const { user } = useUser();
	const deleteFile = async () => {
		if (!user || !fileId) return;

		const toastId = toast.loading("Deleting...");

		const fileRef = ref(
			storage,
			`users/${user.id}/files/${fileId}`,
		);
		try {
			await deleteObject(fileRef).then(async () => {
				console.log(">>>Deleted File");
				deleteDoc(
					doc(
						db,
						"users",
						user.id,
						"files",
						fileId,
					),
				)
					.then(() => {
						console.log(
							"DELETED SUCCESSFULLY!",
						);
						toast.success(
							"Deleted successfuly",
							{
								id: toastId,
							},
						);
					})
					.finally(() => {
						setDeleteModelOpen(false);
					});
			});
		} catch (error) {
			toast.error("Ooops!...something went worng", {
				id: toastId,
			});
			console.log(
				"Ooops!...something went worng",
				error,
				setDeleteModelOpen(false),
			);
		}
	};
	return (
		<Dialog
			open={isDeleteModelOPen}
			onOpenChange={(isOpen) => {
				setDeleteModelOpen(isOpen);
			}}>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>
						You sure you want to delete?
					</DialogTitle>
					<DialogDescription>
						This action can not be undone. Tis
						will permanently delete your file!
					</DialogDescription>
				</DialogHeader>
				<div className='flex py-3 space-x-2'>
					<Button
						onClick={() =>
							setDeleteModelOpen(false)
						}
						variant='ghost'
						size='sm'
						className='px-3 flex-1'>
						<span className='sr-only'>
							Cancel
						</span>
						<span>Cancel</span>
					</Button>
					<Button
						onClick={() => deleteFile()}
						variant='destructive'
						size='sm'
						className='px-3 flex-1'>
						<span className='sr-only'>
							Delete
						</span>
						<span>Delete</span>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
