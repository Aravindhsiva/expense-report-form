import React from "react";
import { useFirebaseAuth, SIGNIN_PROVIDERS } from "use-firebase-auth";

let i = 0;
// PDF REFERENCE
// https://codesandbox.io/s/react-pdf-demo-i1ted?from-embed=&file=/src/MovieList.jsx
function App() {
  const { user, loading, error, signOut } = useFirebaseAuth();
  const { signInWithProvider } = useFirebaseAuth();

  console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <img src={user.photoURL} />
          <span>Welcome {user.displayName}</span>
          <div className="mt-3 text-center">
            <button onClick={() => signOut()} className="btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      ) : loading ? (
        `Loading...`
      ) : (
        <>
          {error && (
            <div className="mb-4 text-red-600 text-base text-center">
              {error.message}
            </div>
          )}
          <button
            onClick={() => signInWithProvider(SIGNIN_PROVIDERS.GOOGLE)}
            className="btn btn-primary"
          >
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
}

export default App;
