import { NextResponse, type NextRequest } from "next/server";
import { contactProjectSchema, getContactProjectErrors } from "../../../src/components/contact/ContactProjectModal/contactProjectSchema";
import { sendContactProposalConfirmationEmail } from "../../../src/lib/email/contactProposalEmail";
import { createSupabaseAdminClient } from "../../../src/lib/supabase/server";

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  const result = contactProjectSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Revise os dados enviados.",
        fieldErrors: getContactProjectErrors(result.error.issues),
      },
      { status: 422 },
    );
  }

  try {
    const supabase = createSupabaseAdminClient();
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
    const userAgent = request.headers.get("user-agent");

    const { error } = await supabase.from("contact_proposals").insert({
      name: result.data.name,
      email: result.data.email,
      whatsapp: result.data.whatsapp,
      questions: result.data.questions || null,
      project_proposal: result.data.projectProposal,
      user_agent: userAgent,
      ip_address: ipAddress,
    });

    if (error) {
      console.error("Failed to insert contact proposal", error);

      return NextResponse.json(
        { message: "Nao foi possivel registrar sua proposta agora." },
        { status: 500 },
      );
    }

    if (process.env.RESEND_API_KEY) {
      const emailResult = await sendContactProposalConfirmationEmail(result.data);

      if (emailResult.error) {
        console.error("Failed to send contact proposal confirmation email", emailResult.error);
      }
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact proposal route failed", error);

    return NextResponse.json(
      { message: "Nao foi possivel registrar sua proposta agora." },
      { status: 500 },
    );
  }
}
