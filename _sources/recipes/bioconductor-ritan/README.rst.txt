:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ritan'
.. highlight: bash

bioconductor-ritan
==================

.. conda:recipe:: bioconductor-ritan
   :replaces_section_title:

   Rapid Integration of Term Annotation and Network resources

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RITAN.html
   :license: file LICENSE
   :recipe: /`bioconductor-ritan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ritan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ritan/meta.yaml>`_

   Tools for comprehensive gene set enrichment and extraction of multi\-resource high confidence subnetworks. RITAN facilitates bioinformatic tasks for enabling network biology research.


.. conda:package:: bioconductor-ritan

   |downloads_bioconductor-ritan| |docker_bioconductor-ritan|

   :versions: 1.10.0-1, 1.8.0-1, 1.6.0-1, 1.6.0-0
   
   :depends bioconductor-bgeedb: >=2.12.0,<2.13.0
   :depends bioconductor-ritandata: >=1.10.0,<1.11.0
   :depends bioconductor-stringdb: >=1.26.0,<1.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dynamictreecut: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-gsubfn: 
   :depends r-hash: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-linkcomm: 
   :depends r-mcl: 
   :depends r-plotrix: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-sqldf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ritan

   and update with::

      conda update bioconductor-ritan

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ritan:<tag>

   (see `bioconductor-ritan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ritan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ritan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ritan
   :alt:   (downloads)
.. |docker_bioconductor-ritan| image:: https://quay.io/repository/biocontainers/bioconductor-ritan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ritan
.. _`bioconductor-ritan/tags`: https://quay.io/repository/biocontainers/bioconductor-ritan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ritan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ritan/README.html