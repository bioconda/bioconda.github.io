:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inspect'
.. highlight: bash

bioconductor-inspect
====================

.. conda:recipe:: bioconductor-inspect
   :replaces_section_title:

   INSPEcT \(INference of Synthesis\, Processing and dEgradation rates from Transcriptomic data\) RNA\-seq data in time\-course experiments or different conditions\, with or without the support of nascent RNA data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/INSPEcT.html
   :license: GPL-2
   :recipe: /`bioconductor-inspect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect/meta.yaml>`_
   :links: biotools: :biotools:`inspect`

   


.. conda:package:: bioconductor-inspect

   |downloads_bioconductor-inspect| |docker_bioconductor-inspect|

   :versions: 1.14.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-deseq2: >=1.24.0,<1.25.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-plgem: >=1.56.0,<1.57.0
   :depends bioconductor-preprocesscore: >=1.46.0,<1.47.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: >=3.2.0,<3.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-desolve: 
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