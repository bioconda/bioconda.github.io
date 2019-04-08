:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioqc'
.. highlight: bash

bioconductor-bioqc
==================

.. conda:recipe:: bioconductor-bioqc
   :replaces_section_title:

   BioQC performs quality control of high\-throughput expression data based on tissue gene signatures. It can detect tissue heterogeneity in gene expression data. The core algorithm is a Wilcoxon\-Mann\-Whitney test that is optimised for high performance.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BioQC.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-bioqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioqc/meta.yaml>`_
   :links: biotools: :biotools:`bioqc`, doi: :doi:`10.1186/s12864-017-3661-2`

   


.. conda:package:: bioconductor-bioqc

   |downloads_bioconductor-bioqc| |docker_bioconductor-bioqc|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioqc

   and update with::

      conda update bioconductor-bioqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioqc:<tag>

   (see `bioconductor-bioqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bioqc| image:: https://quay.io/repository/biocontainers/bioconductor-bioqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioqc
.. _`bioconductor-bioqc/tags`: https://quay.io/repository/biocontainers/bioconductor-bioqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioqc/README.html