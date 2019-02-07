.. title:: Package Recipe 'bioconductor-ritan'
.. highlight: bash


bioconductor-ritan
==================

.. conda:recipe:: bioconductor-ritan
   :replaces_section_title:

   Tools for comprehensive gene set enrichment and extraction of multi\-resource high confidence subnetworks. RITAN facilitates bioinformatic tasks for enabling network biology research.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RITAN.html
   :license: file LICENSE
   :recipe: /`bioconductor-ritan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ritan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ritan/meta.yaml>`_

   


.. conda:package:: bioconductor-ritan

   |downloads_bioconductor-ritan| |docker_bioconductor-ritan|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-bgeedb` >=2.8.0,<2.9.0 :conda:package:`bioconductor-ritandata` >=1.6.0,<1.7.0 :conda:package:`bioconductor-stringdb` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dynamictreecut`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-gsubfn`  :conda:package:`r-hash`  :conda:package:`r-igraph`  :conda:package:`r-knitr`  :conda:package:`r-linkcomm`  :conda:package:`r-mcl`  :conda:package:`r-plotrix`  :conda:package:`r-png`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-sqldf`  

   :required~by: |required_by_bioconductor-ritan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ritan

   and update with::

      conda update bioconductor-ritan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ritan


.. |required_by_bioconductor-ritan| conda:required_by:: bioconductor-ritan
.. |downloads_bioconductor-ritan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ritan.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ritan| image:: https://quay.io/repository/biocontainers/bioconductor-ritan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ritan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ritan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ritan/README.html

