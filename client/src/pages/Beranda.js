import React, { useContext } from "react";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import pages
import BerandaAdmin from "./BerandaAdmin";
import BerandaUser from "./BerandaUser";
import WrongUser from "./WrongUser";

export default function Beranda() {
  const [state] = useContext(AppContext);
  //   console.log("DataStateLevelUser: ", state.user.level);
  return (
    <div>
      {state.user.level == "Admin" ? (
        <>
          <BerandaAdmin />
        </>
      ) : state.user.level == "User" ? (
        <>
          <BerandaUser />
        </>
      ) : (
        <>
          <WrongUser />
        </>
      )}
    </div>
  );
}
