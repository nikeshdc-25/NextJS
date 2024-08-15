"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewPage = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-secondary"
      onClick={() => {
        router.push("/users");
      }}
    >
      Add User
    </button>
  );
};

export default NewPage;
