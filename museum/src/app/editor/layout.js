// URL: /editor


import Toolbar from "../components/Toolbar";

export default function EditorLayout({ children }) {
  return (
    <html lang="en">
      {/* <body> 'flex min-h-full flex-col' */}
        <body> 
          <Toolbar />
          {children}
        </body>
    </html>
  );
}