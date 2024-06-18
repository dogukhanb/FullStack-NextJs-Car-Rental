import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URL);

mongoose.Promise = global.Promise;

// sema olustur

const VehiclesSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  color: String,
  mileage: Number,
  fuelType: String,
  transmission: String,
  condition: String,
  imageUrl: String,
});
// model olustur

const Vehicle =
  mongoose.models?.Vehicle || mongoose.model("Vehicle", VehiclesSchema);

export default Vehicle;
