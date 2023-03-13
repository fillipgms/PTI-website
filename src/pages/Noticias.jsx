import React from "react";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

import { Loading } from "../components";

const demoImage =
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/bitcoinreuters_13072022.jpg?VersionId=IOd.5O9.N7AwoFQWBsc6XxrQkbrhy9U4&size=690:388";

const Noticias = () => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory: "cryptocurrency",
        count: 10,
    });

    console.log(cryptoNews);

    if (!cryptoNews?.value) return <Loading />;

    return (
        <>
            <section className="m-3 p-4 ">
                <div className="bg-secondary-dark-bg rounded-md overflow-hidden p-6">
                    <img
                        src={
                            cryptoNews.value[0]?.image?.thumbnail?.contentUrl ||
                            demoImage
                        }
                        alt="crypto news image"
                        className="w-full object-cover h-96"
                    />
                </div>
            </section>
            <section className="w-full h-72 bg-secondary-dark-bg">Hi</section>
            <section className="m-3 p-4"></section>
        </>
    );
};

export default Noticias;
