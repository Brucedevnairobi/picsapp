"use client";

export default function Page() {
  return (
    <button
      onClick={async () => {
        await fetch("/api/trigger-hello", { method: "POST" });
        alert("Event sent!");
      }}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Trigger Inngest
    </button>
  );
}
