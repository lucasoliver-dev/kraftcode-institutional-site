import { redirect } from "next/navigation";
import { routes } from "../../src/config/routes";

export default function Sobre() {
  redirect(routes.about);
}
