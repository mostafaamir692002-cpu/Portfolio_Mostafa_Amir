/* ============================================================
   DATA · DISCIPLINES (operating modes) — Product Builder focus.
   Bilingual english and Arabic (Egyptian colloquial refined).
   ============================================================ */
(function (MOS) {
  "use strict";

  MOS.data = MOS.data || {};

  MOS.data.MODES = [
    {
      t: "Product Strategy & Positioning",
      arT: "استراتيجية وتموضع المنتجات",
      d: "Before any design starts, I work out what the product should be, how it's priced, and who it's for — so it's built around real demand instead of guesses.",
      ar: "قبل ما أي تصميم يبدأ، بحدّد المنتج هيكون إيه، هيتسعّر إزاي، ومين جمهوره — عشان يتبني على طلب حقيقي مش على تخمين.",
      m: [["Market Discovery", 92], ["Pricing Architecture", 88], ["Product Thinking", 95]]
    },
    {
      t: "Commerce Architecture",
      arT: "هندسة منصات التجارة",
      d: "I build the store end to end — how products are organized, how the cart and checkout behave, and how payments connect — so buying is simple and nothing falls through the cracks.",
      ar: "ببني المتجر من الأول للآخر — تنظيم المنتجات، سلوك السلة والدفع، وربط المدفوعات — عشان الشراء يبقى بسيط ومفيش حاجة بتضيع في النص.",
      m: [["Catalog Design", 94], ["Conversion UX", 91], ["Payment Flow", 90]]
    },
    {
      t: "Business Workflows & Logistics",
      arT: "تدفقات العمل واللوجستيات",
      d: "I map and fix the operations behind the product — warehouse dispatch, courier handoffs, and order tracking — so the day-to-day runs without manual firefighting.",
      ar: "بفهم وأظبط العمليات اللي ورا المنتج — توزيع المخزن، تسليم المناديب، وتتبّع الطلبات — عشان الشغل اليومي يمشي من غير لخبطة يدوية.",
      m: [["Workflow Design", 90], ["Fulfillment Logic", 92], ["Operational Audit", 86]]
    },
    {
      t: "Growth Strategy & Go-to-Market",
      arT: "استراتيجية النمو والإطلاق للسوق",
      d: "I plan the launch — pricing, channels, messaging, and the path from first visit to purchase — so a finished product actually reaches people and sells.",
      ar: "بخطّط الإطلاق — التسعير، القنوات، الرسائل، والطريق من أول زيارة للشراء — عشان المنتج الجاهز يوصل للناس ويبيع فعلاً.",
      m: [["Launch Planning", 92], ["Channel Strategy", 89], ["Conversion Funnels", 94]]
    },
    {
      t: "Brand Systems & Identity",
      arT: "أنظمة وهوية العلامة التجارية",
      d: "I build the visual side so it stays consistent — a clear logo, colors, type, and components that hold up across packaging, print, and the website.",
      ar: "ببني الجانب البصري بحيث يفضل متّسق — شعار وألوان وخطوط ومكوّنات واضحة تشتغل على التغليف والمطبوعات والموقع.",
      m: [["Visual Systems", 90], ["Brand Consistency", 93], ["Packaging Design", 85]]
    }
  ];
})(window.MOS = window.MOS || {});
