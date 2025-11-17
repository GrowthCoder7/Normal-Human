/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Text } from '@tiptap/extension-text'
import EditorMenubar from './editor-menubar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import TagInput from './tag-inputs'
import { set } from 'date-fns'
import { Input } from '@/components/ui/input'
import AIComposeButton from './ai-compose-button'
import { generateEmail } from './action'
import { read } from 'fs'
import { readStreamableValue } from 'ai/rsc'

type Props = {
    subject:string
    setSubject:(value:string)=>void

    toValues:{label:string,value:string}[]
    setToValues:(value:{label:string,value:string}[])=>void

    ccValues:{label:string,value:string}[]
    setCcValues:(value:{label:string,value:string}[])=>void

    to:string[]
    handleSend:(value:string)=>void
    isSending:boolean

    defaultToolBarExpanded?:boolean
}

const EmailEditor = ({subject,setSubject,toValues,setToValues,ccValues,setCcValues,to,handleSend,isSending,defaultToolBarExpanded=false}:Props) => {
    const [value, setValue] = useState<string>('')
    const [expanded, setExpanded] = useState<boolean>(defaultToolBarExpanded)
    const [token, setToken] = useState('')

    const aiGenerate = async(value:string)=>{
        const {output} = await generateEmail(value,value)
        for await (const token of readStreamableValue(output)) {
            if(token){
                editor?.commands.insertContent(token)
            }
        }
    }

    const CustomText = Text.extend({
        addKeyboardShortcuts(){
            return{
                'Meta-j':()=>{
                    aiGenerate(this.editor.getText())
                    return true
                }
            }
        }
    })

    const editor = useEditor({
        autofocus:false,
        extensions:[StarterKit,CustomText],
        onUpdate:({ editor })=>{
            setValue(editor.getHTML())
        },
        immediatelyRender: typeof window === "undefined" ? false : true,
    })

    useEffect(()=>{
        editor?.commands.insertContent(token)
    },[editor,token])

    if(!editor) return null

    const onGenerate = (token:string)=>{
        editor?.commands?.insertContent(token)
    }

  return (
    <div>
        <div className='flex p-4 py-2 border-b'>
            <EditorMenubar editor={editor} />
        </div>
        
        <div className="p-4 pb-0 space-y-2">
            {expanded && (
                <>
                    <TagInput
                        label='To'
                        onChange={setToValues}
                        placeholder='Add Receptients'
                        value={toValues}
                    />
                    <TagInput
                        label='Cc'
                        onChange={setCcValues}
                        placeholder='Add Receptients'
                        value={ccValues}
                    />
                    <Input id='subject' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                </>
            )}

            <div className="flex items-center gap-2">
                <div className="cursor-pointer" 
                onClick={()=>setExpanded(!expanded)}>
                    <span className="text-green-700 font-medium">
                        Draft {" "}
                    </span>
                    <span>
                        to {to.join(', ')}
                    </span>
                </div>
                <AIComposeButton isComposing={defaultToolBarExpanded} onGenerate={onGenerate}/>
            </div>
        </div>

        <div className="prose w-full px-4">
            <EditorContent editor={editor} value={value} />
        </div>
        <Separator/>
        <div className="py-3 px-4 flex item-center justify-between">
            <span className="text-sm">
                Tip:Press{" "}
                <kbd className='px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg'>
                    Cmd + j
                </kbd>
                for AI autocomplete
            </span>
            <Button onClick={async()=>{
                editor?.commands?.clearContent()
                await handleSend(value)}} disabled={isSending}>
                Send
            </Button>
        </div>
    </div>
  )
}

export default EmailEditor