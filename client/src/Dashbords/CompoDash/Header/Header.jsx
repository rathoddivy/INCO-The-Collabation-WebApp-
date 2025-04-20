const Header = ({ name }) => {
    return (
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            {name ? `Welcome, ${name}!` : 'Welcome, Influencer!'}
          </h1>
          <p className="text-gray-500">Here's an overview of your campaigns and messages.</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/40?u=me"
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
          <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  