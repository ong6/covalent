import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function SavingsBar() {
	return (
		<div className="flex flex-col w-full space-y-4">
			<div className="text-center font-bold text-3xl">Build your savings</div>
			<div className="flex flex-row justify-between w-full bg-white rounded-xl p-4">
				<div className="flex flex-col justify-center justify-items-center ">
					<div className="font-semibold text-xl">Silver Tier</div>
					<div className="font-base text-lg">2000</div>
				</div>
				<div className="my-auto">
					<Button colorScheme="teal">My Rewards</Button>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center py-8 relative">
				<div className="ring-4 ring-purple-500 ring-inset rounded-full w-40 h-40 justify-center"></div>
				<div className="absolute bg-[#EEE2DC]  h-30 inset-28 bottom-0 whitespace-pre">
					{"         $0          28 Feb           $100"}
				</div>
			</div>
		</div>
	);
}
