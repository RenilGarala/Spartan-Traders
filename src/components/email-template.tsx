import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  subject: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  fullName,
  subject,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Hello from, {fullName}!</h1>
      <h3>Subject: {subject}</h3>
      <h3>Email: {email}</h3>
      <h3>Message: {message}</h3>
    </div>
  );
}
