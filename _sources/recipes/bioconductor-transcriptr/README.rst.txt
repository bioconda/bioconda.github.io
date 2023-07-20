:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transcriptr'
.. highlight: bash

bioconductor-transcriptr
========================

.. conda:recipe:: bioconductor-transcriptr
   :replaces_section_title:
   :noindex:

   An Integrative Tool for ChIP\- And RNA\-Seq Based Primary Transcripts Detection and Quantification

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/transcriptR.html
   :license: GPL-3
   :recipe: /`bioconductor-transcriptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptr/meta.yaml>`_
   :links: biotools: :biotools:`transcriptr`, doi: :doi:`10.1038/nmeth.3252`

   The differences in the RNA types being sequenced have an impact on the resulting sequencing profiles. mRNA\-seq data is enriched with reads derived from exons\, while GRO\-\, nucRNA\- and chrRNA\-seq demonstrate a substantial broader coverage of both exonic and intronic regions. The presence of intronic reads in GRO\-seq type of data makes it possible to use it to computationally identify and quantify all de novo continuous regions of transcription distributed across the genome. This type of data\, however\, is more challenging to interpret and less common practice compared to mRNA\-seq. One of the challenges for primary transcript detection concerns the simultaneous transcription of closely spaced genes\, which needs to be properly divided into individually transcribed units. The R package transcriptR combines RNA\-seq data with ChIP\-seq data of histone modifications that mark active Transcription Start Sites \(TSSs\)\, such as\, H3K4me3 or H3K9\/14Ac to overcome this challenge. The advantage of this approach over the use of\, for example\, gene annotations is that this approach is data driven and therefore able to deal also with novel and case specific events. Furthermore\, the integration of ChIP\- and RNA\-seq data allows the identification all known and novel active transcription start sites within a given sample.


.. conda:package:: bioconductor-transcriptr

   |downloads_bioconductor-transcriptr| |docker_bioconductor-transcriptr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-chipseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-proc: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transcriptr

   and update with::

      conda update bioconductor-transcriptr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transcriptr:<tag>

   (see `bioconductor-transcriptr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transcriptr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transcriptr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transcriptr
   :alt:   (downloads)
.. |docker_bioconductor-transcriptr| image:: https://quay.io/repository/biocontainers/bioconductor-transcriptr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transcriptr
.. _`bioconductor-transcriptr/tags`: https://quay.io/repository/biocontainers/bioconductor-transcriptr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-transcriptr";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transcriptr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transcriptr/README.html