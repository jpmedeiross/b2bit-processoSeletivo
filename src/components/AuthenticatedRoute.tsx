import { Navigate } from "react-router-dom";
import React from "react";

export function AuthenticatedRoute({
  Component,
}: {
  Component: React.ComponentType;
}) {
  const authenticated = localStorage.getItem("access");
  return authenticated ? <Component /> : <Navigate to="/" replace />;
}