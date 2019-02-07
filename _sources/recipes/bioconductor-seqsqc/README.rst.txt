.. title:: Package Recipe 'bioconductor-seqsqc'
.. highlight: bash


bioconductor-seqsqc
===================

.. conda:recipe:: bioconductor-seqsqc
   :replaces_section_title:

   The SeqSQC is designed to identify problematic samples in NGS data\, including samples with gender mismatch\, contamination\, cryptic relatedness\, and population outlier.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SeqSQC.html
   :license: GPL-3
   :recipe: /`bioconductor-seqsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsqc/meta.yaml>`_

   


.. conda:package:: bioconductor-seqsqc

   |downloads_bioconductor-seqsqc| |docker_bioconductor-seqsqc|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-gdsfmt` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-snprelate` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-ggally`  :conda:package:`r-ggplot2`  :conda:package:`r-rbokeh`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  

   :required~by: |required_by_bioconductor-seqsqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqsqc

   and update with::

      conda update bioconductor-seqsqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqsqc


.. |required_by_bioconductor-seqsqc| conda:required_by:: bioconductor-seqsqc
.. |downloads_bioconductor-seqsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqsqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqsqc| image:: https://quay.io/repository/biocontainers/bioconductor-seqsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqsqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqsqc/README.html

