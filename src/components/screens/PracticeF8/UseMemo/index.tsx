//tránh lặp lại logic không cần thiết
import { useState, useMemo, useRef } from "react";

function UseMemo() {
  const [price, setPrice] = useState<number>();
  const [name, setName] = useState<string>();
  const [products, setProducts] = useState<any>([]);
  const nameRef = useRef<any>();
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: Number(price),
      },
    ]);
    setName("");
    setPrice(0);
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const sum = products.reduce(
      (result: any, current: any) => result + current.price,
      0
    );
    return sum;
  }, [products]);

  console.log(products);
  return (
    <div style={{ padding: 20 }}>
      <input
        ref={nameRef}
        className="border-2"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      ></input>
      <input
        className="border-2"
        value={price}
        onChange={(e: any) => setPrice(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      <h3>Total: {total}</h3>
    </div>
  );
}

export default UseMemo;
