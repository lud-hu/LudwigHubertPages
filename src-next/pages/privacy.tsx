import type { NextPage } from "next";
import Head from "next/head";
import styles from "./staticpage.module.scss";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ludwig Hubert - Portfolio</title>
        <meta name="description" content="Portfolio page of Ludwig Hubert" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon-96x96.png"
        />
      </Head>

      <main className={styles["main-wrapper"]}>
        <h2>Datenschutz</h2>

        <div>
          <h3>Seiteninhalte und Bildrechte</h3>
          <p>
            Alle Bilder und Texte sind urheberrechtlich geschützt. Urheber:
            Ludwig Hubert. Alle Rechte sind vorbehalten, insbesondere auf
            Vervielfältigung und Verbreitung. Texte und Fotos dürfen nicht in
            irgendeiner Form ohne schriftliche Genehmigung des Autors
            reproduziert, oder unter Verwendung elektronischer Systeme
            verarbeitet, vervielfältigt oder verbreitet werden.
          </p>
        </div>
        {/* I don't need cookies right now. */}
        {/* <div>
          <h3>Datenschutzerklärung</h3>
          <p>
            Ich lege großen Wert auf den Schutz Ihrer Daten. Um Sie in vollem
            Umfang über die Verwendung personenbezogener Daten zu informieren,
            bitten wir Sie die folgenden Datenschutzhinweise zur Kenntnis zu
            nehmen.
          </p>
        </div>
        <div>
          <h3>Cookies</h3>
          <p>
            Cookies sind kleine Dateien, die es dieser Webseite ermöglichen auf
            dem Computer des Besuchers spezifische, auf den Nutzer bezogene
            Informationen zu speichern, während unsere Website besucht wird.
            Cookies helfen mir dabei, die Nutzungshäufigkeit und die Anzahl der
            Nutzer meiner Internetseite zu ermitteln. Ich verwende einerseits
            Session-Cookies, die ausschließlich für die Dauer Ihrer Nutzung
            meiner Website zwischengespeichert werden und zum anderen permanente
            Cookies, um Informationen über Besucher festzuhalten, die wiederholt
            auf meine Website zugreifen. Der Zweck des Einsatzes dieser Cookies
            besteht darin, eine optimale Benutzerführung anbieten zu können
            sowie Besucher wiederzuerkennen und bei wiederholter Nutzung eine
            möglichst attraktive Website und interessante Inhalte präsentieren
            zu können. Der Inhalt eines permanenten Cookies beschränkt sich auf
            eine Identifikationsnummer. Name, IP-Adresse usw. werden nicht
            gespeichert. Eine Einzelprofilbildung über Ihr Nutzungsverhalten
            findet nicht statt. Eine Nutzung meiner Website ist auch ohne
            Cookies möglich. Sie können in Ihrem Browser das Speichern von
            Cookies deaktivieren, auf bestimmte Webseiten beschränken oder Ihren
            Webbrowser (Chrome, Firefox, Internet Explorer, …) so einstellen,
            dass er sie benachrichtigt, sobald ein Cookie gesendet wird. Sie
            können Cookies auch jederzeit von der Festplatte ihres PC löschen.
            Bitte beachten Sie aber, dass Sie in diesem Fall mit einer
            eingeschränkten Darstellung der Seite und mit einer eingeschränkten
            Benutzerführung rechnen müssen.
          </p>
        </div>
        <div>
          <h3>Datenschutzerklärung für die Nutzung von Google Analytics</h3>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
            Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
            den Cookie erzeugten Informationen über Ihre Benutzung dieser
            Website werden in der Regel an einen Server von Google in den USA
            übertragen und dort gespeichert. Im Falle der Aktivierung der
            IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von
            Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union
            oder in anderen Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
            IP-Adresse an einen Server von Google in den USA übertragen und dort
            gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten zusammenzustellen und um weitere
            mit der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im
            Rahmen von Google Analytics von Ihrem Browser übermittelte
            IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern. Ich weise Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich werden nutzen können. Sie
            können darüber hinaus die Erfassung der durch das Cookie erzeugten
            und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem sie das unter dem folgenden Link
            (https://tools.google.com/dlpage/gaoptout?hl=de) verfügbare
            Browser-Plugin herunterladen und installieren. Nähere Informationen
            zu Nutzungsbedingungen und Datenschutz finden Sie unter
            https://www.google.com/analytics/terms/de.html. Ich weise Sie darauf
            hin, dass auf dieser Webseite Google Analytics um den Code
            „gat._anonymizeIp();“ erweitert wurde, um eine anonymisierte
            Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.
          </p>
        </div> */}
      </main>
    </>
  );
};

export default Portfolio;
