import { supabase } from "./supabase";

export async function createSignupMail(email) {
  // Check if the email already exists in the database
  const { data: existingEmails, error: checkError } = await supabase
    .from("signedup_user_emails")
    .select("*")
    .eq("email", email);

  if (checkError) {
    console.error("Error checking email:", checkError);
    return { success: false, error: checkError.message };
  }

  // If the email exists, return an error
  if (existingEmails.length > 0) {
    return { success: false, error: "you're already registered 🥳👍." };
  }

  // If the email does not exist, proceed to insert it
  const { data, error } = await supabase
    .from("signedup_user_emails")
    .insert([{ email }])
    .select();

  if (error) {
    console.error("Error inserting email:", error);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
