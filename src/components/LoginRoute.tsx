import { Navigate } from "react-router-dom";
import React from "react";

export function LoginRoute({ Component }: { Component: React.ComponentType }) {
  const authenticated = localStorage.getItem("access");
  return authenticated ? <Navigate to="/profile" replace /> : <Component />;
}