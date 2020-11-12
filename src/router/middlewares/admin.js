export default function admin({ next, router }) {
  if (!localStorage.getItem("jwt")) {
    return router.push({ name: "Login" });
  }

  return next();
}
