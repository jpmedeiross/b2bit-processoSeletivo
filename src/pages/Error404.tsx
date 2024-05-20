export function Error404() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <img
          className="mx-auto h-24 w-auto"
          src="/logo-b2bit.png"
          alt="Logo b2bit"
        />
        <h1 className="mt-6 text-3xl font-bold text-primary">
          Error <span className={"text-secondary font-bold underline"}>404</span>{" "}
          - Page Not Found
        </h1>
        <p className="mt-2 text-md text-primary">
          The page you are looking for does not exist.
        </p>
      </div>
    );
  }