import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-28">Welcome to the Whisper chat!</h1>
      <button className="border-solid border-2 p-2 rounded-md hover:bg-black hover:text-white mt-4">
        <Link href="/auth/login">Lets whisping</Link>
      </button>
    </div>
  );
}
