import React, { useEffect } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import { setCampaignRegulation } from "../store/slicers/newCampaignSlice";
import { useDispatch } from "react-redux";

const converter = new Showdown.Converter({
	tables: true,
	simplifiedAutoLink: true,
	strikethrough: true,
	tasklists: true,
});

export function FidelityMarkdown() {
	const dispatch = useDispatch();
	const [value, setValue] = React.useState(
		"Crie um regulamento para seu programa de fidelidade."
	);
	const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
		"write"
	);

	useEffect(() => {
		dispatch(setCampaignRegulation(value));
	}, [value]);

	return (
		<div>
			<ReactMde
				value={value}
				onChange={setValue}
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
				generateMarkdownPreview={(markdown) =>
					Promise.resolve(converter.makeHtml(markdown))
				}
			/>
		</div>
	);
}
