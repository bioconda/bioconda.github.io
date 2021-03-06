:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ramr'
.. highlight: bash

bioconductor-ramr
=================

.. conda:recipe:: bioconductor-ramr
   :replaces_section_title:
   :noindex:

   Detection of Rare Aberrantly Methylated Regions in Array and NGS Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ramr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ramr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr/meta.yaml>`_

   ramr is an R package for detection of low\-frequency aberrant methylation events in large datasets obtained by methylation profiling using array or high\-throughput bisulfite sequencing. In addition\, package provides functions to visualize found aberrantly methylated regions \(AMRs\)\, and to generate sets of all possible regions to be used as reference sets for enrichment analysis.


.. conda:package:: bioconductor-ramr

   |downloads_bioconductor-ramr| |docker_bioconductor-ramr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-envstats: 
   :depends r-extdist: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ramr

   and update with::

      conda update bioconductor-ramr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ramr:<tag>

   (see `bioconductor-ramr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ramr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ramr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ramr
   :alt:   (downloads)
.. |docker_bioconductor-ramr| image:: https://quay.io/repository/biocontainers/bioconductor-ramr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ramr
.. _`bioconductor-ramr/tags`: https://quay.io/repository/biocontainers/bioconductor-ramr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ramr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ramr/README.html