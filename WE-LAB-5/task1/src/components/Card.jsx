export function Card({ children, className = "" }) {
    return (
      <div className={`shadow-md rounded-lg border p-4 ${className}`}>
        {children}
      </div>
    );
  }
  