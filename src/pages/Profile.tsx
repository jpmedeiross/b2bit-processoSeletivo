import { Button } from "../components/feats/button";
import { Input } from "../components/feats/input";
import { Label } from "../components/feats//label";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

export function Profile() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  function handleLogout() {
    setLoading(true);
    logout();
    setLoading(false);
    navigate("/");
  }

  return (
    <>
      <div className="h-screen bg-background-private flex flex-col justify-center items-center">
        <header
          className={"fixed top-0 bg-background w-full flex justify-end p-3"}
        >
          <Button
            className={"w-64 h-11 font-bold text-base"}
            onClick={handleLogout}
            disabled={loading}
          >
            {loading && <ReloadIcon className="mr-3 size-6 animate-spin" />}
            Logout
          </Button>
        </header>
        <div
          id={"container_profile"}
          className="bg-background self-center flex-col drop-shadow-profile rounded-2xl p-7.5 flex gap-5"
        >
          <div
            className={"flex flex-col justify-center items-center gap-2 mb-2.5"}
          >
            <p className={"font-semibold text-xs leading-3"}>Profile picture</p>
            <img
              className={"size-14 rounded"}
              src={user?.avatar.low}
              alt="Profile picture"
            />
          </div>
          <div className={"flex flex-col gap-2"}>
            <Label htmlFor={"user_name"} className={"text-sm leading-3"}>
              <span className={"font-normal"}>Your</span> Name
            </Label>
            <Input
              id={"user_name"}
              className={
                "h-11 w-74 border-0 text-sm leading-3 disabled:opacity-100 bg-input-disabled"
              }
              value={user?.name || ""}
              disabled={true}
            />
          </div>
          <div className={"flex flex-col gap-2"}>
            <Label htmlFor={"user_email"} className={"text-sm leading-3 "}>
              <span>
                <span className={"font-normal"}>Your</span> Email
              </span>
            </Label>
            <Input
              className={
                "h-11 w-74 border-0 text-sm leading-3 disabled:opacity-100 bg-input-disabled"
              }
              id={"user_email"}
              value={user?.email || ""}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}