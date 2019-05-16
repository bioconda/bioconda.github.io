:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r3cseq'
.. highlight: bash

bioconductor-r3cseq
===================

.. conda:recipe:: bioconductor-r3cseq
   :replaces_section_title:

   This package is used for the analysis of long\-range chromatin interactions from 3C\-seq assay.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/r3Cseq.html
   :license: GPL-3
   :recipe: /`bioconductor-r3cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cseq/meta.yaml>`_
   :links: biotools: :biotools:`r3cseq`, doi: :doi:`10.1093/nar/gkt373`

   


.. conda:package:: bioconductor-r3cseq

   |downloads_bioconductor-r3cseq| |docker_bioconductor-r3cseq|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-qvalue: >=2.14.0,<2.15.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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