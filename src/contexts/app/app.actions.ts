import { db } from "../../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ActionNames, Dispatch } from "contexts/types";
import { toast } from "react-toastify";
import { toastRequestOpts } from "constants/toast";

export const setEmail = async (email: string, dispatch: Dispatch) => {
  dispatch({ type: ActionNames.SET_EMAIL_START });

  const sanitized = email.toLowerCase().trim();

  const user = doc(db, `users/${sanitized}`);
  const docSnap = await getDoc(user);
  const userAlreadyExists = docSnap.data() !== undefined;

  const id = toast.loading("Enregistrement...");

  await setDoc(doc(db, "users", sanitized), {
    email: sanitized,
    createdAt: new Date().toLocaleString("fr-FR"),
  });
  const cityRef = doc(db, "users", sanitized);

  if (userAlreadyExists) {
    toast.update(id, {
      ...toastRequestOpts,
      render: "Vous êtes déjà inscrit !",
      type: "error",
    });

    return dispatch({ type: ActionNames.SET_EMAIL_REJECTED });
  }

  if (cityRef.id) {
    toast.update(id, {
      ...toastRequestOpts,
      render: "Enregistrement confirmé",
      type: "success",
    });
    window.scrollTo(0, 0);

    return dispatch({ type: ActionNames.SET_EMAIL_RESOLVED });
  }

  toast.update(id, {
    ...toastRequestOpts,
    render: "Oups, une erreur s'est produite...",
    type: "error",
  });

  dispatch({ type: ActionNames.SET_EMAIL_REJECTED });
};
