// app/page.tsx
import React from "react";
import FoodCard, { FoodItem } from "../components/FoodCard";

const foods: FoodItem[] = [
  {
    id: 1,
    name: "ผัดไทยกุ้งสด (Pad Thai)",
    category: "อาหารจานเดียว",
    price: 85,
    description:
      "เส้นจันท์เหนียวนุ่มผัดกับซอสมะขามสูตรเข้มข้น ใส่กุ้งแม่น้ำตัวโต เต้าหู้เหลือง ถั่วงอก และโรยหน้าด้วยถั่วลิสงคั่วหอมกรุ่น",
    imageUrl:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "ต้มยำกุ้งน้ำข้น (Tom Yum Goong)",
    category: "ประเภทต้ม / แกง",
    price: 150,
    description:
      "ซุปสมุนไพรไทยรสจัดจ้าน หอมกลิ่นข่า ตะไคร้ ใบมะกรูด ปรุงรสเปรี้ยวเผ็ดกลมกล่อม พร้อมกุ้งสดและเห็ดฟาง",
    imageUrl:
      "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "แกงเขียวหวานไก่ (Green Curry)",
    category: "ประเภทต้ม / แกง",
    price: 120,
    description:
      "พริกแกงเขียวหวานโขลกสดเคี่ยวกับหัวกะทิแตกมัน ใส่เนื้อสะโพกไก่นุ่ม มะเขือเปราะ พริกชี้ฟ้าแดง และใบโหระพา",
    imageUrl:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "ข้าวเหนียวมะม่วง (Mango Sticky Rice)",
    category: "ของหวาน",
    price: 95,
    description:
      "ข้าวเหนียวมูนกะทิสดรสหวานมัน ทานคู่กับมะม่วงน้ำดอกไม้สุกฉ่ำ ราดด้วยน้ำกะทิเข้มข้นและถั่วทองทอดกรอบ",
    imageUrl:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-4">
      <main className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">
            เมนูอาหารไทยยอดนิยม
          </h1>
          <p className="text-sm text-zinc-500">
            ตัวอย่างการส่งข้อมูลผ่าน Props ไปยัง Component (FoodCard)
          </p>
        </header>

        <section>
          {foods.map((item) => (
            <FoodCard key={item.id} food={item} />
          ))}
        </section>
      </main>
    </div>
  );
}