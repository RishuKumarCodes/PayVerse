import Bank from "../Models/bankModel.js";
import mongoose from "mongoose";



const getBalance = async (req, res) => {


    try {

        const { userId } = req.user;
        const account = await Bank.findOne({ userId });

        if (!account) {
            return res.status(400).json({ message: "Account not found" });
        }

        const balance = Number(account.balance.toFixed(2));

        res.send({ balance: balance });

    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Internal Server error" });
    }


}

const transferMoney = async (req, res) => {
    const { senderId, receiverId, amount } = req.body;
    const { userId } = req.user;

    if (!senderId || !receiverId || !amount) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (String(senderId) !== String(userId)) {
        return res.status(403).json({ message: "Unauthorized transfer attempt" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const sender = await Bank.findOne({ userId: senderId });
        const receiver = await Bank.findOne({ userId: receiverId });

        if (!sender || !receiver) {
            await session.abortTransaction();
            return res.status(404).json({ message: "Sender or receiver not found" });
        }

        if (amount > sender.balance) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient Balance" });
        }

        // Perform transaction
        sender.balance -= amount;
        receiver.balance += amount;

        await sender.save({ session });
        await receiver.save({ session });

        await session.commitTransaction();
        return res.status(200).json({ message: "Transaction successful" });

    } catch (error) {
        console.error(error);
        await session.abortTransaction();
        return res.status(500).json({ message: "Internal Server Error" });
    } finally {
        session.endSession();
    }
};



export { getBalance,transferMoney };