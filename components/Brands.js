import Image from "next/image";
import React from "react";
import Shopee from "../public/Shopee.svg";

export default function Brands({ img = Shopee }) {
	return (
		<div className="flex rounded-xl bg-white h-auto w-auto items-center justify-content">
			<Image src={img} height="140" width="200" className="rounded-lg" />
		</div>
	);
}
