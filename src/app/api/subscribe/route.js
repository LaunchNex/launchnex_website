import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
	try {
		const { email } = await request.json();

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
		}

		const { error } = await supabase
			.from("subscribers")
			.insert([{ email }]);

		if (error) {
			if (error.code === "23505") {
				return NextResponse.json({ error: "You're already subscribed!" }, { status: 409 });
			}
			throw error;
		}

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Subscribe error:", err);
		return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
	}
}
