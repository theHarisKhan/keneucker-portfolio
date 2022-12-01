import Image from "next/image";

function SocialLink(props) {
  return (
    <>
      <a
        href={props?.link}
        target="_blank"
        className="social-links"
        rel="noreferrer"
      >
        <div className="contact-social--icon">
          <Image
            src={props?.imgsrc}
            alt={props?.imgsrc}
            width={15}
            height={15}
            layout="responsive"
            objectFit="cover"
            blurDataURL="data:..."
          />
        </div>
      </a>
    </>
  );
}

export default SocialLink;
