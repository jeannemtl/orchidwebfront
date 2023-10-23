export default function Twitter({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm6.197 7.106l-8.72 10.076c-.147.164-.332.29-.545.364-.213.074-.443.104-.67.084-.226-.021-.446-.092-.643-.207-.197-.115-.372-.263-.517-.434L6.29 13.35c-.315-.315-.484-.745-.466-1.18s.176-.854.466-1.169c.29-.316.72-.485 1.154-.467s.854.176 1.169.466l1.498 1.498 7.59-6.915c.32-.292.76-.45 1.21-.42.446.03.858.228 1.14.55.28.32.438.75.408 1.19-.03.44-.228.853-.55 1.133z"
      />
    </svg>
  );
}
