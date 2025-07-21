import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white mt-20 px-6 md:px-10 lg:px-32 py-16 text-gray-800 font-serif">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Privacy Policy
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto md:text-sm text-xs leading-relaxed">
        <p>
          powernex.com is compliant with The General Data Protection Regulation (GDPR) (EU) 2016/679.
        </p>

        <p>
          It means that we are open about our methods of tracking and use of the visitors’ personal data,
          and you can freely check what exactly we’re doing to it.
        </p>

        <p>At finesara.com, we collect:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Your name and surname</li>
          <li>Your email address</li>
          <li>Your physical address</li>
          <li>Your phone number</li>
          <li>The data about the browser and device you use to view the store</li>
          <li>The way you navigate the store</li>
        </ul>

        <p>
          We gather your contact details because they are necessary to accept and process your orders,
          and to make sure you’ve got your packages.
        </p>

        <p>
          We gather the details of your technical equipment and on-site behavior in order to make our store
          more user-friendly, and to personalize our store services for you
          (for example, to automatically switch the store to the mobile version.)
        </p>

        <p>
          Our store works with outer companies that help us provide the best service for you,
          and these third parties also use some of the personal details you’re leaving.
          We limit the data they can access to only what is necessary for them to perform their obligations.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Payment services use your credit card number, your name and surname to verify
            and process your payments for our products
          </li>
          <li>
            Our manufacturers and stock keepers use the data of your order contents to
            assemble the necessary package for you
          </li>
          <li>
            Postal services use your first name, last name, and physical address to arrange the product delivery for you
          </li>
          <li>
            Mass mailing services use your email address to send you emails (if you have subscribed for them)
          </li>
        </ul>
         <p>
          If you keep browsing our webstore after reading this Privacy Policy, you give us the consent to use your personal details for the purposes explained above.
        </p>
      </div>
    </div>
  );
}
