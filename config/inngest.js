import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/user";
import Order from "@/models/Order";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "AccurateDistributer-next" });

export const SyncUserCreateion = inngest.createFunction(
    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async ({ event, step }) => {
        const {id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name +' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    },
)

//update using inngest funtion

export const SyncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    async({event})=>{
        const {id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id:id,
            email:email_addresses[0].email_address,
            name: first_name +' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

//inngest funtion to delete from db
export const SyncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async({event})=>{
        const {id} = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)


//order order manage
export const createUserOrder = inngest.createFunction(
    {
        id: "create-user-order",
        batchEvents:{
            maxSize: 5,
            timeout: '5s'
        }
    },
    {event: 'order/created'},
    async({events})=>{
        const orders = events.map((event) => {
            return{
                userId: event.data.userId,
                items: event.data.items,
                amount: event.data.amount,
                address: event.data.address,
                date: event.data.date
                //deliveryStatus: event.data.deliveryStatus
            }
        })
        await connectDB()
        await Order.insertMany(orders)

        return {success: true, processed: orders.length};
    }
)