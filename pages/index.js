import {_CardVehicle, _NavBar, _QWrapper} from "@qniverse/core";
import NextImage from "next/image";
// console.log(_Drawer, _CardVehicle);
export default function Home() {
    const e = {
        imageUrl: "/sampleCar.jpg",
        title: "Sample Car",
        price: 1000000,
        transmissionType: "MT",
        odometer: 3000,
        fuelType: "Gas",
        warehouseLocation: "Cebu City",
        expiredAt: "2021-09-07T09:22:18.000Z",
        buyNowPrice: "3000000",
        NextImage,
    };
    const config = {
        themeName: "automart",
    };
    return (
        <>
            <_QWrapper config={config}>
                <_NavBar />
                <_CardVehicle {...e} />
            </_QWrapper>
        </>
    );
}
