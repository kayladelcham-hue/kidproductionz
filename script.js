const button=document.querySelector('.menu-toggle');const nav=document.querySelector('.mobile-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.hasAttribute('hidden');if(open){nav.removeAttribute('hidden');button.textContent='✕'}else{nav.setAttribute('hidden','');button.textContent='☰'}})}

if(window.location.pathname.includes('/hospitality')){
  const projectCta=document.querySelector('.project-cta');
  if(projectCta){
    const style=document.createElement('style');
    style.textContent=`
      .tiktok-ads-partner{padding:92px 0;background:var(--text);color:var(--bg);border-top:1px solid rgba(255,255,255,.12)}
      .tiktok-ads-partner .partner-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:10%;align-items:end}
      .tiktok-ads-partner .eyebrow{color:rgba(255,255,255,.58)}
      .tiktok-ads-partner h2{font-family:var(--display);font-size:clamp(58px,7vw,104px);font-weight:400;line-height:.88;margin:28px 0 0;color:#fff}
      .tiktok-ads-partner h2 em{font-style:normal;color:var(--blue)}
      .tiktok-ads-partner .partner-copy{max-width:500px}
      .tiktok-ads-partner .partner-copy>p{font-size:15px;line-height:1.8;color:rgba(255,255,255,.72);margin:0 0 26px}
      .tiktok-ads-partner .partner-credit{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:0 0 28px}
      .tiktok-ads-partner .partner-credit span{border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:15px 12px;font-size:11px;line-height:1.35;color:rgba(255,255,255,.72)}
      .tiktok-ads-partner .partner-credit strong{display:block;color:#fff;font-size:18px;margin-bottom:3px}
      .tiktok-ads-partner .partner-disclosure{font-size:10px!important;line-height:1.6!important;color:rgba(255,255,255,.45)!important;margin:16px 0 0!important}
      .tiktok-ads-partner .button.primary{display:inline-flex}
      @media(max-width:900px){.tiktok-ads-partner .partner-grid{grid-template-columns:1fr;gap:40px}.tiktok-ads-partner .partner-copy{max-width:620px}}
      @media(max-width:640px){.tiktok-ads-partner{padding:68px 0}.tiktok-ads-partner h2{font-size:58px}.tiktok-ads-partner .partner-credit{grid-template-columns:1fr}.tiktok-ads-partner .partner-credit span{padding:13px 14px}}
    `;
    document.head.appendChild(style);

    const section=document.createElement('section');
    section.className='tiktok-ads-partner';
    section.innerHTML=`<div class="content-wrap"><div class="partner-grid"><div><span class="eyebrow"><span class="blue-dot"></span>Paid distribution</span><h2>GREAT CONTENT.<br><em>NOW GET IT SEEN.</em></h2></div><div class="partner-copy"><p>Thinking about putting paid spend behind your content? Eligible new advertisers can currently access matching TikTok Ads promotional credits when they start through my TikTok for Business partner link.</p><div class="partner-credit"><span><strong>$200</strong>spend → $200 credit</span><span><strong>$500</strong>spend → $500 credit</span><span><strong>Up to $6K</strong>in matching credits</span></div><a class="button primary" href="https://getstartedtiktok.partnerlinks.io/s5j2gsrjo0eg" target="_blank" rel="sponsored noopener">Get TikTok Ad Credits →</a><p class="partner-disclosure">Affiliate disclosure: KidProductionz may earn a commission from eligible activity through this partner link. Promotional credits are subject to TikTok eligibility and program terms.</p></div></div></div>`;
    projectCta.parentNode.insertBefore(section,projectCta);
  }
}