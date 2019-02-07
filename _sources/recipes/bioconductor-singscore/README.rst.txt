.. title:: Package Recipe 'bioconductor-singscore'
.. highlight: bash


bioconductor-singscore
======================

.. conda:recipe:: bioconductor-singscore
   :replaces_section_title:

   A simple single\-sample gene signature scoring method that uses rank\-based statistics to analyze the sample\'s gene expression profile. It scores the expression activities of gene sets at a single\-sample level.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/singscore.html
   :license: GPL-3
   :recipe: /`bioconductor-singscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singscore/meta.yaml>`_

   


.. conda:package:: bioconductor-singscore

   |downloads_bioconductor-singscore| |docker_bioconductor-singscore|

   :versions: 1.2.2

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-ggsci`  :conda:package:`r-magrittr`  :conda:package:`r-matrixstats`  :conda:package:`r-plotly`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-singscore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singscore

   and update with::

      conda update bioconductor-singscore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-singscore


.. |required_by_bioconductor-singscore| conda:required_by:: bioconductor-singscore
.. |downloads_bioconductor-singscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singscore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-singscore| image:: https://quay.io/repository/biocontainers/bioconductor-singscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singscore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singscore/README.html

