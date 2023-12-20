"use client";

import { db, storage } from "@/firebase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import {
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import { useState } from "react";
import Dropzone from "react-dropzone";

const DropeZOne = () => {
	const { isLoaded, isSignedIn, user } = useUser();
	const [loading, setLoading] = useState(false);
	const onDrop = (acceptedFiles: File[]) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onabort = () =>
				console.log("file reader was aborted");
			reader.onerror = () =>
				console.log("file reader has failed");
			reader.onload = async () => {
				await uploadPost(file);
			};
			reader.readAsArrayBuffer(file);
		});
	};

	const uploadPost = async (selectFile: File) => {
		console.log(">>>STARTING UPLOADING");
		if (loading) return console.log(loading);
		if (!user) return;

		setLoading(true);
		const docRef = await addDoc(
			collection(db, "users", user.id, "files"),
			{
				userId: user.id,
				fileName: selectFile.name,
				fullName: user.fullName,
				profileImg: user.imageUrl,
				timestamp: serverTimestamp(),
				type: selectFile.type,
				size: selectFile.size,
			},
		);
		console.log("starting to put in storage....");

		const imageUrl = ref(
			storage,
			`users/${user.id}/files/${docRef.id}`,
		);
		uploadBytes(imageUrl, selectFile).then(
			async (snapshot) => {
				const downloadUrl = await getDownloadURL(
					imageUrl,
				);

				await updateDoc(
					doc(
						db,
						"users",
						user.id,
						"files",
						docRef.id,
					),
					{
						downloadUrl: downloadUrl,
					},
				);
				console.log(">>>DONE....");
				setLoading(false);
			},
		);
	};

	const maxSize = 20971520;
	return (
		<Dropzone onDrop={onDrop}>
			{({
				getRootProps,
				getInputProps,
				isDragActive,
				isDragReject,
				fileRejections,
			}) => {
				const isFileTooLarge =
					fileRejections.length > 0 &&
					fileRejections.length > maxSize;
				return (
					<section className='ml-4 mt-10 w-full md:w-[50%] flex justify-center'>
						<div
							{...getRootProps()}
							className={cn(
								"w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
								isDragActive
									? "bg-blue-500 text-white animate-pulse"
									: "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400",
							)}>
							<input {...getInputProps()} />
							{isDragActive &&
								"click here or drag a file to upload!."}
							{isDragActive &&
								isDragReject &&
								"Drop to upload this file"}
							{isDragReject &&
								"File type not accepted, sorry!"}
							{isFileTooLarge && (
								<div className='text-red-500 ml-2'>
									file is too large
								</div>
							)}
							<p>here</p>
						</div>
					</section>
				);
			}}
		</Dropzone>
	);
};

export default DropeZOne;
