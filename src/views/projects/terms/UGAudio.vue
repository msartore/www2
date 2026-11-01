<template>
  <div class="site legal">
    <div class="prose">
  <div>
    <h1>UGAudio | Terms &amp; Conditions</h1>

    <p>
      These Terms and Conditions apply to UGAudio (the "Application"), a
      companion application for compatible UGREEN and HiTune Bluetooth audio
      devices, operated by Massimiliano Sartore (the "Service Provider"). The
      Application is an independent application and is not affiliated with,
      sponsored by, or endorsed by UGREEN or HiTune. By downloading or using
      the Application, you agree to these Terms.
    </p>

    <h1>Eligibility</h1>
    <p>
      You must be legally permitted to use the Application in your jurisdiction.
      The Application is not directed to children under 16, or the higher age
      required by applicable law. A parent or legal guardian must review these
      Terms where applicable.
    </p>

    <h2>License</h2>
    <p>
      Subject to these Terms, the Service Provider grants you a limited,
      personal, non-exclusive, non-transferable, revocable license to install
      and use the Application. You may not copy, distribute, modify, create
      derivative works from, reverse engineer, decompile, or disassemble the
      Application except where applicable law expressly permits it.
    </p>

    <h2>Compatible devices and acceptable use</h2>
    <p>
      UGAudio is intended to manage compatible UGREEN and HiTune Bluetooth
      devices. Compatibility, available controls, and behavior may vary by
      device model, firmware, operating system, and region. You are responsible
      for using the Application only with devices and content you are
      authorized to access.
    </p>
    <p>
      You must not use the Application to interfere with another person's
      device, violate applicable law, circumvent technical protections, or
      infringe intellectual-property or other rights. Follow the safety
      instructions supplied with your headphones and do not operate devices in
      a way that creates a safety risk.
    </p>

    <h2>Bluetooth and local data</h2>
    <p>
      Some features require Bluetooth permissions, an active Bluetooth radio,
      and a compatible device. Device settings are stored locally and may be
      lost if application data is cleared or the Application is uninstalled.
      The Application is not a backup service and does not guarantee that
      settings can be recovered.
    </p>

    <h2>Third-party services and connectivity</h2>
    <p>
      The Application may use Google AdMob, Firebase Crashlytics, and Firebase
      Remote Config. Those services are provided under their own terms and
      policies. The Application may also require an internet connection for
      advertising, crash reporting, or remote configuration. Your mobile or
      internet provider may charge you for data usage, including roaming data.
    </p>
    <ul>
      <li><a href="https://developers.google.com/admob/terms" target="_blank" rel="noopener noreferrer">Google AdMob Terms</a></li>
      <li><a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer">Firebase Crashlytics Terms</a></li>
      <li><a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer">Firebase Terms</a></li>
    </ul>

    <h2>Intellectual property</h2>
    <p>
      The Service Provider retains all rights in the Application, including its
      code, design, trademarks, logos, and branding. UGREEN and HiTune are
      third-party marks and are not owned by or affiliated with the Service
      Provider unless expressly stated. You may not remove or obscure
      proprietary notices.
    </p>

    <h2>Availability, updates, and termination</h2>
    <p>
      The Service Provider may change, suspend, or discontinue the Application
      or any feature at any time. Updates may be required for continued use,
      and compatibility with future operating-system or device versions is not
      guaranteed. You may stop using the Application at any time by uninstalling
      it. The Service Provider may terminate this license if you materially
      breach these Terms.
    </p>

    <h2>Disclaimer and limitation of liability</h2>
    <p>
      To the fullest extent permitted by law, the Application is provided
      without warranties of availability, accuracy, suitability, or fitness for
      a particular purpose. The Service Provider is not responsible for device
      damage, loss of settings, interruption, data charges, or indirect,
      incidental, special, consequential, or punitive damages arising from use
      of the Application or reliance on third-party information.
    </p>
    <p>
      Nothing in these Terms excludes or limits liability that cannot lawfully
      be excluded or limited, including liability for fraud, or death or
      personal injury caused by negligence. These Terms do not limit mandatory
      consumer rights.
    </p>

    <h2>Indemnification</h2>
    <p>
      To the fullest extent permitted by law, you agree to indemnify the
      Service Provider against claims and expenses arising directly from your
      unlawful use of the Application or material breach of these Terms. This
      does not apply to the Service Provider's own negligence or unlawful acts
      where such limitation is prohibited.
    </p>

    <h2>Governing law</h2>
    <p>
      These Terms are governed by the laws of Italy, except that mandatory
      consumer-protection laws in your country of residence continue to apply.
      Disputes will be handled by a court with jurisdiction under applicable
      law.
    </p>

    <h2>Changes and contact</h2>
    <p>
      The Service Provider may update these Terms by posting a new version on
      this page. Material changes will be identified by updating the effective
      date. If you have questions, contact
      <a href="mailto:me@msartore.dev">me@msartore.dev</a>.
    </p>

    <p>These Terms are effective as of 2026-08-29.</p>
  </div>
    </div>
  </div>
  </template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Terms & Conditions | UGAudio",
  meta: [
    { name: "description", content: "Terms and Conditions for the UGAudio app." },
    { property: "og:title", content: "Terms & Conditions | UGAudio" },
    { property: "og:description", content: "Terms and Conditions for the UGAudio app." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://msartore.dev/projects/ug-audio/terms" },
  ],
});
</script>
