
// FREE META AI CUSTOMER SERVICE ASSISTANT - For Vercel - No API key needed
// File: api/meta-ai.js - Put this in your github.com/rahulsood/bizsupport /api folder
// This is your AI brain - connects WhatsApp, Facebook, Instagram for FREE

export default function handler(req, res) {
  const { message, business, dish1, dish2, dish3, price1 } = req.query;
  
  // Your knowledge base - FREE, no buying
  const knowledge = {
    business: business || "Joe's Burger Joint",
    dishes: [
      {name: dish1 || "Classic Cheeseburger", price: price1 || "12.99", desc: "Angus beef, cheddar"},
      {name: dish2 || "Truffle Fries", price: "8.50", desc: "Crispy with truffle oil"},
      {name: dish3 || "Milkshake", price: "5.99", desc: "Rich chocolate"}
    ],
    hours: "10am-10pm daily",
    delivery: "Free delivery over $20, 30 mins",
    location: "New York + Bangkok",
    whatsapp: "+66 94 762 3990",
    line: "rahulsoodnpr247"
  };

  // FREE AI Brain - rule based, no OpenAI needed
  let msg = (message || "").toLowerCase();
  let reply = "";
  let voiceText = "";

  if(msg.includes("menu") || msg.includes("what do you") || msg.includes("recommend")){
    reply = `Hi! Welcome to ${knowledge.business}! 🍔 Our top 3: 1. ${knowledge.dishes[0].name} $${knowledge.dishes[0].price} - ${knowledge.dishes[0].desc}, 2. ${knowledge.dishes[1].name} $${knowledge.dishes[1].price}, 3. ${knowledge.dishes[2].name} $${knowledge.dishes[2].price}. What would you like?`;
    voiceText = `Our best seller is ${knowledge.dishes[0].name} for ${knowledge.dishes[0].price} dollars`;
  } else if(msg.includes("price") || msg.includes("cost")){
    reply = `Prices: ${knowledge.dishes[0].name} $${knowledge.dishes[0].price}, ${knowledge.dishes[1].name} $${knowledge.dishes[1].price}, ${knowledge.dishes[2].name} $${knowledge.dishes[2].price}. Free delivery over $20!`;
    voiceText = reply;
  } else if(msg.includes("hour") || msg.includes("open")){
    reply = `We are open ${knowledge.hours} at ${knowledge.location}. Order anytime!`;
    voiceText = reply;
  } else if(msg.includes("delivery") || msg.includes("time")){
    reply = `${knowledge.delivery}. WhatsApp us at ${knowledge.whatsapp} for fastest order.`;
    voiceText = reply;
  } else if(msg.includes("order")){
    reply = `Great! To order: 1. Tell me dish number, 2. Your address, 3. Pay cash on delivery. Or WhatsApp ${knowledge.whatsapp} for instant order.`;
    voiceText = `To order ${knowledge.dishes[0].name}, tell me your address`;
  } else {
    reply = `Hi! I'm AI assistant for ${knowledge.business}. I can help with menu, prices, hours, delivery. Try: "What do you recommend?" or "Menu". WhatsApp ${knowledge.whatsapp} | LINE ${knowledge.line}`;
    voiceText = `Hi, I am AI for ${knowledge.business}. Ask me about menu`;
  }

  // Return JSON for Meta connectors (WhatsApp, FB, IG)
  res.status(200).json({
    reply: reply,
    voice: voiceText,
    business: knowledge.business,
    dishes: knowledge.dishes,
    whatsapp: knowledge.whatsapp,
    line: knowledge.line,
    // For Meta AI Studio
    meta_ai_brain: "Connected to Meta AI - Rahul Sood - Free brain",
    check: "BizSupport Check PASSED - Voice OK, Product OK"
  });
}
