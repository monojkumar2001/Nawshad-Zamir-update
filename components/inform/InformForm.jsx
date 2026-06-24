"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { informFormCopy } from "@/data/inform";

const API = "/api/inform";
const FILE_ICONS = { image: "🖼️", camera_photo: "📸", video: "🎥", audio: "🎤" };

const SELECT_CHEVRON =
  "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%23999%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22/%3E%3C/svg%3E')]";

const fieldControlClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.08] px-4 py-3 text-[15px] text-white outline-none transition-all duration-250 placeholder:text-[13px] placeholder:text-white/30 focus:border-[#ffd200] focus:shadow-[0_0_0_3px_rgba(255,210,0,0.4)] disabled:cursor-not-allowed disabled:opacity-55 md:text-base";

const inputClass = fieldControlClass;
const selectClass = `${fieldControlClass} ${SELECT_CHEVRON} cursor-pointer appearance-none bg-[length:12px_8px] bg-[position:right_16px_center] bg-no-repeat pr-10`;
const textareaClass = `${fieldControlClass} min-h-[130px] resize-y leading-relaxed`;

const errorControlClass = "border-[#ff4757] focus:border-[#ff4757] focus:shadow-[0_0_0_3px_rgba(255,71,87,0.25)]";

async function fetchInform(action, params = "") {
  const response = await fetch(`${API}?action=${action}${params}`);
  return response.json();
}

function CameraIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function Field({ label, required, error, children, className = "" }) {
  return (
    <div className={`relative mb-[18px] ${className}`}>
      <label className="mb-2 block text-sm font-semibold text-[#ffd200] md:text-[13px]">
        {label}
        {required ? <span className="ml-0.5 text-[#ff4757]">*</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-[#ff4757]">{error}</p> : null}
    </div>
  );
}

function controlClass(base, hasError) {
  return hasError ? `${base} ${errorControlClass}` : base;
}

export default function InformForm() {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [unions, setUnions] = useState([]);
  const [categories, setCategories] = useState([]);

  const [divisionId, setDivisionId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [upazilaId, setUpazilaId] = useState("");
  const [unionId, setUnionId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const [fieldErrors, setFieldErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [uploadTab, setUploadTab] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileListItems, setFileListItems] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  const [cameraLoading, setCameraLoading] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraMessage, setCameraMessage] = useState("ক্যামেরা চালু হচ্ছে...");

  const [recording, setRecording] = useState(false);
  const [recTimer, setRecTimer] = useState("00:00");
  const [recStatus, setRecStatus] = useState("রেকর্ডিং শুরু হচ্ছে...");
  const [audioPlaybackUrl, setAudioPlaybackUrl] = useState("");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recIntervalRef = useRef(null);
  const recSecondsRef = useRef(0);
  const fileInputRef = useRef(null);
  const uploadedFilesRef = useRef([]);

  useEffect(() => {
    uploadedFilesRef.current = uploadedFiles;
  }, [uploadedFiles]);

  useEffect(() => {
    async function init() {
      const [divisionData, categoryData] = await Promise.all([
        fetchInform("get_divisions"),
        fetchInform("get_categories"),
      ]);
      setDivisions(Array.isArray(divisionData) ? divisionData : []);
      setCategories(Array.isArray(categoryData) ? categoryData : []);
    }
    init();
  }, []);

  const clearFieldError = (field) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const stopCamera = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraReady(false);
    setCameraMessage("ক্যামেরা বন্ধ। আবার ছবি তুলতে ট্যাবে ক্লিক করুন।");
    setCameraLoading(true);
  }, []);

  const startCamera = useCallback(async () => {
    setCameraLoading(true);
    setCameraMessage("ক্যামেরা চালু হচ্ছে...");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraLoading(false);
      setCameraReady(true);
    } catch {
      setCameraMessage(
        "❌ ক্যামেরা অ্যাক্সেস করতে ব্যর্থ। অনুগ্রহ করে ব্রাউজারে ক্যামেরা পারমিশন দিন।"
      );
      setCameraLoading(true);
      setCameraReady(false);
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
    if (recIntervalRef.current) {
      clearInterval(recIntervalRef.current);
      recIntervalRef.current = null;
    }
    setRecStatus("রেকর্ডিং সম্পন্ন");
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
      stopRecording();
      if (audioPlaybackUrl) URL.revokeObjectURL(audioPlaybackUrl);
    };
  }, [audioPlaybackUrl, stopCamera, stopRecording]);

  const addFileToList = useCallback((data) => {
    setUploadedFiles((prev) => [
      ...prev,
      {
        file_name: data.file_name,
        file_path: data.file_path || "",
        file_type: data.file_type,
        file_size: data.file_size,
        mime_type: data.mime_type,
        drive_id: data.drive_id || null,
        drive_link: data.drive_link || null,
      },
    ]);
  }, []);

  const addTempFile = (id, fileName, fileSize, fileType) => {
    setFileListItems((prev) => [
      ...prev,
      { id, fileName, fileSize, fileType, status: "uploading", driveLink: null },
    ]);
  };

  const updateTempFile = (id, data) => {
    setFileListItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "done",
              fileSize: data.file_size,
              driveLink: data.drive_link || null,
            }
          : item
      )
    );
  };

  const removeTempFile = (id) => {
    setFileListItems((prev) => prev.filter((item) => item.id !== id));
  };

  const uploadFile = async (file, fileType) => {
    const tempId = `temp_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    addTempFile(tempId, file.name, file.size, fileType);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_type", fileType);

    try {
      const response = await fetch(`${API}?action=upload_file`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        updateTempFile(tempId, data);
        addFileToList(data);
      } else {
        removeTempFile(tempId);
        alert(data.error || "আপলোড ব্যর্থ");
      }
    } catch {
      removeTempFile(tempId);
    }
  };

  const handleFiles = (files) => {
    Array.from(files).forEach((file) => {
      let fileType = "image";
      if (file.type.startsWith("video/")) fileType = "video";
      else if (file.type.startsWith("audio/")) fileType = "audio";
      uploadFile(file, fileType);
    });
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `camera_${Date.now()}.jpg`, { type: "image/jpeg" });
        uploadFile(file, "camera_photo");
      },
      "image/jpeg",
      0.85
    );
  };

  const toggleRecording = async () => {
    if (!mediaRecorderRef.current || mediaRecorderRef.current.state === "inactive") {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
        mediaRecorderRef.current = recorder;
        audioChunksRef.current = [];

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) audioChunksRef.current.push(event.data);
        };

        recorder.onstop = async () => {
          stream.getTracks().forEach((track) => track.stop());
          const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          if (audioPlaybackUrl) URL.revokeObjectURL(audioPlaybackUrl);
          setAudioPlaybackUrl(URL.createObjectURL(blob));

          const formData = new FormData();
          formData.append("audio", blob, `recording_${Date.now()}.webm`);
          try {
            const response = await fetch(`${API}?action=upload_audio_blob`, {
              method: "POST",
              body: formData,
            });
            const data = await response.json();
            if (data.success) addFileToList(data);
          } catch {
            /* ignore */
          }
        };

        recorder.start();
        setRecording(true);
        recSecondsRef.current = 0;
        setRecTimer("00:00");
        setRecStatus("রেকর্ডিং চলছে...");
        recIntervalRef.current = setInterval(() => {
          recSecondsRef.current += 1;
          const minutes = String(Math.floor(recSecondsRef.current / 60)).padStart(2, "0");
          const seconds = String(recSecondsRef.current % 60).padStart(2, "0");
          setRecTimer(`${minutes}:${seconds}`);
        }, 1000);
      } catch {
        alert("মাইক্রোফোন অ্যাক্সেস করতে ব্যর্থ। অনুগ্রহ করে মাইক্রোফোন পারমিশন দিন।");
      }
      return;
    }

    stopRecording();
  };

  const switchUploadTab = (tab) => {
    if (uploadTab === "camera" && tab !== "camera") stopCamera();
    if (uploadTab === "audio" && tab !== "audio" && recording) stopRecording();

    setUploadTab(tab);

    if (tab === "camera") {
      setTimeout(() => startCamera(), 100);
    }
    if (tab === "audio" && !recording) {
      setTimeout(() => toggleRecording(), 100);
    }
  };

  const uploadTabClass = (tab) =>
    `flex items-center gap-1.5 rounded-lg border px-4 py-2.5 text-[13px] transition-all duration-200 md:justify-center ${
      uploadTab === tab
        ? "border-[#ffd200] bg-[rgba(255,107,53,0.2)] text-[#ffd200]"
        : "border-white/10 bg-white/[0.08] text-[#e0e0e0] hover:border-[#ffd200] hover:bg-[rgba(255,107,53,0.15)]"
    }`;

  const handleDivisionChange = async (value) => {
    setDivisionId(value);
    setDistrictId("");
    setUpazilaId("");
    setUnionId("");
    setDistricts([]);
    setUpazilas([]);
    setUnions([]);
    clearFieldError("divisionId");
    if (value) {
      const data = await fetchInform("get_districts", `&division_id=${value}`);
      setDistricts(Array.isArray(data) ? data : []);
    }
  };

  const handleDistrictChange = async (value) => {
    setDistrictId(value);
    setUpazilaId("");
    setUnionId("");
    setUpazilas([]);
    setUnions([]);
    clearFieldError("districtId");
    if (value) {
      const data = await fetchInform("get_upazilas", `&district_id=${value}`);
      setUpazilas(Array.isArray(data) ? data : []);
    }
  };

  const handleUpazilaChange = async (value) => {
    setUpazilaId(value);
    setUnionId("");
    setUnions([]);
    clearFieldError("upazilaId");
    if (value) {
      const data = await fetchInform("get_unions", `&upazila_id=${value}`);
      setUnions(Array.isArray(data) ? data : []);
    }
  };

  const validate = () => {
    const errors = {};
    if (!divisionId) errors.divisionId = "বিভাগ নির্বাচন করুন";
    if (!districtId) errors.districtId = "জেলা নির্বাচন করুন";
    if (!upazilaId) errors.upazilaId = "উপজেলা নির্বাচন করুন";
    if (!unionId) errors.unionId = "ইউনিয়ন/ওয়ার্ড নির্বাচন করুন";
    if (!categoryId) errors.categoryId = "ক্যাটাগরি নির্বাচন করুন";
    if (!name.trim()) errors.name = "নাম লিখুন";
    if (!mobile.trim()) errors.mobile = "সঠিক মোবাইল নম্বর দিন";
    if (!complaint.trim()) errors.complaint = "মতামত/অভিযোগ লিখুন";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validate()) return;

    setSubmitting(true);
    const payload = {
      division_id: divisionId,
      district_id: districtId,
      upazila_id: upazilaId,
      union_id: unionId,
      category_id: categoryId,
      name: name.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      complaint: complaint.trim(),
      uploaded_files: uploadedFilesRef.current,
    };

    try {
      const response = await fetch(`${API}?action=submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message || "আপনার মতামত সফলভাবে জমা হয়েছে।");
        setDivisionId("");
        setDistrictId("");
        setUpazilaId("");
        setUnionId("");
        setCategoryId("");
        setName("");
        setMobile("");
        setEmail("");
        setComplaint("");
        setDistricts([]);
        setUpazilas([]);
        setUnions([]);
        setUploadedFiles([]);
        setFileListItems([]);
        setUploadTab(null);
        stopCamera();
        stopRecording();
      } else {
        setErrorMessage(data.error || "সাবমিশন ব্যর্থ হয়েছে");
      }
    } catch {
      setErrorMessage("নেটওয়ার্ক ত্রুটি। অনুগ্রহ করে আবার চেষ্টা করুন।");
    }

    setSubmitting(false);
  };

  return (
    <div className="relative mx-auto my-[30px] max-w-[1100px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#33ce86] via-[#0c7e43] to-[#33ce86] text-[#e0e0e0] before:pointer-events-none before:absolute before:-right-[20%] before:-top-1/2 before:h-[500px] before:w-[500px] before:rounded-full before:bg-[radial-gradient(circle,rgba(255,107,53,0.08)_0%,transparent_70%)] max-md:mx-2.5 max-md:rounded-xl max-[400px]:mx-1.5 max-[400px]:rounded-[10px]">
      <div className="w-full overflow-hidden rounded-t-2xl max-md:rounded-t-xl max-[400px]:rounded-t-[10px]">
        <Image
          src="/assets/images/inform-banner.png"
          alt="মতামত/অভিযোগ ব্যানার"
          width={1100}
          height={420}
          className="block h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="px-12 py-10 max-md:px-4 max-md:py-5 max-[400px]:px-3 max-[400px]:py-4">
        <h2 className="font-bengali mb-2 text-[28px] font-extrabold tracking-tight text-white max-md:text-xl max-[400px]:text-lg">
          {informFormCopy.title}
        </h2>
        <p className="font-bengali mb-8 text-sm leading-relaxed text-white/55 max-md:mb-6 max-md:text-[13px]">
          {informFormCopy.subtitle}
        </p>

        {successMessage ? (
          <div className="font-bengali mb-5 rounded-[10px] border border-[rgba(46,213,115,0.3)] bg-[rgba(46,213,115,0.15)] px-5 py-4 text-sm text-[#2ed573]">
            {successMessage}
          </div>
        ) : null}
        {errorMessage ? (
          <div className="font-bengali mb-5 rounded-[10px] border border-[rgba(255,71,87,0.3)] bg-[rgba(255,71,87,0.15)] px-5 py-4 text-sm text-[#ff4757]">
            {errorMessage}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-1 grid grid-cols-1 gap-x-7 gap-y-0 md:grid-cols-2 md:gap-y-1">
            <Field label="বিভাগ" required error={fieldErrors.divisionId}>
              <select
                className={`font-bengali ${controlClass(selectClass, fieldErrors.divisionId)}`}
                value={divisionId}
                onChange={(e) => handleDivisionChange(e.target.value)}
                required
              >
                <option value="">— বিভাগ নির্বাচন করুন —</option>
                {divisions.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#1a1035] text-white">
                    {item.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="জেলা" required error={fieldErrors.districtId}>
              <select
                className={`font-bengali ${controlClass(selectClass, fieldErrors.districtId)}`}
                value={districtId}
                onChange={(e) => handleDistrictChange(e.target.value)}
                disabled={!divisionId}
                required
              >
                <option value="">— জেলা নির্বাচন করুন —</option>
                {districts.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#1a1035] text-white">
                    {item.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mb-1 grid grid-cols-1 gap-x-7 md:grid-cols-2">
            <Field label="উপজেলা" required error={fieldErrors.upazilaId}>
              <select
                className={`font-bengali ${controlClass(selectClass, fieldErrors.upazilaId)}`}
                value={upazilaId}
                onChange={(e) => handleUpazilaChange(e.target.value)}
                disabled={!districtId}
                required
              >
                <option value="">— উপজেলা নির্বাচন করুন —</option>
                {upazilas.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#1a1035] text-white">
                    {item.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="ইউনিয়ন/ওয়ার্ড" required error={fieldErrors.unionId}>
              <select
                className={`font-bengali ${controlClass(selectClass, fieldErrors.unionId)}`}
                value={unionId}
                onChange={(e) => {
                  setUnionId(e.target.value);
                  clearFieldError("unionId");
                }}
                disabled={!upazilaId}
                required
              >
                <option value="">— ইউনিয়ন/ওয়ার্ড নির্বাচন করুন —</option>
                {unions.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#1a1035] text-white">
                    {item.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mb-1 grid grid-cols-1 gap-x-7 md:grid-cols-2">
            <Field label="সমস্যার ক্যাটাগরি" required error={fieldErrors.categoryId}>
              <select
                className={`font-bengali ${controlClass(selectClass, fieldErrors.categoryId)}`}
                value={categoryId}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                  clearFieldError("categoryId");
                }}
                required
              >
                <option value="">— ক্যাটাগরি নির্বাচন করুন —</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id} className="bg-[#1a1035] text-white">
                    {item.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="নাম" required error={fieldErrors.name}>
              <input
                type="text"
                className={`font-bengali ${controlClass(inputClass, fieldErrors.name)}`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearFieldError("name");
                }}
                placeholder="নাম লিখুন"
                required
              />
            </Field>
          </div>

          <div className="mb-1 grid grid-cols-1 gap-x-7 md:grid-cols-2">
            <Field label="মোবাইল/হোয়াটসঅ্যাপ" required error={fieldErrors.mobile}>
              <input
                type="tel"
                className={`font-bengali ${controlClass(inputClass, fieldErrors.mobile)}`}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                  clearFieldError("mobile");
                }}
                placeholder="আপনার মোবাইল/হোয়াটসঅ্যাপ নম্বর দিন। আমাদের টিম আপনার সাথে যোগাযোগ করবে।"
                required
              />
            </Field>

            <Field label="ইমেইল (ঐচ্ছিক)">
              <input
                type="email"
                className={`font-bengali ${inputClass}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল ঠিকানা (যদি থাকে)"
              />
            </Field>
          </div>

          <Field label="মতামত/অভিযোগ" required error={fieldErrors.complaint}>
            <textarea
              className={`font-bengali ${controlClass(textareaClass, fieldErrors.complaint)}`}
              value={complaint}
              onChange={(e) => {
                setComplaint(e.target.value);
                clearFieldError("complaint");
              }}
              placeholder="এখানে বিস্তারিতভাবে সমস্যার বর্ণনা ও আপনার সমাধানের প্রস্তাব লিখুন"
              required
            />
          </Field>

          <div className="mb-5 mt-2">
            <label className="font-bengali mb-3.5 block text-sm font-semibold text-[#ffd200]">
              ফাইল আপলোড (ঐচ্ছিক)
            </label>

            <div className="mb-4 flex flex-wrap gap-2 max-md:flex-col">
              <button type="button" className={`font-bengali ${uploadTabClass("camera")}`} onClick={() => switchUploadTab("camera")}>
                <CameraIcon />
                ক্যামেরা থেকে ছবি
              </button>
              <button type="button" className={`font-bengali ${uploadTabClass("audio")}`} onClick={() => switchUploadTab("audio")}>
                <MicIcon />
                অডিও রেকর্ড
              </button>
              <button type="button" className={`font-bengali ${uploadTabClass("browse")}`} onClick={() => switchUploadTab("browse")}>
                <UploadIcon />
                ফাইল ব্রাউজ করুন
              </button>
            </div>

            {uploadTab === "camera" ? (
              <div className="relative">
                {cameraLoading && !cameraReady ? (
                  <p className="font-bengali py-5 text-center text-[13px] text-white/40">{cameraMessage}</p>
                ) : null}
                <video
                  ref={videoRef}
                  className={`mx-auto block w-full max-w-[400px] rounded-[10px] bg-black max-md:max-w-full ${cameraReady ? "block" : "hidden"}`}
                  autoPlay
                  playsInline
                />
                <canvas ref={canvasRef} className="hidden" />
                {cameraReady ? (
                  <div className="mt-3 flex justify-center gap-3">
                    <button
                      type="button"
                      className="font-bengali rounded-lg bg-[#ffd200] px-5 py-2.5 text-sm text-white transition-all max-[400px]:px-3.5 max-[400px]:py-2 max-[400px]:text-[13px]"
                      onClick={capturePhoto}
                    >
                      📸 ছবি তুলুন
                    </button>
                    <button
                      type="button"
                      className="font-bengali rounded-lg bg-white/10 px-5 py-2.5 text-sm text-white transition-all max-[400px]:px-3.5 max-[400px]:py-2 max-[400px]:text-[13px]"
                      onClick={stopCamera}
                    >
                      বন্ধ করুন
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}

            {uploadTab === "audio" ? (
              <div>
                <div className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.08] px-5 py-4 max-md:px-4">
                  <button
                    type="button"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-[#ff4757] bg-transparent transition-all"
                    onClick={toggleRecording}
                    aria-label="Toggle recording"
                  >
                    <span
                      className={`bg-[#ff4757] transition-all ${
                        recording
                          ? "h-4 w-4 animate-pulse rounded"
                          : "h-5 w-5 rounded-full"
                      }`}
                    />
                  </button>
                  <div>
                    <div className="min-w-[60px] text-[22px] font-semibold tabular-nums text-white max-md:text-xl">
                      {recTimer}
                    </div>
                    <div className="font-bengali text-[13px] text-white/50">{recStatus}</div>
                  </div>
                </div>
                <p className="font-bengali mt-2 text-[11px] text-white/30">
                  🔴 বাটনে ক্লিক করে রেকর্ডিং বন্ধ করুন
                </p>
                {audioPlaybackUrl ? (
                  <audio controls src={audioPlaybackUrl} className="mt-3 block w-full" />
                ) : null}
              </div>
            ) : null}

            {uploadTab === "browse" ? (
              <div
                className={`flex min-h-[100px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border-2 border-dashed px-6 py-6 text-center transition-all max-md:min-h-20 max-md:px-3.5 max-md:py-[18px] ${
                  dragOver
                    ? "border-[#ffd200] bg-[rgba(255,107,53,0.05)]"
                    : "border-white/10 hover:border-[#ffd200] hover:bg-[rgba(255,107,53,0.05)]"
                }`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  handleFiles(e.dataTransfer.files);
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p className="font-bengali text-[13px] text-white/40 max-md:text-xs">
                  ফাইল টেনে ছেড়ে দিন অথবা <span className="text-[#ffd200] underline">ব্রাউজ করুন</span>
                </p>
                <p className="font-bengali text-[11px] text-white/40">
                  ছবি (JPG, PNG, GIF) • ভিডিও (MP4, AVI, MOV) • সর্বোচ্চ 50MB
                </p>
              </div>
            ) : null}

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) handleFiles(e.target.files);
                e.target.value = "";
              }}
            />

            <div className="mt-3 flex flex-col gap-2">
              {fileListItems.map((item) => {
                const sizeStr = `${(item.fileSize / 1024 / 1024).toFixed(2)} MB`;
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.05] px-3.5 py-2.5 max-md:px-2.5 max-md:py-2"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[rgba(255,107,53,0.2)] text-base">
                      {FILE_ICONS[item.fileType] || "📁"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bengali truncate text-[13px] text-white max-md:text-xs">{item.fileName}</div>
                      <div className="font-bengali text-[11px] text-white/40">
                        {sizeStr}
                        {item.status === "uploading" ? " • আপলোড হচ্ছে..." : " • ✅ আপলোড সম্পন্ন"}
                        {item.driveLink ? (
                          <>
                            {" "}
                            <a
                              href={item.driveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#2ed573]"
                            >
                              📁 Google Drive
                            </a>
                          </>
                        ) : null}
                      </div>
                      {item.status === "uploading" ? (
                        <div className="mt-1 h-[3px] w-full overflow-hidden rounded-sm bg-white/10">
                          <div className="h-full w-[60%] rounded-sm bg-[#ffd200] transition-all duration-300" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex justify-end max-md:mt-4">
            <button
              type="submit"
              className="font-bengali rounded-[10px] bg-gradient-to-br from-[#ffd200] to-[#e8553d] px-9 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(255,107,53,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(255,107,53,0.45)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 max-md:w-full"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <span className="mr-2 inline-block h-[18px] w-[18px] animate-spin rounded-full border-2 border-white/30 border-t-white align-middle" />
                  {informFormCopy.submitting}
                </>
              ) : (
                informFormCopy.submit
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
