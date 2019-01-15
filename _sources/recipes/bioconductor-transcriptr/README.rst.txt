.. _`bioconductor-transcriptr`:

bioconductor-transcriptr
========================

|downloads|

The differences in the RNA types being sequenced have an impact on the resulting sequencing profiles. mRNA\-seq data is enriched with reads derived from exons\, while GRO\-\, nucRNA\- and chrRNA\-seq demonstrate a substantial broader coverage of both exonic and intronic regions. The presence of intronic reads in GRO\-seq type of data makes it possible to use it to computationally identify and quantify all de novo continuous regions of transcription distributed across the genome. This type of data\, however\, is more challenging to interpret and less common practice compared to mRNA\-seq. One of the challenges for primary transcript detection concerns the simultaneous transcription of closely spaced genes\, which needs to be properly divided into individually transcribed units. The R package transcriptR combines RNA\-seq data with ChIP\-seq data of histone modifications that mark active Transcription Start Sites \(TSSs\)\, such as\, H3K4me3 or H3K9\/14Ac to overcome this challenge. The advantage of this approach over the use of\, for example\, gene annotations is that this approach is data driven and therefore able to deal also with novel and case specific events. Furthermore\, the integration of ChIP\- and RNA\-seq data allows the identification all known and novel active transcription start sites within a given sample.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/transcriptR.html
Versions      1.8.0, 1.6.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptr



Links         biotools: :biotools:`transcriptr`, doi: :doi:`10.1038/nmeth.3252`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-transcriptr

and update with::

   conda update bioconductor-transcriptr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-transcriptr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-transcriptr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-transcriptr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-transcriptr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-transcriptr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-transcriptr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-transcriptr

