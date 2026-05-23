import { FaTooth, FaBrush, FaStar, FaSyringe, FaProcedures, FaBaby, FaRegSmile } from 'react-icons/fa'
import { GiTooth } from 'react-icons/gi'
import { MdBrightness7 } from 'react-icons/md'

export const treatments = [
  { slug:'general-dentistry', title:'General Dentistry', icon: FaTooth,
    short:'Check-ups, fillings, cleanings, and preventive care',
    hero:'Comprehensive routine care to keep your smile healthy for life.',
    long:'Our general dentistry services form the foundation of lifelong oral health. From routine examinations and professional cleanings to fillings and preventive treatments, our team uses the latest equipment to ensure comfort and precision at every visit.',
    benefits:['Painless modern fillings','Digital X-rays with minimal radiation','Personalised oral hygiene plans','Early detection of issues'],
    procedure:['Comprehensive oral examination','Digital imaging if needed','Professional scaling & polishing','Tailored treatment plan','Follow-up care guidance'],
    faqs:[{q:'How often should I visit?',a:'Every 6 months for routine check-ups and cleanings.'},{q:'Are X-rays safe?',a:'Our digital X-rays use up to 90% less radiation than film X-rays.'}]
  },
  { slug:'dental-implants', title:'Dental Implants', icon: GiTooth,
    short:'Permanent tooth replacement with premium implants',
    hero:'Restore your smile with implants designed to last a lifetime.',
    long:'We offer premium-grade dental implants from world-leading manufacturers. Using guided surgical planning and 3D imaging, our implantologists deliver natural-looking, long-lasting results.',
    benefits:['Lifetime durability','Looks and feels natural','Preserves jawbone','Restores full chewing function'],
    procedure:['3D scan & planning','Implant placement','Healing period (3-6 months)','Crown attachment','Final review'],
    faqs:[{q:'Is it painful?',a:'The procedure is performed under local anaesthesia and is virtually painless.'},{q:'How long does it last?',a:'With proper care, implants can last a lifetime.'}]
  },
  { slug:'teeth-whitening', title:'Teeth Whitening', icon: MdBrightness7,
    short:'Professional-grade whitening for a brilliant smile',
    hero:'Brighten your smile by up to 8 shades in a single session.',
    long:'Our in-clinic whitening uses medical-grade gel and LED activation for fast, safe, and dramatic results — without sensitivity.',
    benefits:['Visible results in one session','Safe for enamel','Long-lasting brightness','Custom take-home kits available'],
    procedure:['Shade assessment','Gum protection','LED whitening sessions','Post-care guidance'],
    faqs:[{q:'Will it cause sensitivity?',a:'Our gentle formula minimises sensitivity for most patients.'}]
  },
  { slug:'orthodontics', title:'Orthodontics & Braces', icon: FaBrush,
    short:'Clear aligners, metal and ceramic braces',
    hero:'Straight teeth, confident smiles — at any age.',
    long:'From traditional braces to invisible aligners, our orthodontists craft personalised plans to align your smile with precision and discretion.',
    benefits:['Improved bite & function','Confidence boost','Multiple options for every lifestyle','Faster results with modern tech'],
    procedure:['Initial consultation','Digital impressions','Treatment plan','Regular adjustments','Retention phase'],
    faqs:[{q:'How long does treatment take?',a:'Most cases finish within 12–24 months depending on complexity.'}]
  },
  { slug:'cosmetic-dentistry', title:'Cosmetic Dentistry', icon: FaStar,
    short:'Veneers, bonding, and full smile makeovers',
    hero:'Sculpt the smile you have always dreamed of.',
    long:'From porcelain veneers to complete smile makeovers, our cosmetic specialists blend art and science to deliver naturally beautiful results.',
    benefits:['Hollywood-quality results','Minimally invasive','Long-lasting porcelain','Custom shade matching'],
    procedure:['Smile design preview','Tooth preparation','Lab-crafted veneers','Final bonding'],
    faqs:[{q:'Will veneers look natural?',a:'Yes — they are crafted to match your face shape and skin tone.'}]
  },
  { slug:'root-canal', title:'Root Canal Treatment', icon: FaSyringe,
    short:'Pain-free root canal therapy by specialists',
    hero:'Save your natural tooth with modern, painless endodontics.',
    long:'Using rotary endodontics and microscopic precision, our root canal treatments are typically completed in a single visit with minimal discomfort.',
    benefits:['Single-visit treatment','Pain relief','Saves natural tooth','High success rate'],
    procedure:['Diagnosis with X-ray','Anaesthesia','Pulp removal','Canal cleaning & filling','Crown placement'],
    faqs:[{q:'Does it hurt?',a:'No — modern techniques make it about as comfortable as a filling.'}]
  },
  { slug:'oral-surgery', title:'Oral Surgery', icon: FaProcedures,
    short:'Extractions, wisdom teeth, and minor surgeries',
    hero:'Specialist oral surgery in a calm, sterile environment.',
    long:'From wisdom teeth removal to bone grafting, our maxillofacial surgeons perform procedures with precision and patient comfort as the priority.',
    benefits:['Conscious sedation available','Fast recovery protocols','Sterile surgical suite','Specialist surgeons'],
    procedure:['Consultation & imaging','Surgical planning','Procedure under sedation','Post-op care'],
    faqs:[{q:'How long is recovery?',a:'Most patients recover within 5-7 days.'}]
  },
  { slug:'paediatric-dentistry', title:'Paediatric Dentistry', icon: FaBaby,
    short:'Gentle, child-friendly dental care',
    hero:'A magical first dental experience for your little ones.',
    long:'Our child-friendly clinic features specially trained paediatric dentists, fun environments, and gentle techniques designed to build positive lifelong dental habits.',
    benefits:['Kid-friendly clinic design','Specialist training','Behaviour management','Preventive focus'],
    procedure:['Welcome & tour','Gentle examination','Cleaning & fluoride','Educational fun'],
    faqs:[{q:'At what age should kids visit?',a:'By their first birthday or when their first tooth appears.'}]
  },
  { slug:'facial-aesthetics', title:'Facial Aesthetics', icon: FaRegSmile,
    short:'Botox, fillers, and non-surgical facial treatments',
    hero:'Subtle enhancements that complement your smile.',
    long:'Performed by trained clinicians, our facial aesthetics treatments include Botox and dermal fillers to harmonise your smile with your overall facial features.',
    benefits:['Natural-looking results','Quick procedures','Minimal downtime','Performed by clinicians'],
    procedure:['Consultation','Facial analysis','Treatment','Follow-up'],
    faqs:[{q:'Is it safe?',a:'All treatments are performed by trained, certified clinicians using approved products.'}]
  }
]
