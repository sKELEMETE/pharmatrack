function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "10%",
        padding: "1rem 0",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        color: "#6c757d",
        fontSize: "0.9rem",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.05)",
        bottom: 0,
        zIndex: 1000,
      }}
    >
      &copy; {new Date().getFullYear()} PharmaTrack. All rights reserved.
    </div>
  );
}

export default Footer;
