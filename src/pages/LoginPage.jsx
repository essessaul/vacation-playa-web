import React, { useState } from "react";
import { Button, Card } from "../components/common/ui";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState("signin");
  const [form, setForm] = useState({ display_name:"", email:"", password:"", role:"owner" });
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    if (mode === "signin") {
      const result = await signIn(form.email, form.password);
      setMessage(result.error ? result.error.message : "SIGNED IN.");
    } else {
      const result = await signUp(form.email, form.password, form.role, form.display_name);
      setMessage(result.error ? result.error.message : "ACCOUNT CREATED. CHECK YOUR EMAIL.");
    }
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 620 }}>
        <Card>
          <div className="property-card">
            <div className="price-row" style={{ flexWrap: "wrap" }}>
              <h1 style={{ margin: 0, textTransform: "uppercase" }}>SIGN IN / SIGN UP</h1>
              <div className="inline">
                <Button variant={mode === "signin" ? "dark" : "light"} onClick={() => setMode("signin")}>SIGN IN</Button>
                <Button variant={mode === "signup" ? "dark" : "light"} onClick={() => setMode("signup")}>SIGN UP</Button>
              </div>
            </div>

            <div className="grid" style={{ marginTop: "1rem" }}>
              {mode === "signup" ? (
                <>
                  <input value={form.display_name} onChange={(e) => setForm((p) => ({ ...p, display_name: e.target.value }))} placeholder="DISPLAY NAME" />
                  <select value={form.role} onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}>
                    <option value="guest">GUEST</option>
                    <option value="owner">OWNER</option>
                    <option value="admin">ADMIN</option>
                  </select>
                </>
              ) : null}
              <input value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="EMAIL" />
              <input type="password" value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} placeholder="PASSWORD" />
              <Button onClick={handleSubmit}>{mode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"}</Button>
              {message ? <div className="notice">{message}</div> : null}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
