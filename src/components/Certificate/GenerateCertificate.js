/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import moment from "moment";

Font.register({
  family: "Inter",
  src: "/assets/VeganStylePersonalUse-5Y58.ttf",
});
Font.register({
  family: "lato",
  src: "/assets/Lato-Bold.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    fontFamily: "Inter",
  },
});
const PDF = () => {
  let formData;
  if (typeof window !== "undefined") {
    formData = JSON.parse(localStorage.getItem("formData"));
  }
  return (
    <Document>
      <Page style={styles.body}>
        <View>
          <Image src='/assets/certificate.png' />
        </View>
        <Text
          wrap={false}
          style={{
            position: "absolute",
            top: "200 px",
            alignSelf: "center",
            marginHorizontal: "auto",
            textAlign: "center",
            justifyContent: "center",
            textTransform: "lowercase",
          }}
        >
          {`${formData[0].firstname} ${formData[0].lastname}`}
        </Text>
        <Text
          wrap={false}
          style={{
            position: "absolute",
            top: "230 px",
            alignSelf: "center",
            marginHorizontal: "auto",
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "lato",
            fontSize: "30px",
          }}
        >
          {`${formData[0].class}`}
        </Text>
        <Text
          wrap={false}
          style={{
            position: "absolute",
            left: "355px",
            top: "355 px",
            alignSelf: "center",
            marginHorizontal: "auto",
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "lato",
          }}
        >
          {moment().format("L")}
        </Text>
      </Page>
    </Document>
  );
};
export default function PDFDownload() {
  return (
    <PDFDownloadLink document={<PDF />} fileName='Certificate.pdf'>
      {({ loading }) =>
        loading ? (
          <button className=' bg-skin-hue-hover dark:bg-skin-gold-hover  text-2xl p-4 rounded-3xl shadow-md text-skin-base dark:theme-dark '>
            Loading document...
          </button>
        ) : (
          <button className='bg-skin-btn-accent hover:bg-skin-btn-hover text-skin-inverted text-2xl p-4 rounded-3xl shadow-md '>
            Download
          </button>
        )
      }
    </PDFDownloadLink>
  );
}
