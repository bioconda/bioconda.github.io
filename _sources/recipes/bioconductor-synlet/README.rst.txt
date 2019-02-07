.. title:: Package Recipe 'bioconductor-synlet'
.. highlight: bash


bioconductor-synlet
===================

.. conda:recipe:: bioconductor-synlet
   :replaces_section_title:

   Select hits from synthetic lethal RNAi screen data. For example\, there are two identical celllines except one gene is knocked\-down in one cellline. The interest is to find genes that lead to stronger lethal effect when they are knocked\-down further by siRNA. Quality control and various visualisation tools are implemented. Four different algorithms could be used to pick up the interesting hits. This package is designed based on 384 wells plates\, but may apply to other platforms with proper configuration.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/synlet.html
   :license: GPL-3
   :recipe: /`bioconductor-synlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synlet/meta.yaml>`_
   :links: biotools: :biotools:`synlet`, doi: :doi:`10.1101/043570`

   


.. conda:package:: bioconductor-synlet

   |downloads_bioconductor-synlet| |docker_bioconductor-synlet|

   :versions: 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-rankprod` >=3.8.0,<3.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doby`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-magrittr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-synlet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synlet

   and update with::

      conda update bioconductor-synlet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-synlet


.. |required_by_bioconductor-synlet| conda:required_by:: bioconductor-synlet
.. |downloads_bioconductor-synlet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synlet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-synlet| image:: https://quay.io/repository/biocontainers/bioconductor-synlet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synlet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synlet/README.html

