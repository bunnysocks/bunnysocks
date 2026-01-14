import Link from "next/link";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-4 mb-20 pt-6">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-base text-gray-600 dark:text-gray-300">
        Hey, If u want to colab or just talk, here are my contacts {<br/>}
        ping me on <Link
          href="https://x.com/bunnysocksish"
          target="_blank"
          className="text-blue-500"
        >
        twitter
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:hemansakkthivelms14@gmail.com"
          className="text-blue-500"
        >
          hemansakkthivelms14@gmail.com
        </Link>
      </p>
    </div>
  );
}