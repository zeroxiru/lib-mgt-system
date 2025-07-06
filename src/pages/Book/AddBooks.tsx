import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addBook } from "@/redux/features/book/bookSlice";
import { ALL_BOOK_GENRES } from "@/type";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateBooksMutation } from "@/redux/api/baseApi";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function AddBooks() {
  const form = useForm();

  const [createbook, { data, isLoading, isError }] = useCreateBooksMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    
     try {
      const bookData = { 
        ...data,
        available: data.copies > 0 ? data.available : false
      }
      const result = await createbook(bookData).unwrap();
      toast.promise(result,{
        success: () => "Book created successfully!",
        error: "Failed to create Book"
      })
      
     } catch (error) {
      console.log("Error creating book:", error);
     }

    console.log(data);
    const bookData = {
      ...data,
    };
    const result = await createbook(bookData).unwrap();
    console.log(result);

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title:</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author:</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN:</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Genres</SelectLabel>
                    {ALL_BOOK_GENRES.map(
                      (
                        genre // Directly use the const array for mapping
                      ) => (
                        <SelectItem key={genre} value={genre}>
                          {genre
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description:</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies:</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="available"
          render={({ field }) => {
            const copies = form.watch("copies");
            const isAvailable = copies > 0;

            return (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0  p-4">
                <FormControl>
                  <Checkbox
                    checked={isAvailable ? field.value : false}
                    onCheckedChange={(checked: boolean) => {
                      field.onChange(isAvailable ? checked : false);
                    }}
                    disabled={!isAvailable}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    {isAvailable
                      ? "Available for borrowing"
                      : "No copies available"}
                  </FormLabel>
                  {!isAvailable && (
                    <FormDescription className="text-red-500">
                      Cannot mark as available when copies is 0
                    </FormDescription>
                  )}
                </div>
              </FormItem>
            );
          }}
        />
        <DialogFooter>
          <Button type="submit" className="mt-4">
            Save Changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
