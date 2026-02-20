"use client";

import PayButton from "../components/PayButton";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, clearCart } = useCart();

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "30px 20px" }}>
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 16 }}>
        Cart
      </h1>

      {items.length === 0 ? (
        <p style={{ opacity: 0.7 }}>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12 }}>
            {items.map((i) => (
              <div
                key={i.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 12,
                  padding: 14,
                  border: "1px solid rgba(0,0,0,0.10)",
                  borderRadius: 14,
                }}
              >
                <div>
                  <div style={{ fontWeight: 900 }}>{i.name}</div>
                  <div style={{ opacity: 0.75 }}>
                    ${i.price.toFixed(2)} each
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input
                    type="number"
                    min={1}
                    value={i.quantity}
                    onChange={(e) =>
                      updateQty(i.id, Math.max(1, Number(e.target.value || 1)))
                    }
                    style={{
                      width: 70,
                      padding: "8px 10px",
                      borderRadius: 10,
                      border: "1px solid rgba(0,0,0,0.15)",
                    }}
                  />
                  <button
                    onClick={() => removeItem(i.id)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: "1px solid rgba(0,0,0,0.15)",
                      background: "white",
                      cursor: "pointer",
                      fontWeight: 800,
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              Subtotal: ${subtotal.toFixed(2)}
            </div>

            <div style={{ marginTop: 12 }}>
              <button
                onClick={clearCart}
                style={{
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "white",
                  cursor: "pointer",
                  fontWeight: 800,
                }}
              >
                Clear cart
              </button>
            </div>

            <PayButton />
          </div>
        </>
      )}
    </main>
  );
}