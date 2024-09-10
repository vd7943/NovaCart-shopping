import Contact from "../model/contact.model.js";

export const contactUS = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({
      name: name,
      email: email,
      message: message,
    });
    await contact.save();
    res.status(201).json({
      message: "Contact Received",
      contact: {
        _id: contact._id,
        name: contact.name,
        email: contact.email,
        message: contact.message,
      },
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
