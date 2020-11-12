import axios from "axios";

export default async function isAdmin({ next, router }) {
  if (!localStorage.getItem("jwt")) {
    return router.push({ name: "Login" });
  }

  const isAdminRes = await axios({
    method: "get",
    url: process.env.VUE_APP_API + "/auth/isAdmin",
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
  });

  if (!isAdminRes.data) {
    return router.push({ name: "Admin" });
  }

  return next();
}
