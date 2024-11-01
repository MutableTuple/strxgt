"use server";
import { createSignupMail } from "./data-service";
export async function signInAction(formdata) {
  await createSignupMail(formdata.get("email"));
}
