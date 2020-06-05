:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magicblast'
.. highlight: bash

magicblast
==========

.. conda:recipe:: magicblast
   :replaces_section_title:
   :noindex:

   NCBI BLAST next generation read mapper

   :homepage: https://ncbi.github.io/magicblast/
   :license: Public Domain
   :recipe: /`magicblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magicblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magicblast/meta.yaml>`_
   :links: biotools: :biotools:`magicblast`, doi: :doi:`10.1186/s12859-019-2996-x`

   Magic\-BLAST is a tool for mapping large next\-generation RNA or DNA 
   sequencing runs against a whole genome or transcriptome. Each alignment
   optimizes a composite score\, taking into account simultaneously the two
   reads of a pair\, and in case of RNA\-seq\, locating the candidate introns
   and adding up the score of all exons. This is very different from other
   versions of BLAST\, where each exon is scored as a separate hit and
   read\-pairing is ignored.

   Magic\-BLAST incorporates within the NCBI BLAST code framework ideas 
   developed in the NCBI Magic pipeline\, in particular hit extensions by local 
   walk and jump \(http\:\/\/www.ncbi.nlm.nih.gov\/pubmed\/26109056\)\, and 
   recursive clipping of mismatches near the edges of the reads\, which avoids
   accumulating artefactual mismatches near splice sites and is needed to
   distinguish short indels from substitutions near the edges.

   More details about the algorithm and comparison with other similar tools
   are presented here\:
   https\:\/\/bmcbioinformatics.biomedcentral.com\/articles\/10.1186\/s12859\-019\-2996\-x.



.. conda:package:: magicblast

   |downloads_magicblast| |docker_magicblast|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-0``

      

   
   :depends blast: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends libxml2: ``>=2.9.10,<2.10.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install magicblast

   and update with::

      conda update magicblast

   or use the docker container::

      docker pull quay.io/biocontainers/magicblast:<tag>

   (see `magicblast/tags`_ for valid values for ``<tag>``)


.. |downloads_magicblast| image:: https://img.shields.io/conda/dn/bioconda/magicblast.svg?style=flat
   :target: https://anaconda.org/bioconda/magicblast
   :alt:   (downloads)
.. |docker_magicblast| image:: https://quay.io/repository/biocontainers/magicblast/status
   :target: https://quay.io/repository/biocontainers/magicblast
.. _`magicblast/tags`: https://quay.io/repository/biocontainers/magicblast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magicblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magicblast/README.html