// Root Layout: allows to modify the initial HTML returned by the server 

import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: 'Next13.4 Project',
  description: 'Showcases anime.js library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body> 'flex min-h-full flex-col' */}
        <body> 
          <Navbar />
          {children}
        </body>
    </html>
  );
}