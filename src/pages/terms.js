import React from 'react';
import {Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Terms = () => {
  return (
    <div style={{width:"90%", margin: '0 auto'}}>
    <Typography variant="h6" gutterBottom sx={{marginTop:'5px', padding:'20px'}} > 利用規約 </Typography> 
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        エン・ジャパン株式会社（以下「エン・ジャパン」といいます）が提供する転職支援サービスのご利用にあたっては、以下の利用規約をご確認、ご承諾いただいたうえでお申込みくださいますようお願い致します。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第1条（転職支援サービス） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        転職支援サービスとは、エン・ジャパンが運営する「エン転職」及び「ミドルの転職」をはじめとする転職サイト、並びに「エン エージェント」をはじめとする人材紹介サービスの総称をいいます。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第2条（会員） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.転職支援サービスの会員（以下「会員」といいます」）とは、エン・ジャパンが定める方法により転職支援サービスの利用申込を行ない、エン・ジャパンがこれを承諾した利用者のことをいいます。<br />
    2.会員は利用申込の時点で、本規約の内容を全て承諾しているものとみなします
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第3条（会員の責任）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.会員は、自らの意思によってのみ転職支援サービスに登録し、会員となるものとします。<br />
    2.会員は転職支援サービスにて不備・齟齬がないように自らの情報を登録するものとします。登録情報の不備・齟齬により発生した事項については、エン・ジャパンは一切責任を負いません。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第5条（登録の取り消し） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    会員が以下のいずれかに該当した場合は、エン・ジャパンの判断にて登録の取り消しを行ない、転職支援サービスの提供を終了する場合があります。<br />
    (1)本規約の定めに違反した場合 <br />
    (2)虚偽の情報を提供または登録した場合 <br />
    (3)正当な理由なく、エン・ジャパンからの連絡にご返信いただけない場合 <br />
    (4)転職支援サービスを通じて紹介を受けた求人企業に対し、エン・ジャパンの承諾なく直接連絡をとり、採用選考を受けるまたは入社する行為があった場合（求人広告に対する応募申込など、会員が直接連絡をとることを前提としているサービスは除く）<br />
    (5)正当な理由なく、面談もしくは選考試験・面接を事前の連絡なく欠席し、または採用内定を受諾後に辞退する等の行為があった場合 <br />
    (6)求人企業、エン・ジャパンまたは第三者に不利益を与える行為、誹謗・中傷・苦情・差別発言等の不適切な行為、または名誉、信用を損なう行為があった場合 <br />
    (7)犯罪に結びつく行為があった場合 <br />
    (8)法令または公序良俗に反する行為があった場合 <br />
    (9)転職支援サービスを利用した営業活動、営利を目的とする情報提供行為があった場合 <br />
    (10)転職支援サービスまたはエン・ジャパンのその他のサービスの運営を妨げる行為があった場合 <br />
    (11)エン・ジャパンの信用を毀損するような行為があった場合 <br />
    (12)転職支援サービスの範囲を超える要望を繰り返し行なった場合 <br />
    (13)その他、客観的、合理的事由によりエン・ジャパンが不適切と判断する行為があった場合 <br />
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第6条（職業紹介サービス） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.転職支援サービスにてエン・ジャパンから会員に提供する、一般には公開されていない求人案件及びその関連情報については、会員は第三者へ提供・開示等を行なえないものとします。<br />
    2.転職支援サービスのうち、エン・ジャパンのコンサルタントが応募受付、面接日時の調整及び選考結果の連絡等を行なっている案件については、求人企業への連絡は原則全てエン・ジャパンが行ない、会員本人から求人企業への直接の連絡は行なうことはできません（但し、面接当日などの緊急連絡が必要な場合は、原則として直接連絡を行なっていただきます）。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第7条（求人照合） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    エン・ジャパンは転職支援サービスの提供にあたり、会員の登録内容と、求人企業が希望する求人条件とのマッチングを行ないますが、検討基準や判断理由等をお伝えすることはできません。また、会員から求人企業への応募依頼を受け付けた場合であっても、求人企業より示された選考基準などを参考にして当該求人への適合度合いを判断した結果、エン・ジャパンから当該求人への推薦を行なわない場合や、求人企業に代わり求人条件に適合しない旨のご連絡を行なう場合があります。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第8条（求人企業への情報提供） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    会員が求人企業への応募をエン・ジャパンに依頼した場合、エン・ジャパンは事前に本人の同意を得たうえで、会員の過去の賞罰等についての情報を当該求人企業に提供する場合があります。なお、同意を得られない場合は、転職支援サービスを提供できなくなる場合があります。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第9条（求人企業への事実確認） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.エン・ジャパンは、求人企業または職業紹介会社から通知される労働条件その他契約内容に関する情報と、会員から提供される当該情報に不一致がある場合、求人企業または職業紹介会社に事実確認を行なう場合があります。<br />
    2.エン・ジャパンは、転職支援サービスの運営に必要な範囲で、会員の転職活動状況及び転職支援サービスを通じて応募を行なった求人企業での入退社の状況等を、求人企業または職業紹介会社に確認する場合があります。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第10条（個人情報の取り扱い）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        エン・ジャパンは、別途定める「転職支援サービス プライバシーポリシー」に従い、会員の個人情報を適切に取得・利用・提供・管理します。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第11条（免責）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.エン・ジャパンに故意・重過失がない限り、以下の事項についてエン・ジャパンは免責されます。<br />
    (1)転職支援サービスは、会員の就職・転職を保証するものではないこと <br />
    (2)転職支援サービスにおいて提供される求人情報は第三者の責任で提供されるものであり、当該情報の真実性、正確性、合法性、安全性、適切性     及び有用性についてエン・ジャパンは何ら保証できないこと <br />
    (3)会員と第三者との間での紛争が生じた場合には、会員の責任と負担で当該第三者と協議・解決を図ること <br />
    (4)会員は、自己の責任に基づいて求人企業と雇用契約を結ぶこと <br />
    (5)天災地変やネットワーク障害、通常講ずるべきウィルス対策では防止できないウィルス被害及びその他の不可抗力により発生した損害 <br />
    (6)会員が転職支援サービスを利用したことかつエン・ジャパンの責めに帰すべき事由によって会員に損害が発生した場合、エン・ジャパンが責任を負うのは直接かつ現実的に発生した損害の範囲に限定されること <br />
    2.エン・ジャパンは、転職支援サービスの適正な運営及び管理のために必要な全ての権限を有するものとします。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第12条（登録の抹消）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.会員は自らの意思によりいつでも転職支援サービスを退会することができます。<br />
    2.退会の意思がなくとも、転職支援サービスの会員個人の画面に１年以上ログインがない場合は、自動的に登録を抹消される場合があります。<br />
    3.登録されたメールアドレスが会員本人以外の第三者の所有となった旨の連絡、もしくは登録したメールアドレスが存在しない場合で、当該最終ログインから１ヵ月以上が経過した場合、登録を抹消される場合があります。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第13条（損害賠償） </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    会員は、本規約の定めに違反してエン・ジャパンまたは第三者に直接かつ現実的に損害を与えた場合は、その損害を賠償するものとします。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第14条（サービス及び規約の変更等）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    1.エン・ジャパンは、会員への事前の通知なくして、転職支援サービスの内容変更または一時的な中断を行なうことができます。<br />
    2.エン・ジャパンは一定の予告期間をもって会員に通知のうえ、転職支援サービスの提供を長期的に中断もしくは終了することができます。但し、やむを得ない事情がある場合は、予告を行なわない場合があります。<br />
    3.エン・ジャパンは、会員の事前の承認を得ることなく本規約を随時変更することができます。本規約の変更については、転職支援サービスに関するサイト上に公示した時点から効力を発するものとします。なお、会員が本規約の変更後に、転職支援サービスを利用することにより、本規約の変更に承諾いただいたものとみなします。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 第15条（反社会的勢力の排除）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    会員は、転職支援サービスを利用するにあたり、エン・ジャパンに対して次に定める事項を表明し、保証するものとします。また、かかる表明・保証に違反した場合、エン・ジャパンは催告を要することなく直ちに、転職支援サービスの提供を打ち切り、その他エン・ジャパンが別途会員と締結している契約及び申込を解約できるものとします。<br />
    (1)会員が反社会的勢力（「暴力団員による不当な行為の防止等に関する法律」に定義する暴力団及びその関係団体その他の反社会的団体または勢力をいうものとします）ではないこと <br />
    (2)反社会的勢力を利用しないこと及びこれに準ずる行為をしないこと <br />
    (3)反社会的勢力に資金提供を行なわないこと及びこれに準ずる行為をしないこと <br />
    (4)反社会的勢力を名乗る等してエン・ジャパンの名誉等の毀損、業務妨害、不当要求行為、またはこれに準ずる行為をしないこと
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}>第16条（管轄裁判所）</Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
    本規約に関する準拠法は日本法とし、本規約に関して生じる一切の紛争については、東京簡易裁判所または東京地方裁判所を第一審の合意管轄裁判所とします。
    </Typography>

    <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}> 【本規約の制定日】 </Typography>
    <Typography variant="body2" gutterButtom sx={{textAlign: "left", marginTop: '10px', marginBottom:'30px'}}> 
        2015年8月24日
    </Typography>

    
    <Button component={Link} to="/" variant="contained" color="primary" style={{marginBottom:'50px', marginTop:'20px'}}>
    前の画面に戻る
  </Button>
</div>
  );
};

export default Terms;