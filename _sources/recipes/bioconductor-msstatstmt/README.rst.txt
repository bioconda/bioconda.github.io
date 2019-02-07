.. title:: Package Recipe 'bioconductor-msstatstmt'
.. highlight: bash


bioconductor-msstatstmt
=======================

.. conda:recipe:: bioconductor-msstatstmt
   :replaces_section_title:

   Tools for protein significance analysis in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MSstatsTMT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatstmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmt/meta.yaml>`_

   


.. conda:package:: bioconductor-msstatstmt

   |downloads_bioconductor-msstatstmt| |docker_bioconductor-msstatstmt|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-msstats` >=3.14.0,<3.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-lme4`  :conda:package:`r-matrixstats`  :conda:package:`r-nlme`  :conda:package:`r-reshape2`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-msstatstmt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatstmt

   and update with::

      conda update bioconductor-msstatstmt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msstatstmt


.. |required_by_bioconductor-msstatstmt| conda:required_by:: bioconductor-msstatstmt
.. |downloads_bioconductor-msstatstmt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatstmt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msstatstmt| image:: https://quay.io/repository/biocontainers/bioconductor-msstatstmt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatstmt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatstmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatstmt/README.html

