import Link from "next/link";
import React from "react";

const AuthLinks = () => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="ml-5">Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
