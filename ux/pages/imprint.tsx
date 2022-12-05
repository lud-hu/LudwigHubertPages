import type { NextPage } from "next";
import Head from "next/head";
import styles from "./staticpage.module.scss";

const Imprint: NextPage = () => {
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
        <h2>Impressum</h2>
        <div>
          <h3>Angaben gemäss § 5 TMG:</h3>
          <p>
            Ludwig Hubert
            <br />
            Redlinger Straße 17
            <br />
            81735 München
            <br />
            info [at] ludwig-hubert [punkt] de
          </p>
        </div>
        <div>
          <h3>Haftungsausschluss (Disclaimer)</h3>
          <h4>Haftung für Inhalte</h4>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h4>Haftung für Links</h4>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h4>Urheberrecht</h4>
          <p>
            Alle Inhalte dieses Internetangebotes, insbesondere Fotografien und
            Grafiken, sind urheberrechtlich geschützt (Copyright). Das
            Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet,
            bei Ludwig Hubert. Bitte fragen Sie mich, falls Sie die Inhalte
            dieses Internetangebotes verwenden möchten. Wer gegen das
            Urheberrecht verstößt (z.B. die Inhalte unerlaubt auf die eigene
            Homepage kopiert), macht sich gemäß § 106 ff Urhebergesetz strafbar.
            Er wird zudem kostenpflichtig abgemahnt und muss Schadensersatz
            leisten. Kopien von Inhalten können im Internet ohne großen Aufwand
            verfolgt werden.
          </p>
          <h3>Seiteninhalte und Bildrechte</h3>
          <p>
            Alle Bilder und Texte sind urheberrechtlich geschützt. Urheber:
            Ludwig Hubert. Alle Rechte sind vorbehalten, insbesondere auf
            Vervielfältigung und Verbreitung. Texte und Fotos dürfen nicht in
            irgendeiner Form ohne schriftliche Genehmigung des Autors
            reproduziert, oder unter Verwendung elektronischer Systeme
            verarbeitet, vervielfältigt oder verbreitet werden.
          </p>
          <p>Quelle: www.e-recht24.de</p>
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
        </div>
      </main>
    </>
  );
};

export default Imprint;
