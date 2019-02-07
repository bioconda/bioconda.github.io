.. title:: Package Recipe 'bioconductor-erccdashboard'
.. highlight: bash


bioconductor-erccdashboard
==========================

.. conda:recipe:: bioconductor-erccdashboard
   :replaces_section_title:

   Technical performance metrics for differential gene expression experiments using External RNA Controls Consortium \(ERCC\) spike\-in ratio mixtures.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/erccdashboard.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-erccdashboard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erccdashboard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erccdashboard/meta.yaml>`_

   


.. conda:package:: bioconductor-erccdashboard

   |downloads_bioconductor-erccdashboard| |docker_bioconductor-erccdashboard|

   :versions: 1.16.0

   :depends: :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-gplots`  :conda:package:`r-gridextra` >=2.0.0 :conda:package:`r-gtools`  :conda:package:`r-locfit`  :conda:package:`r-mass`  :conda:package:`r-plyr`  :conda:package:`r-reshape2`  :conda:package:`r-rocr`  :conda:package:`r-scales`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-erccdashboard|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-erccdashboard

   and update with::

      conda update bioconductor-erccdashboard

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-erccdashboard


.. |required_by_bioconductor-erccdashboard| conda:required_by:: bioconductor-erccdashboard
.. |downloads_bioconductor-erccdashboard| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-erccdashboard.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-erccdashboard| image:: https://quay.io/repository/biocontainers/bioconductor-erccdashboard/status
   :target: https://quay.io/repository/biocontainers/bioconductor-erccdashboard







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-erccdashboard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-erccdashboard/README.html

