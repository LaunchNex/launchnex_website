import Callout from "./Callout";
import { Card, CardGrid } from "./Card";
import { Stat, StatGrid } from "./Stat";
import { Steps, Step } from "./Steps";
import Table from "./Table";
import CheckList from "./CheckList";

function slugify(text) {
	return String(text)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

function extractText(children) {
	if (typeof children === "string") return children;
	if (Array.isArray(children)) return children.map(extractText).join("");
	if (children?.props?.children) return extractText(children.props.children);
	return "";
}

function H2({ children }) {
	const id = slugify(extractText(children));
	return <h2 id={id}>{children}</h2>;
}

function H3({ children }) {
	const id = slugify(extractText(children));
	return <h3 id={id}>{children}</h3>;
}

const mdxComponents = {
	Callout,
	Card,
	CardGrid,
	Stat,
	StatGrid,
	Steps,
	Step,
	CheckList,
	table: Table,
	h2: H2,
	h3: H3,
};

export default mdxComponents;
