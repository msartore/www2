<template>
  <div>
    <h1>UGAudio | Privacy Policy</h1>

    <p>
      This Privacy Policy applies to UGAudio (the "Application"), a companion
      application for compatible UGREEN and HiTune Bluetooth audio devices,
      operated by Massimiliano Sartore (the "Service Provider"). The
      Application is an independent companion application and is not
      affiliated with, sponsored by, or endorsed by UGREEN or HiTune. The
      Application is provided on an "AS IS" basis and may be supported by
      advertising.
    </p>

    <h2>Data Controller</h2>
    <ul>
      <li>Name: Massimiliano Sartore</li>
      <li>Email: <a href="mailto:me@msartore.dev">me@msartore.dev</a></li>
      <li>Postal address: available upon request by email</li>
    </ul>

    <h2>Information processed by UGAudio</h2>
    <p>
      UGAudio does not require an account or registration. The Application
      processes Bluetooth information needed to discover and connect to
      compatible devices, including device name, Bluetooth address, connection
      state, signal strength, and device settings. This information is used to
      provide the Application's device-management features.
    </p>
    <p>
      Saved device information and application preferences are stored locally
      on your device. UGAudio does not upload your Bluetooth data, audio,
      microphone recordings, or the contents of your device to the Service
      Provider. The Application does not collect precise location information;
      Android may nevertheless require Bluetooth or location permissions for
      Bluetooth scanning depending on the operating-system version.
    </p>

    <h2>Third-party services</h2>
    <p>
      The Application uses Google services to operate, improve, and support the
      Application. These services may process device and application
      identifiers, IP address, approximate location inferred from IP address,
      operating-system and app-version information, and network information.
      Google processes this information under its own terms and policies.
    </p>

    <h3>Google AdMob</h3>
    <p>
      AdMob displays advertisements in the Application. Depending on your
      location and choices, Google may use the advertising ID and related device
      information to provide personalized or non-personalized advertising,
      measure ad performance, limit frequency, and prevent fraud. Where
      required, advertising choices are presented through Google's consent
      mechanism. You can change those choices in the Application when the
      consent options are available, and you can reset or delete your
      advertising ID in your device settings.
    </p>

    <h3>Firebase Crashlytics</h3>
    <p>
      Crashlytics sends crash and diagnostic information to Google so the
      Service Provider can identify and fix problems. This may include crash
      stack traces, device model, operating-system version, app version,
      installation identifiers, and relevant diagnostic logs. The Application
      is not intended to include the contents of your audio or Bluetooth data
      in crash reports.
    </p>

    <h3>Firebase Remote Config</h3>
    <p>
      Remote Config allows the Application to receive configuration values,
      such as feature availability, compatibility settings, or presentation
      values, without requiring an application update. Google may process an
      app installation identifier and basic device, app-version, and network
      information when configuration is requested. Remote Config is not used
      to upload your files, audio, or Bluetooth device contents.
    </p>

    <h2>Legal bases</h2>
    <p>Where the GDPR applies, processing is based on:</p>
    <ul>
      <li>
        Consent, where required, for personalized advertising and other
        non-essential advertising-related processing.
      </li>
      <li>
        Legitimate interests for operating, securing, debugging, and improving
        the Application, including crash reporting and remote configuration,
        where those interests are not overridden by your rights.
      </li>
      <li>Legal obligations where processing is required by law.</li>
    </ul>

    <h2>Sharing and international transfers</h2>
    <p>
      The Service Provider does not sell your personal data. Google receives
      the information described above as the provider of AdMob and Firebase
      services. Google may process information on servers outside your country,
      including the United States, using transfer mechanisms required by
      applicable data-protection law.
    </p>
    <ul>
      <li>
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
      </li>
      <li>
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google information about partner sites and apps</a>
      </li>
      <li>
        <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">Firebase privacy information</a>
      </li>
    </ul>

    <h2>Retention and choices</h2>
    <p>
      Local preferences remain on your device until you delete them, clear the
      Application's data, or uninstall the Application. Google retains service
      data according to its applicable policies and service settings. You may
      stop future collection by uninstalling UGAudio, withdraw advertising
      consent through the available consent options, or reset your advertising
      ID through your device settings. Uninstalling does not automatically
      delete information already received by Google.
    </p>

    <h2>Your rights and deletion requests</h2>
    <p>
      Depending on your location, you may have rights to access, correct,
      delete, restrict, or object to processing of your personal data, to
      withdraw consent, and to lodge a complaint with a data-protection
      authority. Contact the Service Provider at
      <a href="mailto:me@msartore.dev">me@msartore.dev</a> to exercise these
      rights. Requests concerning data held directly by Google may also need to
      be made to Google. We may verify requests and retain information where
      required by law.
    </p>

    <h2>Children</h2>
    <p>
      UGAudio is not directed to children under 16, or the higher age required
      by applicable law. The Service Provider does not knowingly collect
      personal information from children in violation of applicable law. If you
      believe a child has provided personal information, contact
      <a href="mailto:me@msartore.dev">me@msartore.dev</a>.
    </p>

    <h2>Security and changes</h2>
    <p>
      The Service Provider uses reasonable technical and organizational
      safeguards, but no method of transmission or storage is completely
      secure. This policy may be updated by posting a revised version on this
      page. Material changes will be identified by updating the effective date
      and, where required, requesting consent.
    </p>

    <p>This Privacy Policy is effective as of 2026-08-29.</p>

    <h2>Contact</h2>
    <p>
      Questions about this Privacy Policy may be sent to
      <a href="mailto:me@msartore.dev">me@msartore.dev</a>.
    </p>
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Privacy Policy | UGAudio",
  meta: [
    { name: "description", content: "Privacy Policy for the UGAudio app." },
    { property: "og:title", content: "Privacy Policy | UGAudio" },
    { property: "og:description", content: "Privacy Policy for the UGAudio app." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://msartore.dev/projects/ug-audio/privacy" },
  ],
});
</script>
