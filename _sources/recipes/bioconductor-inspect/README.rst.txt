:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inspect'
.. highlight: bash

bioconductor-inspect
====================

.. conda:recipe:: bioconductor-inspect
   :replaces_section_title:
   :noindex:

   Modeling RNA synthesis\, processing and degradation with RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/INSPEcT.html
   :license: GPL-2
   :recipe: /`bioconductor-inspect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect/meta.yaml>`_
   :links: biotools: :biotools:`inspect`

   INSPEcT \(INference of Synthesis\, Processing and dEgradation rates from Transcriptomic data\) RNA\-seq data in time\-course experiments or steady\-state conditions\, with or without the support of nascent RNA data.


.. conda:package:: bioconductor-inspect

   |downloads_bioconductor-inspect| |docker_bioconductor-inspect|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-plgem: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-desolve: 
   :depends r-gdata: 
   :depends r-kernsmooth: 
   :depends r-proc: 
   :depends r-rootsolve: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inspect

   and update with::

      conda update bioconductor-inspect

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inspect:<tag>

   (see `bioconductor-inspect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inspect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inspect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inspect
   :alt:   (downloads)
.. |docker_bioconductor-inspect| image:: https://quay.io/repository/biocontainers/bioconductor-inspect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inspect
.. _`bioconductor-inspect/tags`: https://quay.io/repository/biocontainers/bioconductor-inspect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inspect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inspect/README.html