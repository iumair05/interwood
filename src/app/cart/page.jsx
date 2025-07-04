"use client";

import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, IconButton } from "@mui/material";
import CustomButton from "@/commons/CustomButton";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/CartSlice";
import { routes } from "@/utils/routes";

const CartPage = () => {

    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const shippingCost = 999;
    const total = subtotal + shippingCost;

    return (
        <div className="custom-container">
            <h1 className="main-heading">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-6">

                {/* Left - Cart Items */}
                <section className="lg:w-3/5 w-full space-y-6 my-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow p-4 flex items-center relative gap-4">

                            <Image
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="rounded-md object-cover w-[100px] border border-secondaryBg h-[100px]"
                            />

                            <div className="flex-1">
                                <h2 className="font-semibold text-lg">{item.name}</h2>
                                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full inline-block my-2">
                                    {item.badge}
                                </span>

                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() => dispatch(decrementQuantity(item.id))}
                                        className="w-8 h-8 border rounded"
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(incrementQuantity(item.id))}
                                        className="w-8 h-8 border rounded"
                                    >
                                        +
                                    </button>
                                </div>

                            </div>

                            <div className="text-right min-w-[100px]">
                                <p className="text-sm text-gray-500">Rs {item.price.toLocaleString()} each</p>
                                <p className="font-semibold text-lg">Rs {(item.price * item.quantity).toLocaleString()}</p>
                            </div>

                            <IconButton
                                className="!absolute !top-2 !right-2 !text-gray-400 hover:!text-red-500"
                                size="small"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                <DeleteOutlineIcon fontSize="small" />
                            </IconButton>

                        </div>
                    ))}
                </section>

                {/* Right - Order Summary */}
                <section className="lg:w-2/5 w-full bg-white rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="flex justify-between py-2">
                        <span>Subtotal</span>
                        <span>Rs {subtotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between py-2">
                        <span>Shipping</span>
                        <span>Standard - Rs 999</span>
                    </div>


                    <hr className="my-4 bg-secondaryBg px-6" />

                    <div className="flex justify-between  text-lg font-bold">
                        <span>Total</span>
                        <span>Rs {total.toLocaleString()}</span>
                    </div>

                    <p className="text-sm mt-2 text-gray-500">
                        Estimated delivery: June 5 – June 8, 2025
                    </p>

                    <CustomButton
                        text="Proceed to Checkout"
                        onClick={() => router.push(`${routes.checkout}`)}
                        className="mt-4 w-full"
                    />

                </section>

            </div>
        </div>
    );
};

export default CartPage;
