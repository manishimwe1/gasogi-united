"use client";

import { FileType } from "@/typing";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./Columns";
import { useUser } from "@clerk/nextjs";
import { useCollection } from "react-firebase-hooks/firestore";
import {
	collection,
	orderBy,
	query,
} from "firebase/firestore";
import { db } from "@/firebase";
import SkeletonLoder from "../SkeletonLoder";
import { Skeleton } from "@/components/ui/skeleton";

const TableWrapper = ({
	skeletonLoader,
}: {
	skeletonLoader: FileType[];
}) => {
	const { user } = useUser();
	const [initialFiles, setInitialFiles] = useState<
		FileType[]
	>([]);
	const [sort, setSort] = useState<"asc" | "desc">(
		"desc",
	);
	const [docs, loading, error] = useCollection(
		user &&
			query(
				collection(db, "users", user.id, "files"),
				orderBy("timestamp", sort),
			),
	);
	useEffect(() => {
		if (!docs) return;
		const files = docs.docs.map((doc) => ({
			id: doc.id,
			filename: doc.data().filename || doc.id,
			fullName: doc.data().fullName,
			timestamp:
				new Date(
					doc.data().timestamp?.seconds * 1000,
				) || undefined,
			downloadUrl: doc.data().downloadUrl,
			type: doc.data().type,
			size: doc.data().size,
		}));
		setInitialFiles(files);
	}, [docs]);
	if (docs?.docs.length === undefined) {
		return (
			<SkeletonLoder
				skeletonLoader={skeletonLoader}
			/>
		); ///loading
	}
	return (
		<div className='flex flex-col space-y-5 pb-10'>
			<Button
				className='ml-auto w-fit'
				variant={"outline"}
				onClick={() =>
					setSort(
						sort === "desc" ? "asc" : "desc",
					)
				}>
				Sort by{" "}
				{sort === "desc" ? "Newest" : "Oldest"}
			</Button>
			<DataTable
				columns={columns}
				data={initialFiles}
			/>
		</div>
	);
};

export default TableWrapper;
