!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '235e994b-6ecb-4980-880f-bdba19dc959a'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-235e994b-6ecb-4980-880f-bdba19dc959a'));
  } catch (e) {}
})();
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6081],
  {
    36081: function (e, t, a) {
      a.d(t, {
        Cj: function () {
          return h;
        },
        Gz: function () {
          return v;
        },
        HS: function () {
          return m;
        },
        ON: function () {
          return r;
        },
        XL: function () {
          return l;
        },
        bQ: function () {
          return s;
        },
        dq: function () {
          return u;
        },
        wm: function () {
          return d;
        },
        wv: function () {
          return p;
        },
      });
      var n = a(27573),
        c = a(74331),
        i = a(80796),
        o = a(14164);
      let s = {
          title: 'Smarter reviews. Stronger reputations.',
          subtitle:
            'Advanced AI-powered tools are now available in Pro and Elite plans.',
          items: [
            {
              img: 'https://mccdn.me/martcdn/next-lp/contents/pricing/ai-banner-section_intention-recognition-v1.svg',
              title: 'NFC Tap-to-Review',
              text: 'Turn every table into a review generation hub. Customers simply tap their phone to leave feedback—frictionless and instant.',
            },
            {
              img: 'https://mccdn.me/martcdn/next-lp/contents/pricing/ai-banner-section_ai-step-v1.svg',
              title: 'Sentiment Filter',
              text: 'Automatically analyses feedback in real-time, ensuring positive reviews go public while private concerns stay internal.',
            },
            {
              img: 'https://mccdn.me/martcdn/next-lp/contents/pricing/ai-banner-section_ai-text-improver-v1.svg',
              title: 'Smart Insights',
              text: 'AI-powered analytics identify trends in customer feedback, helping you uncover what guests love—and where to improve.',
            },
            {
              img: 'https://mccdn.me/martcdn/next-lp/contents/pricing/ai-banner-section_ai-flow-builder-assistant-v1.svg',
              title: 'Review Amplifier',
              text: 'Boost your best reviews across key platforms—Google, TripAdvisor, Facebook, and more—maximising your online presence.',
            },
          ],
        },
        r = e => {
          const contents = (0, i.a)(e);  // Process the contents
          // console.log(contents);  // Check the contents to see if prices are being calculated correctly
          return {
              contents: contents,
              headers: ['Max number of tables', 'Price per month', 'Price per year'],
          };
      };
      
        l = {
          freeHref: '/purchase',
          proHref: 'https://elevatereputation.com/purchase',
          premiumHref: 'purchase',
          pricingSlug: '/pricing',
          compareSlug: '/product/compare-plans',
        },
        d = [
          {
            title: 'Pro',
            subline:
              'Grow your business with full access to our review generation system, turning every table into a review machine—starting at a cost of:',
            price: e => (0, o.H)(500, e),
            button: {
              children: 'Become pro',
              to: 'https://elevatereputation.com/purchase',
            },
            description: e =>
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)('p', {
                  className: 'underline_link pointer',
                  onClick: e,
                  children: '*scales with number of tables',
                }),
              }),
            recommended: !1,
            background: 'var(--kelp)',
            foreground: 'var(--white)',
          },
          {
            title: 'Elite',
            subline:
              'Customize your experience to manage multiple venues and scale with a tailored solution to meet (and exceed) your business goals.',
            price: 'Custom',
            button: { children: "Let's chat", to: '/pricing/book-a-demo-call' },
            description: () =>
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)('p', { children: '*customized to fit your needs' }),
              }),
            recommended: !1,
            background: 'var(--cobalt)',
            foreground: 'var(--white)',
          },
        ],
        m = [
         
          {
            pricingFeaturesFirstText: e =>
              (0, n.jsxs)('ul', {
                children: [
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: 'Instagram Direct Messages',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: 'Facebook Messenger',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p underline_link pointer',
                //       onClick: e,
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: 'WhatsApp',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: 'SMS & Email',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: 'TikTok (Beta)',
                //       }),
                //     }),
                //   }),
                ],
              }),
            pricingFeaturesFirstTitle: '',
            pricingFeaturesPlanTitle: e => 'Pro — from '.concat((0, o.H)(500, e)),
            pricingFeaturesSecondText: (0, n.jsxs)('ul', {
              children: [
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text_bold',
                        children: 'Turn every table into a review machine.',
                      }),
                      ' Customers tap, review, and boost your reputation effortlessly.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text_bold',
                        children: 'Expand customer reach.',
                      }),
                      ' Unlimited Growth Tools and Keywords',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text_bold',
                        children: 'Boost your online presence.',
                      }),
                      ' Positive reviews go straight to Google & key platforms.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text_bold',
                        children: 'Keep negative feedback private.',
                      }),
                      ' Filter out unhappy customers before they post publicly.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', { className: 'text_bold', children: ' AI-powered review responses.' }),
                      ' Save time with automated, smart replies.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', { className: 'text_bold', children: 'Simple, fast setup.' }),
                      ' Get started in minutes—no technical skills needed.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', { className: 'text_bold', children: 'Email support, anytime.' }),
                      ' Help when you need it.',
                    ],
                  }),
                }),
              ],
            }),
            pricingFeaturesSecondTitle: 'pro:',
          },
          {
            pricingFeaturesFirstText: e =>
              (0, n.jsxs)('ul', {
                children: [
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: '',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: '',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p underline_link pointer',
                //       onClick: e,
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: '',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: 'SMS & Email',
                //       }),
                //     }),
                //   }),
                //   (0, n.jsx)('li', {
                //     children: (0, n.jsx)('div', {
                //       className: 'p',
                //       children: (0, n.jsx)('span', {
                //         className: 'text_bold',
                //         children: '',
                //       }),
                //     }),
                //   }),
                ],
              }),
            pricingFeaturesFirstTitle: '',
            pricingFeaturesPlanTitle: 'Everything in Pro, plus:',
            pricingFeaturesSecondText: (0, n.jsxs)('ul', {
              children: [
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text_bold',
                        children: 'Manage multiple venues with ease.',
                      }),
                      ' Scalable for multi-location businesses.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', {
                        className: 'text_bold',
                        children: 'Dedicated onboarding & support.',
                      }),
                      ' Get expert help to maximize results.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', { className: 'text_bold', children: 'Custom reporting & insights.' }),
                      ' Track review trends and performance.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsxs)('div', {
                    className: 'p',
                    children: [
                      (0, n.jsx)('span', { className: 'text_bold', children: 'Tailored automations.' }),
                      ' Advanced customization to fit your brand’s needs.',
                    ],
                  }),
                }),
                (0, n.jsx)('li', {
                  children: (0, n.jsx)('div', {
                    className: 'p',
                    children: [
                        (0, n.jsx)('span', { className: 'text_bold', children: 'Priority support. ' }),
                        ' Faster response times for enterprise-level clients.',
                      ],
                  }),
                }),
              ],
            }),
            pricingFeaturesSecondTitle: 'Everything in Pro, plus:',
          },
        ],
        u = [
          // {
          //   title: 'Free',
          //   button: (0, n.jsxs)(n.Fragment, {
          //     children: ['Start for ', (0, n.jsx)('span', { children: 'Free' })],
          //   }),
          //   subline: 'No credit card required!',
          //   href: l.freeHref,
          //   gaDataEventName: 'main_cta_click',
          //   gaDataCtaId: 'cta1',
          // },
          {
            title: 'Pro',
            button: (0, n.jsxs)(n.Fragment, {
              children: ['Get ', (0, n.jsx)('span', { children: 'Pro' })],
            }),
            subline: e => 'Starts at '.concat((0, o.H)(500, e), '/mo.'),
            accented: !0,
            href: l.proHref,
          },
          {
            title: 'Elite',
            button: (0, n.jsxs)(n.Fragment, {
              children: ['Get ', (0, n.jsx)('span', { children: 'Elite' })],
            }),
            accented: !0,
            href: l.premiumHref,
          },
        ],
        p = [
          {
            title: 'Features',
            tooltip: '',
            params: [
              {
                title: 'Collect customer reviews',
                tooltip:
                  'A Flow contains the messages, actions, and transitions that make up an automated conversation for your bot.',
                compared: [
                  { name: 'Pro', value: 'Unlimited', accent: !0 },
                  { name: 'Elite', value: 'Unlimited', accent: !0 },
                ],
              },
              {
                title: 'AI-generated review responses',
                tooltip: 'Use Tags to mark, organize, and segment your contacts',
                compared: [
                  { name: 'Pro', value: 'Unlimited', accent: !0 },
                  { name: 'Elite', value: 'Unlimited', accent: !0 },
                ],
              },
              {
                title: 'Custom review triggers (QR/NFC)',
                tooltip: '',
                compared: [
                  { name: 'Pro', value: 'Unlimited', accent: !0 },
                  { name: 'Elite', value: 'Unlimited', accent: !0 },
                ],
              },
              {
                title: 'Sentiment filter (public/private routing)',
                tooltip:
                  'Team members include owners, admins, live chat agents, editors, and viewers.',
                compared: [
                  { name: 'Pro', value: '+', accent: !0 },
                  { name: 'Elite', value: '+', accent: !0 },
                ],
              },
              {
                title: 'Live dashboard for review tracking ',
                tooltip: '',
                compared: [
                  { name: 'Pro', value: '+', accent: !0 },
                  { name: 'Elite', value: '+', accent: !0 },
                ],
              },
              {
                title: 'Access quick campaign templates by industry',
                tooltip: '',
                compared: [
                  { name: 'Pro', value: '+', accent: !0 },
                  { name: 'Elite', value: '+', accent: !0 },
                ],
              },
              {
                title: 'One-tap data collection from customers',
                tooltip:
                  'Live Chat agents can pause automation and jump into a live customer conversation when needed.',
                compared: [
                  { name: 'Pro', value: '+', accent: !1 },
                  { name: 'Elite', value: '+', accent: !1 },
                ],
              },
              {
                title: 'Optimise performance with AI insights',
                tooltip: '',
                compared: [
                  { name: 'Pro', value: '+', accent: !1 },
                  { name: 'Elite', value: '+', accent: !1 },
                ],
              },
              {
                title: 'Multi-venue management',
                tooltip:
                  'Ask customers for information about them and collect valuable contact data in one tap, to build your customer database easily.',
                compared: [
                  { name: 'Pro', value: '-', accent: !1 },
                  { name: 'Elite', value: '+', accent: !1 },
                ],
              },
              {
                title: 'Dedicated onboarding for your team',
                tooltip: '',
                compared: [
                  { name: 'Pro', value: '-', accent: !1 },
                  { name: 'Elite', value: '+', accent: !1 },
                ],
              },
              {
                title: 'Priority support',
                tooltip: '',
                compared: [
                  { name: 'Pro', value: '-', accent: !0 },
                  { name: 'Elite', value: '+', accent: !0 },
                ],
              },
            ],
          }
        ],
        // h = {
        //   title: 'Questions or Manychat plan information and pricing info',
        //   contents: [
        //     {
        //       question: 'What does Manychat AI include?',
        //       answer: (0, n.jsx)('p', {
        //         children:
        //           "Manychat AI enhances your Pro plan with new platform-level capabilities. For an additional $29 per month, you'll gain access to the following features: AI Step , Intention Recognition, Flow Builder Assistant, and Text Improver. These tools are designed to create smarter automations and better conversations, enabling your Manychat AI to build automations, improve copy, add AI steps in your automations, and recognize intent more effectively.",
        //       }),
        //     },
        //     {
        //       question: 'Who is Manychat AI for?',
        //       answer: (0, n.jsx)('p', {
        //         children:
        //           "Manychat AI is ideal for business owners, marketers, and agency leaders looking to leverage advanced AI tools to transform their communication strategies. It's especially beneficial for those seeking to enhance their Manychat Pro accounts with more sophisticated, context-aware automation capabilities.",
        //       }),
        //     },
        //     {
        //       question: 'How much does Manychat AI cost?',
        //       answer: (0, n.jsx)('p', {
        //         children:
        //           'Manychat AI is available for an additional $29 per month, charged as an additional to your Pro account subscription. This fee ensures continuous access to our most advanced AI features, keeping your automated messaging technology at the cutting edge.',
        //       }),
        //     },
        //     {
        //       question: 'How do I upgrade to the next tier of Pro?',
        //       answer: (0, n.jsx)('p', {
        //         children:
        //           'Manychat automatically selects a tier based on a number of your contacts. We calculate how long each tier was eligible during a month and adjust total price accordingly, so you only pay for what you use.',
        //       }),
        //     },
        //     {
        //       question: 'Are there additional charges for WhatsApp?',
        //       answer: (0, n.jsxs)(n.Fragment, {
        //         children: [
        //           (0, n.jsx)('p', {
        //             children:
        //               'WhatsApp will require a PRO plan to message contacts or reply to them.',
        //           }),
        //           (0, n.jsxs)('p', {
        //             children: [
        //               'In addition to a PRO subscription, Manychat charges you according to the Facebook conversations-based model. Beginning on June 1st, 2023, Facebook implemented a new conversation-based pricing for all businesses globally sending WhatsApp messages. WhatsApp Business Accounts are now charged per conversation depending on the contact’s country code and new conversation categories. This new pricing structure includes benefits such as free 1000 monthly Service conversations and free conversations started from the Click-to-WhatsApp ads or the button on your Facebook Business page / IG account. The list of country-specific price rates can be found',
        //               ' ',
        //               (0, n.jsx)('a', {
        //                 href: 'https://help.manychat.com/hc/articles/14281380243740-WhatsApp-Pricing-Quick-Guide',
        //                 className: 'underline_link',
        //                 rel: 'noopener noreferrer',
        //                 target: '_blank',
        //                 children: 'here',
        //               }),
        //               '.',
        //             ],
        //           }),
        //         ],
        //       }),
        //     },
        //     {
        //       question: 'How Does Email and SMS Pricing Work?',
        //       answer: (0, n.jsxs)(n.Fragment, {
        //         children: [
        //           (0, n.jsx)('p', {
        //             children:
        //               'Pro plans include monthly email sends up to your contacts limit \xd7 10 (500 contacts = 5000 emails per month). After reaching your email limit, additional emails are billed at $0.003 per email ($3.00 per 1,000).',
        //           }),
        //           (0, n.jsx)('p', {
        //             children:
        //               'After activating SMS Marketing, payments for sending SMS messages will be handled by Twilio.',
        //           }),
        //         ],
        //       }),
        //     },
        //     {
        //       question: 'Can I cancel my payment plan options at any time?',
        //       answer: (0, n.jsxs)('p', {
        //         children: [
        //           'Sure. Just follow these',
        //           ' ',
        //           (0, n.jsx)('a', {
        //             href: 'https://help.manychat.com/hc/en-us/articles/14281418466972-How-to-Cancel-Pro-Subscription',
        //             className: 'underline_link',
        //             rel: 'noopener noreferrer',
        //             target: '_blank',
        //             children: 'instructions',
        //           }),
        //           '.',
        //         ],
        //       }),
        //     },
        //     {
        //       question: 'What payment forms do you accept?',
        //       answer: (0, n.jsx)('p', {
        //         children:
        //           'We accept most major credit cards including Visa, Mastercard, American Express and Discover.',
        //       }),
        //     },
        //     {
        //       question: 'What is your refund policy for billing?',
        //       answer: (0, n.jsxs)('p', {
        //         children: [
        //           'We strive to build the best Messenger Marketing platform in the world. If you are unhappy with Manychat for any reason, we provide a no-questions-asked refund within 30 days of purchase. More info in our',
        //           ' ',
        //           (0, n.jsx)('a', {
        //             href: 'https://elevatereputation.com/terms',
        //             className: 'underline_link',
        //             rel: 'noopener noreferrer',
        //             target: '_blank',
        //             children: 'TOS',
        //           }),
        //           '.',
        //         ],
        //       }),
        //     },
        //   ],
        // },
      
         h = {
            title: 'FAQs – Elevate Reputation',
            contents: [
                {
                    question: 'What does Elevate Reputation include?',
                    answer: (0, n.jsx)('p', {
                        children:
                            'Elevate Reputation helps businesses improve their online presence with AI-driven review management, reputation monitoring, and automated responses. Our service ensures higher positive reviews while intercepting negative feedback before it goes public.',
                    }),
                },
                {
                    question: 'Who is Elevate Reputation for?',
                    answer: (0, n.jsx)('p', {
                        children:
                            'Elevate Reputation is designed for restaurant and bar owners, local businesses, and service providers looking to enhance their online reputation and increase customer trust through strategic review management.',
                    }),
                },
                {
                    question: 'How much does Elevate Reputation cost?',
                    answer: (0, n.jsx)('p', {
                        children:
                            'Elevate Reputation is available for £40 per month. Our service includes AI-powered review filtering, NFC-based review collection, and automated customer interactions to maximize positive feedback.',
                    }),
                },
                {
                    question: 'How do I upgrade to the next tier of Elevate Reputation?',
                    answer: (0, n.jsx)('p', {
                        children:
                            'Elevate Reputation automatically adjusts pricing and service levels based on your business size and customer engagement. Contact our support team for custom solutions.',
                    }),
                },
                {
                    question: 'Can I cancel my payment plan at any time?',
                    answer: (0, n.jsxs)('p', {
                        children: [
                            'Yes. You can cancel your subscription anytime through your account settings or by reaching out to our support team.',
                        ],
                    }),
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: (0, n.jsx)('p', {
                        children:
                            'We accept major credit cards, including Visa, Mastercard, American Express, and Discover.',
                    }),
                },
                {
                    question: 'What is your refund policy?',
                    answer: (0, n.jsxs)('p', {
                        children: [
                            'We are confident in our service, but if you are not satisfied, we offer a 30-day money-back guarantee. Contact our support team for more details.',
                        ],
                    }),
                },
            ],
        },
        v = [
          'You’re charged for each new conversation',
          (0, n.jsxs)(n.Fragment, {
            children: [
              'Conversations are priced depending on the country code of the contact’s WhatsApp phone number and the conversation category. There are 4 categories of conversations: Service (initiated by\xa0contact*), Marketing, Utility, and Authentication (initiated by business**).\xa0',
              (0, n.jsx)('a', {
                href: 'https://help.manychat.com/hc/articles/14281380243740-WhatsApp-Pricing-Quick-Guide',
                className: 'underline_link',
                target: '_blank',
                children: 'The full price list is here',
              }),
              '.',
            ],
          }),
          'Your business’s first 1000 Service conversations each month are FREE. After 1000 conversations have been used, further Service conversations are paid.',
          'Conversations driven by Click-to-WhatsApp ads and the button on your Facebook Business page / IG account are free.',
          'To use uninterrupted WhatsApp messaging, please load your Manychat Wallet under Settings with the Auto Refill option activated.',
        ];
    },
    // 80796: function (e, t, a) {
    //   a.d(t, {
    //     a: function () {
    //       return s;
    //     },
    //   });
    //   let n = [
    //       500, 2500, 5e3, 1e4, 15e3, 2e4, 3e4, 4e4, 5e4, 6e4, 7e4, 8e4, 9e4, 1e5, 12e4, 14e4, 16e4,
    //       18e4, 2e5, 3e5, 4e5, 5e5, 6e5, 7e5, 8e5, 9e5, 1e6, 12e5, 14e5, 16e5, 18e5, 2e6, 2000001,
    //     ],
    //     c = {
    //       default: [
    //         15, 25, 45, 65, 95, 125, 165, 195, 235, 275, 315, 355, 395, 435, 515, 595, 675, 755,
    //         835, 1235, 1635, 2035, 2435, 2835, 3235, 3635, 4035, 4835, 5635, 6435, 7235, 8035, 8835,
    //       ],
    //     },
    //     i = e => c[e] || c.default,
    //     o = e => {
    //       let t = n.reduce(
    //         (t, a, n) => ((t[a] = { contacts: ''.concat(a), pro: ''.concat(i(e)[n]) }), t),
    //         {}
    //       );
    //       return (
    //         (t['500'].value = '500'),
    //         (t['50000'].value = '50k'),
    //         (t['200000'].value = '200k'),
    //         (t['500000'].value = '500k'),
    //         (t['1000000'].value = '1m'),
    //         (t['2000000'].value = '2m'),
    //         t
    //       );
    //     },
    //     s = e => Object.values(o(e));
    // },
    // 80796: function (e, t, a) {
    //   a.d(t, {
    //     a: function () {
    //       return s;
    //     },
    //   });
    //   let n = [
    //       10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    //       2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000,
    //       70000, 80000, 90000, 100000
    //     ],
    //     c = {
    //       default: n.map(tables => tables * 3),
    //     },
    //     i = e => c[e] || c.default,
    //     o = e => {
    //       let t = n.reduce(
    //         (t, a, n) => ((t[a] = { contacts: ''.concat(a), pro: ''.concat(i(e)[n]), yearly: ''.concat(i(e)[n] * 12) }), t),
    //         {}
    //       );
    //       t['1000'].value = '1k';
    //       t['10000'].value = '10k';
    //       t['50000'].value = '50k';
    //       t['100000'].value = '100k';
    //       return t;
    //     },
    //     s = e => Object.values(o(e));
    // },
    // 80796: function (e, t, a) {
    //   a.d(t, {
    //     a: function () {
    //       return s;
    //     },
    //   });
    
    //   let n = [
    //     10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    //     210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 
    //     390, 400
    //   ];
      
    
    //   // Default prices based on a multiplication factor (adjust as needed)
    //   const c = {
    //     default: n.map(tables => tables )
    //   };
      
    //   const i = e => c[e] || c.default;
    //   const o = e => {
    //     let t = n.reduce((t, a, n) => {
    //       const proPrice = i(e)[n] * 3;  
    //       const yearlyPrice = proPrice * 10; 
         
    //       t[a] = {
    //         contacts: ''.concat(a),
    //         pro: ''.concat(proPrice),
    //         yearly: ''.concat(yearlyPrice), 
    //       };
    //       if (a === 10) t[a].value = '10';
    //       if (a === 100) t[a].value = '100';
    //       if (a === 200) t[a].value = '200';
    //       if (a === 400) t[a].value = '400';
    
    //       return t;
    //     }, {});
    // // console.log(t)
    //     return t;
    //   };
    
    //   const s = e => Object.values(o(e));
    // },    
    // 80796: function (e, t, a) {
    //   a.d(t, {
    //     a: function () {
    //       return s;
    //     },
    //   });
    
    //   let n = [
    //     10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    //     210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 
    //     390, 400
    //   ];
    
    //   // Default prices based on a multiplication factor (adjust as needed)
    //   const c = {
    //     default: n.map(tables => tables)
    //   };
    
    //   const i = e => c[e] || c.default;
    
    //   const o = e => {
    //     let t = n.reduce((t, a, n) => {
    //       // Apply the equation for monthly price
    //       const monthlyPrice = Math.round(Math.pow(i(e)[n] / 12, 0.90)) * 30;
          
    //       // Apply the equation for yearly price (monthly price * 10)
    //       const yearlyPrice = monthlyPrice * 10;
    
    //       t[a] = {
    //         contacts: ''.concat(a),
    //         pro: ''.concat(monthlyPrice), // Monthly price
    //         yearly: ''.concat(yearlyPrice), // Yearly price
    //       };
    
    //       // Add specific values for certain table counts
    //       if (a === 10) t[a].value = '10';
    //       if (a === 100) t[a].value = '100';
    //       if (a === 200) t[a].value = '200';
    //       if (a === 400) t[a].value = '400';
    
    //       return t;
    //     }, {});
    
    //     return t;
    //   };
    
    //   const s = e => Object.values(o(e));
    // },
    // 80796: function (e, t, a) {
    //   a.d(t, {
    //     a: function () {
    //       return s;
    //     },
    //   });
    
    //   let n = [
    //     10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    //     210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 
    //     390, 400
    //   ];
    
    //   // Define an array of discounts for each corresponding number of tables
    //   const discounts = [
    //     0,     // 10 tables: 0% discount
    //     0.05,  // 20 tables: 5% discount
    //     0.10,  // 30 tables: 10% discount
    //     0.15,  // 40 tables: 15% discount
    //     0.20,  // 50 tables: 20% discount
    //     0.25,  // 60 tables: 25% discount
    //     0.30,  // 70 tables: 30% discount
    //     0.35,  // 80 tables: 35% discount
    //     0.40,  // 90 tables: 40% discount
    //     0.45,  // 100 tables: 45% discount
    //     0.50,  // 110 tables: 50% discount
    //     0.52,  // 120 tables: 52% discount
    //     0.54,  // 130 tables: 54% discount
    //     0.56,  // 140 tables: 56% discount
    //     0.58,  // 150 tables: 58% discount
    //     0.60,  // 160 tables: 60% discount
    //     0.62,  // 170 tables: 62% discount
    //     0.64,  // 180 tables: 64% discount
    //     0.66,  // 190 tables: 66% discount
    //     0.68,  // 200 tables: 68% discount
    //     0.70,  // 210 tables: 70% discount
    //     0.72,  // 220 tables: 72% discount
    //     0.74,  // 230 tables: 74% discount
    //     0.76,  // 240 tables: 76% discount
    //     0.78,  // 250 tables: 78% discount
    //     0.80,  // 260 tables: 80% discount
    //     0.82,  // 270 tables: 82% discount
    //     0.84,  // 280 tables: 84% discount
    //     0.86,  // 290 tables: 86% discount
    //     0.88,  // 300 tables: 88% discount
    //     0.90,  // 310 tables: 90% discount
    //     0.90,  // 320 tables: 90% discount
    //     0.90,  // 330 tables: 90% discount
    //     0.90,  // 340 tables: 90% discount
    //     0.90,  // 350 tables: 90% discount
    //     0.90,  // 360 tables: 90% discount
    //     0.90,  // 370 tables: 90% discount
    //     0.90,  // 380 tables: 90% discount
    //     0.90,  // 390 tables: 90% discount
    //     0.90,  // 400 tables: 90% discount
    //   ];
    
    //   // Default prices based on a multiplication factor (adjust as needed)
    //   const c = {
    //     default: n.map(tables => tables)
    //   };
    
    //   const i = e => c[e] || c.default;
    
    //   const o = e => {
    //     let t = n.reduce((t, a, n) => {
    //       // Get the discount for the current number of tables
    //       const discount = discounts[n];
    
    //       // Calculate the monthly price after applying the discount
    //       const monthlyPrice = i(e)[n] * (1 - discount) * 3;
    
    //       // Calculate the yearly price (monthly price * 10)
    //       const yearlyPrice = monthlyPrice * 10;
    
    //       t[a] = {
    //         contacts: ''.concat(a),
    //         pro: ''.concat(Math.round(monthlyPrice)), // Monthly price (rounded)
    //         yearly: ''.concat(Math.round(yearlyPrice)), // Yearly price (rounded)
    //       };
    
    //       // Add specific values for certain table counts
    //       if (a === 10) t[a].value = '10';
    //       if (a === 100) t[a].value = '100';
    //       if (a === 200) t[a].value = '200';
    //       if (a === 400) t[a].value = '400';
    
    //       return t;
    //     }, {});
    
    //     return t;
    //   };
    
    //   const s = e => Object.values(o(e));
    // },
    // 80796: function (e, t, a) {
    //   a.d(t, {
    //     a: function () {
    //       return s;
    //     },
    //   });
    
    //   let n = [
    //     12, 24, 36, 48, 60, 72, 84, 96, 108, 120
    //   ];
    
    //   const basePrice = 25;
    //   const additionalCostPer12 = 5;
    
    //   const calculatePrice = (chips) => {
    //     const groupsOf12 = chips / 12;
    //     return basePrice + (groupsOf12 * additionalCostPer12);
    //   };
    
    //   const c = {
    //     default: n.map(chips => chips)
    //   };
    
    //   const i = e => c[e] || c.default;
    
    //   const o = e => {
    //     let t = n.reduce((t, chips, index) => {
    //       const monthlyPrice = calculatePrice(chips);
    //       const yearlyPrice = monthlyPrice * 10;
    
    //       t[chips] = {
    //         contacts: ''.concat(chips),
    //         pro: ''.concat(Math.round(monthlyPrice)), // Monthly price (rounded)
    //         yearly: ''.concat(Math.round(yearlyPrice)), // Yearly price (rounded)
    //       };
    
    //       if (chips === 12) t[chips].value = '12';
    //       // if (chips === 24) t[chips].value = '24';
    //       // if (chips === 36) t[chips].value = '36';
    //       // if (chips === 48) t[chips].value = '48';
              
    //       if (chips === 60) t[chips].value = '60';
    //       // if (chips === 72) t[chips].value = '72';
    //       // if (chips === 84) t[chips].value = '84';
    //       // if (chips === 96) t[chips].value = '96';
    //       // if (chips === 108) t[chips].value = '108';
    //       if (chips === 120) t[chips].value = '120';
    
    //       return t;
    //     }, {});
    
    //     return t;
    //   };
    
    //   const s = e => Object.values(o(e));
    // },
    80796: function (e, t, a) {
      a.d(t, {
        a: function () {
          return s;
        },
      });
    
      let n = [
        12, 24, 36, 48, 60, 72, 84, 96, 108, 120
      ];
    
      const basePrice = 25;
      const additionalCostPer12 = 5;
    
      // Modified calculatePrice function
      const calculatePrice = (chips) => {
        // Find the next value in `n` that is greater than or equal to the number of chips
        const nextGroup = n.find(value => value >= chips) || n[n.length - 1]; // Default to the max value
        const groupsOf12 = nextGroup / 12;
        return basePrice + (groupsOf12 * additionalCostPer12);
      };
    
      const c = {
        default: n.map(chips => chips)
      };
    
      const i = e => c[e] || c.default;
    
      const o = e => {
        let t = n.reduce((t, chips, index) => {
          const monthlyPrice = calculatePrice(chips);
          const yearlyPrice = monthlyPrice * 10;
    
          t[chips] = {
            contacts: ''.concat(chips),
            pro: ''.concat(Math.round(monthlyPrice)), // Monthly price (rounded)
            yearly: ''.concat(Math.round(yearlyPrice)), // Yearly price (rounded)
          };
    
          if (chips === 12) t[chips].value = '12';
          // if (chips === 24) t[chips].value = '24';
          // if (chips === 36) t[chips].value = '36';
          // if (chips === 48) t[chips].value = '48';
          if (chips === 60) t[chips].value = '60';
          // if (chips === 72) t[chips].value = '72';
          // if (chips === 84) t[chips].value = '84';
          // if (chips === 96) t[chips].value = '96';
          // if (chips === 108) t[chips].value = '108';
          if (chips === 120) t[chips].value = '120';
    
          return t;
        }, {});
        console.log(t)
        return t;
      };
    
      const s = e => Object.values(o(e));
    },    
    14164: function (e, t, a) {
      a.d(t, {
        H: function () {
          return i;
        },
      });
      var n = a(80796),
        c = a(28023);
      let i = (e, t) => {
        // console.log((0, n.a)(t))
        console.log(e)

        let a = (0, n.a)(t).find(t => t.contacts === ''.concat(e)),
          // i = (0, c.zC)(t);
          i = '£';

          // console.log(i)
        return a ? ''.concat(i).concat(Number(a.pro)) : ''.concat(i, '3/chip');
      };
    },
  },
]);
//# sourceMappingURL=6081-8e40833018552edb.js.map
