import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  await mongoose.connect(
    "mongodb+srv://Sunil:npyZO4sqdoGOsFnO@cluster0.x9grnfl.mongodb.net/"
  );
}
