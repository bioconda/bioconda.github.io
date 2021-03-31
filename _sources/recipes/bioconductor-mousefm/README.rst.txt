:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousefm'
.. highlight: bash

bioconductor-mousefm
====================

.. conda:recipe:: bioconductor-mousefm
   :replaces_section_title:
   :noindex:

   In\-silico methods for genetic finemapping in inbred mice

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MouseFM.html
   :license: GPL-3
   :recipe: /`bioconductor-mousefm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousefm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousefm/meta.yaml>`_

   This package provides methods for genetic finemapping in inbred mice by taking advantage of their very high homozygosity rate \(\>95\%\).


.. conda:package:: bioconductor-mousefm

   |downloads_bioconductor-mousefm| |docker_bioconductor-mousefm|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-reshape2: 
   :depends r-rlist: 
   :depends r-scales: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mousefm

   and update with::

      conda update bioconductor-mousefm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mousefm:<tag>

   (see `bioconductor-mousefm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mousefm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousefm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousefm
   :alt:   (downloads)
.. |docker_bioconductor-mousefm| image:: https://quay.io/repository/biocontainers/bioconductor-mousefm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousefm
.. _`bioconductor-mousefm/tags`: https://quay.io/repository/biocontainers/bioconductor-mousefm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousefm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousefm/README.html