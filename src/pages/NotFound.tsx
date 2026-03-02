import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-muted-foreground mb-6">Page not found</p>
      <Link
        to="/"
        className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
      >
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
