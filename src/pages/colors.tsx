import Link from "next/link";
import Layout from "../components/Layout";

// * #000000 Black
//  * #0099ff Blue
//  * #2b546a Dark Blue
//  * #30c8d6 Cyan
//  * #444444 Dark Gray
//  * #55dddd Light Blue
//  * #5876a3 Dark Blue
//  * #6fd0ee Light Blue
//  * #787878 Gray
//  * #7e7e7e Gray
//  * #87ceeb Light Blue
//  * #fafafa Light Gray
//  * #fffae9 Light Yellow
//  * #ffffff White

const colorCodes: { code: string, name?: string }[] = [
  { code: "#30c8d6", name: "Brand Cyan" },
  { code: "#55dddd", name: "Brand Cyan Light" },
  { code: "#2b546a", name: "Dark Cyan Drak" },
  { code: "#5876a3", name: "Dark Blue" },
  { code: "#0099ff", name: "Blue" },
  { code: "#6fd0ee", name: "Light Blue" },
  { code: "#87ceeb", name: "Sky Blue" },
  { code: "#000000", name: "Black" },
  { code: "#444444", name: "Dark Gray" },
  { code: "#7e7e7e", name: "Gray" },
  { code: "#fafafa", name: "Light Gray" },
  { code: "#fffae9", name: "Cream White" },
  { code: "#ffffff", name: "White" },
  { code: "#f38702", name: "Orange" },
  { code: "#e0245e", name: "Pink" },
];

const ColorsPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-brand-cyan pb-12">Hello Next.js 👋</h1>
    {colorCodes.map((colorCode) => (
      <div
        key={colorCode.code}
        style={{
          color: "white",
          border: "1px solid black",
          backgroundColor: colorCode.code,
          width: "800px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {colorCode.name}
      </div>
    ))}
  </Layout>
);

export default ColorsPage;
