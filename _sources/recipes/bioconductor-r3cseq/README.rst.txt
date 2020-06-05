:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r3cseq'
.. highlight: bash

bioconductor-r3cseq
===================

.. conda:recipe:: bioconductor-r3cseq
   :replaces_section_title:
   :noindex:

   Analysis of Chromosome Conformation Capture and Next\-generation Sequencing \(3C\-seq\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/r3Cseq.html
   :license: GPL-3
   :recipe: /`bioconductor-r3cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq/meta.yaml>`_
   :links: biotools: :biotools:`r3cseq`, doi: :doi:`10.1093/nar/gkt373`

   This package is used for the analysis of long\-range chromatin interactions from 3C\-seq assay.


.. conda:package:: bioconductor-r3cseq

   |downloads_bioconductor-r3cseq| |docker_bioconductor-r3cseq|

   :versions:
      
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-qvalue: ``>=2.20.0,<2.21.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-rcolorbrewer: 
   :depends r-sqldf: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-r3cseq

   and update with::

      conda update bioconductor-r3cseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r3cseq:<tag>

   (see `bioconductor-r3cseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r3cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r3cseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r3cseq
   :alt:   (downloads)
.. |docker_bioconductor-r3cseq| image:: https://quay.io/repository/biocontainers/bioconductor-r3cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r3cseq
.. _`bioconductor-r3cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-r3cseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r3cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r3cseq/README.html