.. title:: Package Recipe 'bioconductor-rnits'
.. highlight: bash


bioconductor-rnits
==================

.. conda:recipe:: bioconductor-rnits
   :replaces_section_title:

   R\/Bioconductor package for normalization\, curve registration and inference in time course gene expression data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rnits.html
   :license: GPL-3
   :recipe: /`bioconductor-rnits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnits/meta.yaml>`_
   :links: biotools: :biotools:`rnits`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rnits

   |downloads_bioconductor-rnits| |docker_bioconductor-rnits|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.11.0, 1.10.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-boot`  :conda:package:`r-ggplot2`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-rnits|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnits

   and update with::

      conda update bioconductor-rnits

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rnits


.. |required_by_bioconductor-rnits| conda:required_by:: bioconductor-rnits
.. |downloads_bioconductor-rnits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnits.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnits| image:: https://quay.io/repository/biocontainers/bioconductor-rnits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnits







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnits/README.html

