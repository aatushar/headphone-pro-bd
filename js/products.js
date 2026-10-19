// Product list. Add / edit products here — no other file needs to change.
// image: main photo in /images (e.g. "images/airpods.jpg"). gallery: optional extra photos shown in the detail view.
// price: number in BDT, or leave "" to show "Message for price". oldPrice: optional crossed-out price.
// featured: true => shown in the highlighted section at the top.
// features: short bullet list. specs: [label, value] rows. warranty: text.
const PRODUCTS = [
  {
    id: "eq30", name: "Hoco EQ30 True Wireless Earbuds", category: "Earbuds", featured: true, badge: "Best Seller",
    price: 899, oldPrice: 1250,
    image: "images/hoco-eq30-eufonia-true-wireless-earbuds-with-case-included-4.webp",
    gallery: ["images/eq30-2026-05-06-69fb5efbe4d0f.jpg"],
    description: "Bluetooth 6.0 earbuds with faster pairing, lower latency and a more stable connection. Touch controls for music and calls, and a Hall switch that connects/disconnects automatically when you open or close the case. Lightweight ABS body for comfortable long wear.",
    features: ["Bluetooth 6.0", "10mm driver", "Up to 7 hours playback", "Touch control", "Auto connect (Hall switch)", "Charging case with carabiner"],
    specs: [
      ["Brand", "Hoco"], ["Model", "EQ30"], ["Bluetooth", "6.0"], ["Driver", "10mm"],
      ["Battery", "Case 300mAh, Buds 40mAh (each)"], ["Playback time", "Up to 7 hours"],
      ["Case size", "71 × 52 × 37 mm"], ["Weight", "68.5 g"], ["Colors", "Black, White"]
    ]
  },
  {
    id: "eq34-plus", name: "Hoco EQ34 Plus ANC+ENC TWS Earbuds", category: "Earbuds", badge: "New",
    price: "",
    image: "images/eq34-plus-03.jpg",
    gallery: ["images/eq34-plus-01.jpg", "images/eq34-plus-02.jpg"],
    description: "In-ear TWS headset with active noise cancellation and 4-mic ENC for clear calls, on Bluetooth 5.4.",
    features: ["Bluetooth 5.4", "ANC + ENC", "4-mic noise cancelling clear call", "13mm large dynamic coil", "Up to 7 hours single-headset battery"],
    specs: [["Brand", "Hoco"], ["Model", "EQ34 Plus"], ["Bluetooth", "5.4"], ["Driver", "13mm dynamic coil"], ["Noise cancelling", "ANC + 4-mic ENC"], ["Playback time", "7 hours (single headset)"], ["Color", "Black"]]
  },
  {
    id: "t3-pro", name: "T3 Pro True Wireless Earbuds", category: "Earbuds",
    price: "",
    image: "images/t3-pro-02.jpg",
    gallery: ["images/t3-pro-01.jpg"],
    description: "T3 Pro true wireless earbuds with charging case. Comes with a 6 months warranty.",
    features: ["True wireless stereo", "Charging case included"],
    specs: [["Model", "T3 Pro"], ["Color", "Black"]],
    warranty: "6 Months Warranty"
  },
  {
    id: "eq2", name: "Hoco EQ2 Wireless BT Headset", category: "Earbuds",
    price: "",
    image: "images/535985685_122124504962930472_399657795529775741_n.jpg",
    description: "TWS earbuds with Bluetooth 5.3, voice assistant activation and a 13mm large dynamic coil.",
    features: ["Bluetooth 5.3", "TWS true wireless stereo", "13mm large dynamic coil", "Voice assistant activation", "Up to 7 hours single-headset battery"],
    specs: [["Brand", "Hoco"], ["Model", "EQ2"], ["Bluetooth", "5.3"], ["Driver", "13mm dynamic coil"], ["Playback time", "7 hours (single headset)"]]
  },
  {
    id: "pb-hoco", name: "Hoco Power Bank with LED Display", category: "Accessories",
    price: "",
    image: "images/2c3f657842d1d8057ffd8e1670eda240.webp",
    description: "Slim power bank with a digital battery display and dual USB output. Message us for capacity and price."
  },
  {
    id: "sp-02", name: "3-in-1 Foldable Phone Holder with Bluetooth Speaker & Power Bank", category: "Speaker", badge: "New",
    price: 750, oldPrice: 1400,
    image: "images/fb7d30b0c39cb379d529b8aa0ed1d4c7.webp",
    description: "Foldable phone/tablet stand with built-in Bluetooth speaker and emergency power bank. Double-axis adjustment for height and angle.",
    features: ["Bluetooth 5.3 (~10 m range)", "1000mAh rechargeable battery", "6–8 hours playback", "Type-C charging", "Phone & tablet stand"],
    specs: [["Bluetooth", "5.3"], ["Battery", "1000mAh"], ["Playback time", "6–8 hours"], ["Charging", "Type-C"], ["Material", "ABS plastic"], ["Color", "Classic Black"], ["In the box", "Stand/speaker, USB cable, manual"]],
    warranty: "No warranty"
  },
  {
    id: "crystal-ball", name: "3D Crystal Ball Galaxy Night Lamp", category: "Gift",
    price: "",
    image: "images/515284612_122110178570930472_2093477594164308263_n.jpg",
    description: "Glass crystal ball with a laser-engraved galaxy and a warm LED wooden base. A nice gift and desk decoration."
  }
];
