.. title:: Package Recipe 'bioconductor-gsca'
.. highlight: bash


bioconductor-gsca
=================

.. conda:recipe:: bioconductor-gsca
   :replaces_section_title:

   GSCA takes as input several lists of activated and repressed genes. GSCA then searches through a compendium of publicly available gene expression profiles for biological contexts that are enriched with a specified pattern of gene expression. GSCA provides both traditional R functions and interactive\, user\-friendly user interface.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSCA.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-gsca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsca/meta.yaml>`_
   :links: biotools: :biotools:`gsca`

   


.. conda:package:: bioconductor-gsca

   |downloads_bioconductor-gsca| |docker_bioconductor-gsca|

   :versions: 2.12.0, 2.10.0, 2.8.0

   :depends: :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  :conda:package:`r-sp`  

   :required~by: |required_by_bioconductor-gsca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsca

   and update with::

      conda update bioconductor-gsca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gsca


.. |required_by_bioconductor-gsca| conda:required_by:: bioconductor-gsca
.. |downloads_bioconductor-gsca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsca.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsca| image:: https://quay.io/repository/biocontainers/bioconductor-gsca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsca/README.html

