import { Aperture, Ban, Calendar, Camera, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clipboard, Cog, DownloadCloud, Eye, EyeOff, Fingerprint, Flame, Ghost, Hammer, Info, Languages, Laptop, Link, Loader, Mails, Menu, MessageSquareQuote, Monitor, Moon, Paintbrush, PanelLeftClose, Pen, PhoneCall, PlusCircle, Search, Settings2, Share2, ShieldCheck, Sparkles, Star, Sun, Tablet, Timer, Trash2, TrendingDown, TrendingUp, UploadCloud, UserX, Video, Wand2, XCircle } from "lucide-react";
import { FaApple, FaLinkedin, FaReddit, FaTiktok } from "react-icons/fa";
import { FaDiscord, FaSquareFacebook, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { RiColorFilterFill, RiInstagramFill } from "react-icons/ri";

import { FcGoogle } from "react-icons/fc";
import { IoLogoWhatsapp } from "react-icons/io";

export const icons = {
    CopyIcon: Clipboard,
    SettingsIcon: Cog,
    ThemeIcon: RiColorFilterFill,
    CreateIcon: Wand2,
    EditIcon: Pen,
    CloseIcon: XCircle,
    DeleteIcon: Trash2,
    CheckIcon: CheckCircle2,
    AboutIcon: Info,
    ServicesIcon: Hammer,
    LoaderIcon: Loader,
    EmptyIcon: Ghost,
    ShareIcon: Share2,
    TrendingUpIcon: TrendingUp,
    TrendingDownIcon: TrendingDown,
    FacebookIcon: FaSquareFacebook,
    LinkedInIcon: FaLinkedin,
    InstagramIcon: RiInstagramFill,
    RedditIcon: FaReddit,
    TwitterIcon: FaSquareXTwitter,
    LinkIcon: Link,
    AddIcon: PlusCircle,
    PreviewIcon: Eye,
    DownloadIcon: DownloadCloud,
    ColorIcon: Paintbrush,
    ReviewIcon: MessageSquareQuote,
    RatingStarIcon: Star,
    EmailIcon: Mails,
    MenuButtonIcon: Menu,
    DescriptionIcon: File,
    CalendarIcon: Calendar,
    XIcon: XCircle,
    CancelIcon: Ban,
    LaptopIcon: Laptop,
    TabletIcon: Tablet,
    DesktopIcon: Monitor,
    LoginIcon: Fingerprint,
    SignUpIcon: CheckCircle2,
    ResetPasswordIcon: ShieldCheck,
    ShowPasswordIcon: Eye,
    HidePasswordIcon: EyeOff,
    UploadIcon: UploadCloud,
    SignOutIcon: UserX,
    ArrowDownIcon: ChevronDown,
    TikTokIcon: FaTiktok,
    ArrowLeftIcon: ChevronLeft,
    ArrowRightIcon: ChevronRight,
    PreferenceIcon: Settings2,
    CloseSidebarIcon: PanelLeftClose,
    SearchIcon: Search,
    RealTimeChangeIcon: Timer,
    LanguageIcon: Languages,
    GoogleIcon: FcGoogle,
    AppleIcon: FaApple,
    CallToAction: Flame,
    ContactIcon: PhoneCall,
    ProjectsIcon: Camera,
    DiscordIcon: FaDiscord,
    WhatsAppIcon: IoLogoWhatsapp,
    TelegramIcon: FaTelegram,
    VideoIcon: Video,
    ScriptIcon: Pen,
    ShortVideoIcon: Aperture,
    MotionGraphicsIcon: Sparkles
};



export const themes = [
    {
        value: "light",
        label: "Light",
        icon: Sun
    },
    {
        value: "dark",
        label: "Dark",
        icon: Moon
    },
    {
        value: "system",
        label: "System",
        icon: Monitor
    }
];


export const socialMedia = [
    {
        name: "Discord",
        icon: icons.DiscordIcon,
        url: "https://www.discord.com",
        type: "link"
    },
    {
        name: "WhatsApp",
        icon: icons.WhatsAppIcon,
        url: "https://www.whatsapp.com",
        type: "info",
        value: "01018065656"
    },
    {
        name: "LinkedIn",
        icon: icons.LinkedInIcon,
        url: "https://www.linkedin.com/in/yourprofile",
        type: "link"
    },
    {
        name: "Telegram",
        icon: icons.TelegramIcon,
        url: "https://telegarm.com/yourprofile",
        type: "info",
        value: "01018065656"
    },
    {
        name: "Reddit",
        icon: icons.RedditIcon,
        url: "https://www.reddit.com/user/yourusername",
        type: "link"
    },
    {
        name: "Email",
        icon: icons.EmailIcon,
        url: "mailto:mostafa.taman.me@gmail.com",
        type: "info",
        value: "mostafa.taman.me@gmail.com"
    },
];
