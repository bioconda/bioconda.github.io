:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wavetiling'
.. highlight: bash

bioconductor-wavetiling
=======================

.. conda:recipe:: bioconductor-wavetiling
   :replaces_section_title:

   This package is designed to conduct transcriptome analysis for tiling arrays based on fast wavelet\-based functional models.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/waveTiling.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-wavetiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavetiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wavetiling/meta.yaml>`_
   :links: biotools: :biotools:`wavetiling`, doi: :doi:`10.1186/1471-2105-13-234`

   


.. conda:package:: bioconductor-wavetiling

   |downloads_bioconductor-wavetiling| |docker_bioconductor-wavetiling|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomegraphs: >=1.42.0,<1.43.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-waveslim: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wavetiling

   and update with::

      conda update bioconductor-wavetiling

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-wavetiling:<tag>

   (see `bioconductor-wavetiling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wavetiling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wavetiling.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-wavetiling| image:: https://quay.io/repository/biocontainers/bioconductor-wavetiling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wavetiling
.. _`bioconductor-wavetiling/tags`: https://quay.io/repository/biocontainers/bioconductor-wavetiling?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wavetiling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wavetiling/README.html