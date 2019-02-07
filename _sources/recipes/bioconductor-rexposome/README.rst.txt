.. title:: Package Recipe 'bioconductor-rexposome'
.. highlight: bash


bioconductor-rexposome
======================

.. conda:recipe:: bioconductor-rexposome
   :replaces_section_title:

   Package that allows to explore the exposome and to perform association analyses between exposures and health outcomes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rexposome/meta.yaml>`_

   


.. conda:package:: bioconductor-rexposome

   |downloads_bioconductor-rexposome| |docker_bioconductor-rexposome|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-corrplot`  :conda:package:`r-factominer`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-glmnet`  :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-gtools`  :conda:package:`r-hmisc`  :conda:package:`r-imputelcmd`  :conda:package:`r-lme4`  :conda:package:`r-lsr`  :conda:package:`r-mice`  :conda:package:`r-pryr`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-scatterplot3d`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-rexposome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rexposome

   and update with::

      conda update bioconductor-rexposome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rexposome


.. |required_by_bioconductor-rexposome| conda:required_by:: bioconductor-rexposome
.. |downloads_bioconductor-rexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rexposome.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rexposome| image:: https://quay.io/repository/biocontainers/bioconductor-rexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rexposome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rexposome/README.html

