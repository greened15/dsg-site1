import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1>Work With Daniel</h1>

      <p>
        Strategic legal counsel for athletes, creators, startups, and sports businesses.
      </p>

      <h2>Inquiry Type</h2>

      <ul>
        <li>Athlete / Professional Sports</li>
        <li>NIL / College Athletics</li>
        <li>Creator / Influencer</li>
        <li>Esports / Gaming</li>
        <li>Startup / Venture / Business</li>
      </ul>

      <h2>Contact Form</h2>

      <form>
        <p>Name</p>
        <input type="text" style={{ width: "100%", padding: "10px" }} />

        <p>Email</p>
        <input type="email" style={{ width: "100%", padding: "10px" }} />

        <p>Message</p>
        <textarea style={{ width: "100%", padding: "10px", height: "150px" }} />

        <br /><br />

        <button
          type="submit"
          style={{
            background: "#19c37d",
            border: "none",
            padding: "12px 20px",
            color: "black",
            cursor: "pointer"
          }}
        >
          Submit Inquiry
        </button>
      </form>

      <p style={{ marginTop: "40px", color: "#9aa7a2" }}>
        All inquiries are reviewed individually based on relevance and capacity.
      </p>
    </Layout>
  );
}