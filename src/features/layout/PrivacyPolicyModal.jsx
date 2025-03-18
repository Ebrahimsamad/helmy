import React from "react";

const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg relative">
        {/* زر الإغلاق مثبت في الأعلى */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full transition"
        >
          ×
        </button>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <h1 className="text-3xl font-bold text-center text-[#2d5356] mb-6">
            سياسة الخصوصية
          </h1>
          <p className="text-[#2d5356] text-lg mb-4">
            نرحب بكم في عيادة <span className="font-semibold">غذائك دوائك</span>{" "}
            بإشراف الدكتور <span className="font-semibold">محمد حلمي</span>.
            نحرص على حماية خصوصيتكم وبياناتكم الشخصية عند استخدام خدماتنا، ونوضح
            لكم في هذه السياسة كيفية جمع واستخدام معلوماتكم.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d5356] mt-6 mb-2">
            المعلومات التي نجمعها
          </h2>
          <p className="text-[#2d5356]">
            عند التسجيل أو التواصل معنا، قد نقوم بجمع معلومات مثل الاسم، رقم
            الهاتف، والبريد الإلكتروني، بالإضافة إلى التفاصيل المتعلقة
            بالاستشارات والخدمات المقدمة.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d5356] mt-6 mb-2">
            استخدام المعلومات
          </h2>
          <p className="text-[#2d5356]">
            نستخدم معلوماتكم الشخصية لتحسين تجربتكم، تقديم الاستشارات الغذائية
            المناسبة، إرسال خطط الحمية، وتزويدكم بالمكملات الغذائية اللازمة
            وفقاً لحالتكم الصحية.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d5356] mt-6 mb-2">
            سياسة الدفع والاسترجاع
          </h2>
          <p className="text-[#2d5356]">
            عند حجز استشارة أو استلام خطة الحمية أو المكملات الغذائية، فإنك
            توافق على الشروط التالية:
          </p>
          <ul className="list-disc list-inside text-[#2d5356] mt-2">
            <li>
              لا يمكن استرداد قيمة الباقة أو استرجاع المبلغ بعد إجراء الاستشارة
              أو استلام خطة الحمية أو المكملات الغذائية.
            </li>
            <li>
              بمجرد الدفع والاستفادة من الخدمة، لا يحق لك المطالبة باسترجاع
              المبلغ.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2d5356] mt-6 mb-2">
            حماية البيانات
          </h2>
          <p className="text-[#2d5356]">
            نلتزم بحماية بياناتكم الشخصية وعدم مشاركتها مع أي طرف ثالث دون
            موافقتكم، إلا إذا كان ذلك مطلوبًا قانونيًا.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d5356] mt-6 mb-2">
            تواصل معنا
          </h2>
          <p className="text-[#2d5356]">
            إذا كان لديك أي استفسارات حول سياسة الخصوصية الخاصة بنا، يمكنك
            التواصل معنا عبر البريد الإلكتروني أو الهاتف.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
