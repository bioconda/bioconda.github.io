.. title:: Package Recipe 'bioconductor-teqc'
.. highlight: bash


bioconductor-teqc
=================

.. conda:recipe:: bioconductor-teqc
   :replaces_section_title:

   Target capture experiments combine hybridization\-based \(in solution or on microarrays\) capture and enrichment of genomic regions of interest \(e.g. the exome\) with high throughput sequencing of the captured DNA fragments. This package provides functionalities for assessing and visualizing the quality of the target enrichment process\, like specificity and sensitivity of the capture\, per\-target read coverage and so on.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TEQC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-teqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-teqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-teqc/meta.yaml>`_
   :links: biotools: :biotools:`teqc`, doi: :doi:`10.1093/bioinformatics/btr122`

   


.. conda:package:: bioconductor-teqc

   |downloads_bioconductor-teqc| |docker_bioconductor-teqc|

   :versions: 4.4.0, 4.2.0, 3.18.0, 3.16.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hwriter`  

   :required~by: |required_by_bioconductor-teqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-teqc

   and update with::

      conda update bioconductor-teqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-teqc


.. |required_by_bioconductor-teqc| conda:required_by:: bioconductor-teqc
.. |downloads_bioconductor-teqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-teqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-teqc| image:: https://quay.io/repository/biocontainers/bioconductor-teqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-teqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-teqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-teqc/README.html

