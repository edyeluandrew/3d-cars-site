export default function Card({ title, children, className = '' }) {
  return (
    <div className={`reveal bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all ${className}`}>
      <h3 className="font-display text-2xl font-bold text-secondary mb-4">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
