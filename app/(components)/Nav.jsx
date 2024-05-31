import Link from "next/link";
import { getServerSession } from "next-auth";


const Nav = async () => {

  return (
    <header className="bg-slate-700 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div><h2 className="font-semibold hover:text-sky-200">Helio Sal Corporation</h2></div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Nav;