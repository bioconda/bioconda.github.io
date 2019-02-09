.. title:: Package Recipe 'bioconductor-qrqc'
.. highlight: bash


bioconductor-qrqc
=================

.. conda:recipe:: bioconductor-qrqc
   :replaces_section_title:

   Quickly scans reads and gathers statistics on base and quality frequencies\, read length\, k\-mers by position\, and frequent sequences. Produces graphical output of statistics for use in quality control pipelines\, and an optional HTML quality report. S4 SequenceSummary objects allow specific tests and functionality to be written around the data collected.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/qrqc.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-qrqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qrqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qrqc/meta.yaml>`_
   :links: biotools: :biotools:`qrqc`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-qrqc

   |downloads_bioconductor-qrqc| |docker_bioconductor-qrqc|

   :versions: 1.36.0, 1.34.0, 1.32.0, 1.30.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-biovizbase` >=1.30.0,<1.31.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-brew`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  :conda:package:`r-reshape`  :conda:package:`r-testthat`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-qrqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qrqc

   and update with::

      conda update bioconductor-qrqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qrqc


.. |required_by_bioconductor-qrqc| conda:required_by:: bioconductor-qrqc
.. |downloads_bioconductor-qrqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qrqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qrqc| image:: https://quay.io/repository/biocontainers/bioconductor-qrqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qrqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qrqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qrqc/README.html

