import { getSession } from "next-auth/react";

export const requireAuth = async (context, cb) => {
  const session = await getSession(context);
  let isForm = false;
  if (session) {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/isForm/${session?.user.id}`)
      .then((newData) => newData.json())
      .then((data) => {
        isForm = data;
      });
  }

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else if (!isForm) {
    return {
      redirect: {
        destination: "/login/form",
        permanent: false,
      },
    };
  }
  return cb({ session });
};
