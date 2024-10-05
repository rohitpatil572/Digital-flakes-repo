import React from 'react';
import './Home.css'
function Home() {
  return (
    <div className='bg-main m-0 p-0'>
        <div className='logo-div d-flex flex-row justify-content-between p-3'>
            <div className='d-flex flex-row justify-content-start'>
            <img className='logo' src="https://s3-alpha-sig.figma.com/img/03e2/9685/10d4ea293d7a14946d8bd331c5e5055f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XrNJXs2YNoEYKEexMLzQPf3EAsW226bF1pPdQVwLETEnTmEAsTirE4mhAOU1JIsfaOSYsrTVpPMAwHg7zklY1zx7c-1xDvJez0y13ypwq1fADUkndrrv9iocCe1dDD5hVVpXznTzzITUkPYC4QnopGdKMW22leqlZFSnJqkdfH9bMkKQrN1d-njWiizwwarP-Vt-MyLBRcYFAn0I24X~1jwBFnElmjmJrk1dn4vpIKGHu9qQlz006K3~cYxXmreiIA3pCRzXb2vffQzE~XZFRirkzr2zjKhOKQl87CiO260Z3LTLh5uDy0s80a-h5YLVEiKO496cYCUhPxVav9eGlw__" />
            </div>
            <div className='d-flex flex-row justify-content-end'>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 3.75C12.1444 3.75 3.75 12.1444 3.75 22.5C3.75 32.8556 12.1444 41.25 22.5 41.25C32.8556 41.25 41.25 32.8556 41.25 22.5C41.25 12.1444 32.8556 3.75 22.5 3.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00812 34.3988C8.00812 34.3988 12.1875 29.0625 22.5 29.0625C32.8125 29.0625 36.9937 34.3988 36.9937 34.3988M22.5 22.5C23.9918 22.5 25.4226 21.9074 26.4775 20.8525C27.5324 19.7976 28.125 18.3668 28.125 16.875C28.125 15.3832 27.5324 13.9524 26.4775 12.8975C25.4226 11.8426 23.9918 11.25 22.5 11.25C21.0082 11.25 19.5774 11.8426 18.5225 12.8975C17.4676 13.9524 16.875 15.3832 16.875 16.875C16.875 18.3668 17.4676 19.7976 18.5225 20.8525C19.5774 21.9074 21.0082 22.5 22.5 22.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   </div>
    </div>   
        <div className='container m-0 p-0'>
            <div className='row d-flex flex-row'>
                <div className='col-md-4 contain'>
                    <div className='m-2 d-flex flex-row mt-5'>
                        <img className='in-logo m-1' src='https://s3-alpha-sig.figma.com/img/572b/d84a/693d97155dcaaf3c78d15fac981c7b80?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hU0zW3VZ~-~MoPeHr~~35z9J0NoBmPtF8AXUbuRwd801WVc7CufPR50CYk8x3v66AkNtAbpKjwKsf1P9asVtnz5jIo729uoWZ7Ns7QTqxet63hAHnmHBjwVIB4QJ4u~Ns3D2FpFsXJYpYM0qdp1cgJL~Ez41aHAtGTQLdR6Ovh2hcizTqUlQaKvTI9FoVAGsHB1g2~DEBOT7cZbas2q~lbRd~eIJ7ZiNSLk5TEY3OhPBB~IB~~u3OOCqNepxMFJyaifdQvr-JuBh~uq2LHaV7lB2yannT3KMUe2XmIvy2kY-qHjbdISMFby9pfaE14aVlRofcISNlr22ySUZvCbsTA__' alt="" />
                        <p className='ml-2 p '>Home</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill arrow" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
    </svg>
                    </div>
                    <div className='m-2 d-flex flex-row '>
                        <img className='in-logo m-1' src='https://s3-alpha-sig.figma.com/img/4c14/92ea/70d2d60430d0da391b821845a63b4562?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMhbS5Jx0kfRYvikfK1TEng4C3e7vsDsCERYwGmITbrwG3EgXRWaudX65vg76aA9TZArfs7pqvjiiV1LrR7j0o1hUiP5-aIcWFo06QrscA4D5XC2cNHRN4UmDKC0rojbiEm8rGtdmb8u0itdkgod-lGbbFPrHpZnCvtDbgJ0NJzXBZvpy7N4yDDOIoouzUzry7hLChgLD4cq6R6WqBqrGI66vFzKB21BRv3GUzlGhBKByEOP3hb5tkoTV1dHULCIOA-dVcDs40u5XUQHqPADHT46kYO4txiCA9i4aQAkOq2dMdrKcdyqRcqX8ajTLn6CjWHb2P~gNCaX372SbE8fQw__' alt="" />
                        <p className='ml-2 p '>State</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill arrow" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
    </svg>
                </div>
                        <div className='m-2 d-flex flex-row '>
                        <img className='in-logo m-1' src='https://s3-alpha-sig.figma.com/img/b83c/a030/b79f23376eb70bb5879634cbf6e7c89d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPGFnGvq2HByC0G5MPfvAuXuc1X9oOJdBcWLSitKdPZ-Z~7n8dRTGxdLkORU2Yb0b~et89zWFyPBfrEipW5u2zrxKw2aEe2YTUtqQ3iNQN7t89Le1duztslgwvRg8ZTsYE~jYbhK-9Xsf5X1nOMgtsivIudsJVxeym-VerD74CIaltmpb0-YhRpr2RH7gVrsI~G8BjH7ksRv5tjcY~TRkvFxFxEiJQo1tSSJ6NeHv9zbiqMugvh6W3ga21Vwz4ysanWV4RMb2e1Ehv64mbJo19SSC4UhqZnIGbme5zNPh8PZxkj6c8DlwSb1xYvyZAa6-AR-ZvUAkFMArSyynsO43A__' alt="" />
                        <p className='ml-2 p '>City</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill arrow" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
                        </div>
                    <   div className='m-2 d-flex flex-row '>
                        <img className='in-logo m-1' src='https://s3-alpha-sig.figma.com/img/c000/7c2b/33c71569db418f9bf0423e0120209ee9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TDD9BioJnPmf9ED21O~Jbzmm2K3HMOL-bfsfKWg-6cubRxYTVp0uCTPSIOoEqvayZIEqD5YMX7rWY0Bvca0mmSMOYvF4OUlBevkMWgtIZ5QbGfwHqZ6IWqacykX8FzO6JoFcFlNsPlRq1JL~KGNQIFvnglR73AXpw5HhctWo71gHZ2v4aEYW4t2HahgJMI3eeuOVWgqPxZgEVdwSiBJoj6LpPOE61B71Ghb3g9pCfVw0h1FbBnLut6gPnro2di2Fw7SWaTaicv9BAjopFRyfoeBgWFdQt1eF5XR-s4vKAD9DtH98Ltf-S6vLI~CtXCEfCU-VltUy7EZnkHh-6dbLqQ__' alt="" />
                        <p className='ml-2 p '>Warehouse</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill arrow" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
        </svg>
                </div>
                </div>
                <div className='col-md-8 non-contain text-center'>
                <div className='d-flex flex-row justify-content-center mt-3 mb-3'>
                <img className='main-logo' src="https://s3-alpha-sig.figma.com/img/d761/c44f/321741d69c0a3f8dee89b594a0a71974?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZQGrbCyaOuEEd1LuoZXL8EQVgCq7G3WATrZW25ltxH4JaIMdpK8n1mVEzWDF5cizEcSC6iGME2y9r8zi3jFEaxeNYmGmyI2FIPJXQkSpg1VvPZxEpIJwYr5xwlFuIWDREKqUq6gChw6oP8KsbEJtbeF0a2s6FICIhv8H1B3Nnn5Yn7Ic0jDgQJC-F3b3mR7xRZvR16Q6uuI3c9b5R1BLZyEFgIGvE788NhuKjJ6AiMmHHUgHltKWr5fctZIlWapRpPTXSa2gWKVOVUpmsZV9bFd6C2eohmB7aiUBDWG24bpagHycvvpd9TBRyX-J9Xa7rlmRYe-LIULaEZkhH5tJfA__" alt="Digital Flake logo" />
                 </div>
                    <h1 className='text-center p-5'>Welcome to Digital Flakes</h1>
                </div>
            </div>
        </div>   
    </div>
  );
}
export default Home;
