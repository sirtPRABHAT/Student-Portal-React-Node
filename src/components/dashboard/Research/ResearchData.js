import voiceCard from '../../images/research-cards/voice-card.svg';
import aiCard from '../../images/research-cards/ai-card.svg';
import negativeCard from '../../images/research-cards/negative-card.svg';
import auditingCard from '../../images/research-cards/auditing-card.svg';
import voiceModal from '../../images/research-cards/voice-modal.svg';
import aiModal from '../../images/research-cards/ai-modal.svg';
import negativeModal from '../../images/research-cards/negative-modal.svg';
import auditingModal from '../../images/research-cards/auditing-modal.svg';


export const researchData = [
    {
        id: 1,
        banner: voiceCard,
        info: 'An effective data mining technique for automated voice recognition of patients',
        modalHeader__Img: voiceModal,
        modalHeader: 'An effective data mining technique for automated voice recognition of patients',
        background: [
            'The most important way of human communication is speech. Speech comprises of many words, which in turn comprise of many letters associated with voices. When spoken, these voices spread in the air in the form of small circle-like waves. These waves expand bit by bit, and spread over longer distances until they fully disappear.',

            'Automatic speech recognition or simply speech recognition involves graphically representing the frequency of these speech waves as a function of time. It is an automatic speech processing area, which allows machines to comprehend the speech of a user and convert it into a sequence of words using a software program. This creates a sort of natural communication between a machine and humans.',
        ],
        objectives: [
            'Develop a device for medical practitioners to automate voice recognition on the basis of data mining. It would enable doctors to jot down patient notes in their own voice into their electronic health record systems.',
            'The fully voice-enabled device would help medical facilities and healthcare centres avoid the complication of manually entering patient data. This would reduce errors, enhance quality of medical care, lower expenses (by removing medical transcription costs), and increase revenues.',
            'Such documentation enables the secure storage of patient’s medical history, initial evaluations, lab results, daily notes, progress notes, patient reports, referral notes, visit summaries, discharge notes, etc.',
            'The documentation using medical voice recognition technology should be enabled by a massive database of medical vocabularies from most specialities and subspecialties. Hence medical practitioners will also be able to dictate with confidence.',
            'The device should offer high accuracy with regards to entering the words dictated to it. Medical practitioners should be able to operate any function or give voice commands just with the touch of buttons. So, medical professionals are disentangles from their screen and keyboards, and spend quality time with patients.',
            'Since time spent on documentation is drastically reduced, it increases the medical practitioner’s practice volume. This enables them to attend to more patients, and thereby, increase revenue generation.'
        ],
        summary1: 'Voice is one of the major communication signals that need to be interfaced with computational systems for various purposes, especially in medical transcription and health care centres. The voice signal must be analysed to acquire a desired visualization. The proposed project relates to developing a device to automate voice recognition on the basis of data mining. It would enable doctors to jot down patient notes in their own voice into their electronic health record systems.',
    },
    {
        id: 2,
        banner: aiCard,
        info: 'Artificial Intelligence based big data analytics tool for market research',
        modalHeader__Img: aiModal,
        modalHeader:'Artificial Intelligence based big data analytics tool for market research',
    },
    {
        id: 3,
        banner: negativeCard,
        info: 'Negative Information Extraction System for medical text data',
        modalHeader__Img: negativeModal,
        modalHeader: 'Negative Information Extraction System for medical text data',
        background: [
            'In NLP, the ND method has been widely applied in biomedical research, particularly in unstructured text data. According to Eleatic philosophers, the early Buddhists in India had introduced the first explorations of negative concepts in ontology. The Greek philosopher and scientist Aristotle, in his theory of negation, is rooted it in shifting the issue from the domain of ontology to logic and language. Based on the work of Ou and Patrick in 2015, the ND algorithms are classified into three subtasks: lexicon, syntax and machine learning. Lexicon- or rule-based methods are one of the earliest and still widely used approaches among the clinical NLP challenges. The different lexicon-based ND algorithm discovered early on NegEx, NegExpander, NegFinder, and NegHunter. The syntactic parser is one of the language processing methods, which is different from lexicon-based ND methods.',
            
            'Natural Language Processing (NLP) is an interdisciplinary field concerned with the processing of languages by computing machineries. Information Extraction (IE) is a subfield of NLP that is concerned with identifying predefined types of information from text. Negation Detection (ND) represents an important step in the automatic processing of any language as it ensures the crucial task of identifying the negative sentences in a particular text. The aim of the project is to analyse the state-of-the-art ND method for extracting semantic information from biomedical and clinical text data.',
        ],
        objectives: [
            'Develop the state-of-the-art algorithms in negation detection for processing medical and biomedical documents. Further reduce the efforts required for explicit feature engineering.',
            
            'Present a  method for negation scope detection that has been important to distinguish the entire sentence between positive and negative contexts. It should give the best results for the sentences included four negation words: cannot, free, no, not, resolved and without.'
        ],
        summary1: 'Negation is commonly used in medical records to indicate that the patient does not suffer from a particular medical condition. Early work in the task of negation scope detection primarily focused on first finding the negation terms and then finding the named entity in a sentence. Unlike typical negation scope detection, this project primarily focused on negation scope, which starts from named entity to negation terms.',
    },
    {
        id: 4,
        banner: auditingCard,
        info: 'Auditing protocol for secured data storage in cloud',
        modalHeader__Img: auditingModal,
        modalHeader: 'Auditing protocol for secured data storage in cloud',
        background: [
            'Many businesses, however, are currently unable to use cloud infrastructure because of a lack of security, control, and manageability of the computing capacity rented from the cloud infrastructure providers. These problems prevent such businesses from maximizing their use of cloud infrastructure, which includes virtual server instances, storage, and Internet bandwidth. Enterprises also have difficulty identifying what cloud resources they should use, and how they should use them, such that usage is consistent with the technical, operational, and business needs of the enterprise.',

            'In cloud computing, data owners host their data on cloud servers and users (data consumers) can access the data from cloud servers. Due to the data outsourcing, the new data hosting service also introduces new security challenges, which requires an independent auditing service to check the data integrity in the cloud. Some existing remote integrity checking methods can only serve for static archive data and, thus, cannot be applied to the auditing service since the data in the cloud can be dynamically updated. Thus, an efficient and secure dynamic auditing protocol is desired to convince data owners that the data are correctly stored in the cloud. In this project, your aim is to design an auditing framework for cloud storage systems and propose an efficient and privacy-preserving auditing protocol. The auditing protocol should also be able to support batch auditing for both multiple owners and multiple clouds, without using any trusted organizer.',
        ],
        objectiveText: 'To enable privacy-preserving public auditing for cloud data storage under the aforementioned model, protocol design should achieve the following security and performance guarantees.',
        objectives: [
            'Public auditability: To allow TPA to verify the correctness of the cloud data on demand without retrieving a copy of the whole data or introducing additional online burden to the cloud users.',
            'Storage correctness: To ensure that there exists no cheating cloud server that can pass the TPA’s audit without indeed storing users’ data intact.',
            'Privacy-preserving: To ensure that the TPA cannot derive users’ data content from the information collected during the auditing process.',
            'Batch auditing: To enable TPA with secure and efficient auditing capability to cope with multiple auditing delegations from possibly large number of different users simultaneously.',
            'LightWeight: To allow TPA to perform auditing with minimum communication and computation overhead'
        ],
        summary1: 'In previous system, the authors extended their dynamic auditing scheme to be privacy preserving and support the batch auditing for multiple owners. However, due to the large number of data tags, their auditing protocols may incur a heavy storage overhead on the server. In later proposed a cooperative provable data possession scheme that can support the batch auditing for multiple clouds and also extend it to support the dynamic auditing. However, their scheme cannot support the batch auditing for multiple owners.',
        summary2: 'Owners can check the data integrity based on two-party storage auditing protocols. In cloud storage system, however, it is inappropriate to let either side of cloud service providers or owners conduct such auditing, because none of them could be guaranteed to provide unbiased auditing result. In this situation, third-party auditing is a natural choice for the storage auditing in cloud computing. A third party auditor (auditor) that has expertise and capabilities can do a more efficient work and convince both cloud service providers and owners. For the third-party auditing in cloud storage systems, there are several important requirements that have been proposed in some previous works.',
        summary_li: ['This method may leak the data content to the auditor because it requires the server to send the linear combinations of data blocks to the auditor.', 'The authors extended their dynamic auditing scheme to be privacy preserving and support the batch auditing for multiple owners. However, due to the large number of data tags, their auditing protocols may incur a heavy storage overhead on the server'],
        summary3: 'An efficient and secure dynamic auditing protocol, which can meet the above listed requirements should be proposed.',
    },
]