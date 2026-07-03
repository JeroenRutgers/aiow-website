// Juridische documenten voor de Tape This app (App Store dependency).
// Routes /tape-this/* moeten exact blijven bestaan; content 1:1 overgenomen
// van de vorige aiow.io site (last updated 5 Jan 2026).

type Section = { h: string; p: (string | string[])[] }
export type TapeThisDoc = { title: string; updated: string; sections: Section[] }

export const TAPE_THIS_DOCS: Record<string, TapeThisDoc> = {
  'privacy-policy': {
    title: 'Privacy Policy for Tape This',
    updated: '5 Jan 2026',
    sections: [
      {
        h: 'Introduction',
        p: [
          'Welcome to Tape This, developed by AIOW ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Tape This ("the App"). Please read this Privacy Policy carefully.',
        ],
      },
      {
        h: 'Information We Collect',
        p: [
          'Personal Information — We may collect personal information that you voluntarily provide to us when you:',
          ['Register for an account', 'Contact us for support', 'Participate in surveys or feedback requests'],
          'Device and Usage Information — We may automatically collect certain information about your device and how you use the App:',
          [
            'Device information (model, operating system version, unique device identifiers)',
            'App usage statistics and analytics',
            'Crash reports and performance data',
            'IP address and general location information',
          ],
        ],
      },
      {
        h: 'How We Use Your Information',
        p: [
          'We use the collected information for various purposes:',
          [
            'To provide and maintain the App',
            "To improve and optimize the App's functionality",
            'To provide customer support',
            'To send you technical notices and updates',
            'To detect and prevent fraud or abuse',
            'To comply with legal obligations',
          ],
        ],
      },
      {
        h: 'Data Sharing and Disclosure',
        p: [
          'We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:',
          [
            'With your explicit consent',
            'To comply with legal obligations or court orders',
            'To protect our rights, privacy, safety, or property',
            'With service providers who assist us in operating the App (under strict confidentiality agreements)',
          ],
        ],
      },
      {
        h: 'Data Security',
        p: [
          'We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.',
        ],
      },
      {
        h: 'Your Rights and Choices',
        p: [
          'Depending on your location, you may have the following rights regarding your personal information:',
          [
            'Access to your personal information',
            'Correction of inaccurate information',
            'Deletion of your personal information',
            'Restriction of processing',
            'Data portability',
            'Withdrawal of consent',
          ],
        ],
      },
      {
        h: "Children's Privacy",
        p: [
          'Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have collected personal information from a child under 13, we will delete such information immediately.',
        ],
      },
      {
        h: 'Changes to This Privacy Policy',
        p: [
          'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
        ],
      },
      {
        h: 'Contact Us',
        p: [
          'If you have any questions about this Privacy Policy, please contact us:',
          ['Email: privacy@aiow.io', 'Website: https://aiow.io'],
        ],
      },
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service for Tape This',
    updated: '5 Jan 2026',
    sections: [
      {
        h: 'Acceptance of Terms',
        p: [
          'By downloading, installing, or using the Tape This mobile application ("the App"), developed by AIOW ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.',
        ],
      },
      {
        h: 'Description of Service',
        p: [
          'Tape This is a mobile application that provides users with recording and audio management functionality. The specific features and capabilities of the App may be updated or modified from time to time at our discretion.',
        ],
      },
      {
        h: 'User Accounts',
        p: [
          'To access certain features of the App, you may need to create an account. You are responsible for:',
          [
            'Maintaining the confidentiality of your account credentials',
            'All activities that occur under your account',
            'Providing accurate and current information',
            'Notifying us immediately of any unauthorized use of your account',
          ],
        ],
      },
      {
        h: 'Acceptable Use',
        p: [
          'You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:',
          [
            'Use the App for any illegal or unauthorized purpose',
            'Violate any applicable laws or regulations',
            'Infringe upon the rights of others',
            'Upload or transmit any harmful, offensive, or inappropriate content',
            'Attempt to reverse engineer, decompile, or hack the App',
            'Use the App in any way that could damage, disable, or impair our servers or networks',
            'Record conversations or audio without proper consent where required by law',
          ],
        ],
      },
      {
        h: 'Recording and Privacy Compliance',
        p: [
          'When using the recording features of the App, you acknowledge and agree that:',
          [
            'You are solely responsible for complying with all applicable laws regarding recording',
            'You will obtain necessary consent before recording others where required by law',
            'You will respect the privacy and rights of all individuals',
            'We are not responsible for how you use the recording functionality',
          ],
        ],
      },
      {
        h: 'Intellectual Property',
        p: [
          'The App and its original content, features, and functionality are owned by AIOW and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
          "You retain ownership of any content you create using the App, but you grant us a limited license to process and store such content solely for the purpose of providing the App's functionality.",
        ],
      },
      {
        h: 'Privacy',
        p: [
          'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the App, to understand our practices.',
        ],
      },
      {
        h: 'Disclaimers and Limitation of Liability',
        p: [
          'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
          'TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION.',
        ],
      },
      {
        h: 'Indemnification',
        p: [
          "You agree to defend, indemnify, and hold harmless AIOW from and against any claims, damages, costs, and expenses (including reasonable attorneys' fees) arising from or related to your use of the App or violation of these Terms.",
        ],
      },
      {
        h: 'Termination',
        p: [
          'We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms.',
        ],
      },
      {
        h: 'Changes to Terms',
        p: [
          'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide notice prior to any new terms taking effect.',
        ],
      },
      {
        h: 'Governing Law',
        p: [
          'These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which AIOW operates, without regard to its conflict of law provisions.',
        ],
      },
      {
        h: 'Contact Information',
        p: [
          'If you have any questions about these Terms of Service, please contact us:',
          ['Email: legal@aiow.io', 'Website: https://aiow.io'],
        ],
      },
    ],
  },
  'End-User-License-Agreement': {
    title: 'End User License Agreement (EULA) for Tape This',
    updated: '5 Jan 2026',
    sections: [
      {
        h: 'Agreement Overview',
        p: [
          'This End User License Agreement ("EULA") is a legal agreement between you ("User" or "you") and AIOW ("Company," "we," "us," or "our") for the Tape This mobile application ("Software" or "App"). By installing, accessing, or using the Software, you agree to be bound by the terms of this EULA.',
        ],
      },
      {
        h: 'Grant of License',
        p: [
          'Subject to the terms of this EULA, AIOW grants you a limited, non-exclusive, non-transferable, revocable license to:',
          [
            'Download and install the Software on compatible devices you own or control',
            'Use the Software solely for personal, non-commercial purposes',
            'Receive updates and new versions of the Software',
          ],
        ],
      },
      {
        h: 'License Restrictions',
        p: [
          'You agree not to, and you will not permit others to:',
          [
            'Modify, adapt, alter, translate, or create derivative works of the Software',
            'Reverse engineer, decompile, disassemble, or attempt to derive the source code',
            'Remove, alter, or obscure any proprietary notices or labels on the Software',
            'Distribute, sell, sublicense, rent, lease, or transfer the Software',
            'Use the Software for any commercial purposes without express written consent',
            'Use the Software in violation of any applicable laws or regulations',
            'Use the Software to harass, abuse, or harm other individuals',
          ],
        ],
      },
      {
        h: 'Recording Functionality',
        p: [
          'The Software provides recording capabilities. By using these features, you acknowledge and agree that:',
          [
            'You are solely responsible for complying with all applicable laws regarding recording in your jurisdiction',
            'You will obtain all necessary permissions and consents before recording others',
            'You will not use the recording functionality for illegal surveillance or espionage',
            'AIOW is not liable for your use or misuse of the recording features',
          ],
        ],
      },
      {
        h: 'Data and Privacy',
        p: [
          'Your use of the Software is also governed by our Privacy Policy. The Software may collect certain information about your device and usage patterns to improve functionality and user experience.',
        ],
      },
      {
        h: 'Intellectual Property Rights',
        p: [
          'The Software and all related intellectual property rights are and shall remain the exclusive property of AIOW. This EULA does not grant you any rights to our trademarks or service marks.',
        ],
      },
      {
        h: 'Updates and Modifications',
        p: [
          'AIOW may provide updates, patches, or modifications to the Software at its sole discretion. These updates may be automatically downloaded and installed. Continued use of the Software after updates constitutes acceptance of any changes.',
        ],
      },
      {
        h: 'Disclaimer of Warranties',
        p: [
          'THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE." AIOW DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:',
          [
            'Warranties of merchantability and fitness for a particular purpose',
            'Warranties that the Software will be error-free or uninterrupted',
            'Warranties regarding the accuracy or reliability of any data',
            'Warranties that the Software will meet your specific requirements',
          ],
        ],
      },
      {
        h: 'Limitation of Liability',
        p: [
          'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIOW SHALL NOT BE LIABLE FOR ANY:',
          [
            'Indirect, incidental, special, consequential, or punitive damages',
            'Loss of profits, data, or business opportunities',
            'Personal injury or property damage arising from use of the Software',
            'Any damages exceeding the amount paid for the Software (if any)',
          ],
        ],
      },
      {
        h: 'Termination',
        p: [
          'This EULA is effective until terminated. Your rights under this EULA will terminate automatically if you fail to comply with any terms. Upon termination, you must cease all use of the Software and delete all copies from your devices.',
          'AIOW reserves the right to terminate this EULA at any time for any reason, with or without notice.',
        ],
      },
      {
        h: 'Export Controls',
        p: [
          'The Software may be subject to export control laws and regulations. You agree to comply with all applicable export and import laws and regulations and will not export or re-export the Software in violation of such laws.',
        ],
      },
      {
        h: 'Governing Law and Dispute Resolution',
        p: [
          'This EULA shall be governed by and construed in accordance with the laws of the jurisdiction where AIOW is established. Any disputes arising under this EULA shall be resolved through binding arbitration or in the appropriate courts of that jurisdiction.',
        ],
      },
      {
        h: 'Severability',
        p: [
          'If any provision of this EULA is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
        ],
      },
      {
        h: 'Entire Agreement',
        p: [
          'This EULA constitutes the entire agreement between you and AIOW regarding the Software and supersedes all prior or contemporaneous communications and proposals.',
        ],
      },
      {
        h: 'Contact Information',
        p: [
          'If you have any questions about this EULA, please contact us:',
          ['Email: legal@aiow.io', 'Website: https://aiow.io'],
          'By clicking "Accept" or by installing and using the Software, you acknowledge that you have read, understood, and agree to be bound by this EULA.',
        ],
      },
    ],
  },
}
