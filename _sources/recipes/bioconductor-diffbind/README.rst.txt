.. title:: Package Recipe 'bioconductor-diffbind'
.. highlight: bash


bioconductor-diffbind
=====================

.. conda:recipe:: bioconductor-diffbind
   :replaces_section_title:

   Compute differentially bound sites from multiple ChIP\-seq experiments using affinity \(quantitative\) data. Also enables occupancy \(overlap\) analysis and plotting functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DiffBind.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-diffbind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffbind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffbind/meta.yaml>`_
   :links: biotools: :biotools:`diffbind`

   


.. conda:package:: bioconductor-diffbind

   |downloads_bioconductor-diffbind| |docker_bioconductor-diffbind|

   :versions: 2.10.0, 2.8.0, 2.6.6, 2.6.5, 2.6.0, 2.4.8, 2.2.12, 2.0.9, 1.16.3

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-systempiper` >=1.16.0,<1.17.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-amap`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-gplots`  :conda:package:`r-lattice`  :conda:package:`r-locfit`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-diffbind|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffbind

   and update with::

      conda update bioconductor-diffbind

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-diffbind


.. |required_by_bioconductor-diffbind| conda:required_by:: bioconductor-diffbind
.. |downloads_bioconductor-diffbind| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffbind.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-diffbind| image:: https://quay.io/repository/biocontainers/bioconductor-diffbind/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffbind







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffbind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffbind/README.html

