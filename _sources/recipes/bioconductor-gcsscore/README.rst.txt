:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcsscore'
.. highlight: bash

bioconductor-gcsscore
=====================

.. conda:recipe:: bioconductor-gcsscore
   :replaces_section_title:
   :noindex:

   GCSscore\: an R package for microarray analysis for Affymetrix\/Thermo Fisher arrays

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GCSscore.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-gcsscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsscore/meta.yaml>`_

   For differential expression analysis of 3\'IVT and WT\-style microarrays from Affymetrix\/Thermo\-Fisher.  Based on S\-score algorithm originally described by Zhang et al 2002.


.. conda:package:: bioconductor-gcsscore

   |downloads_bioconductor-gcsscore| |docker_bioconductor-gcsscore|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-affxparser: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dplr: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcsscore

   and update with::

      conda update bioconductor-gcsscore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcsscore:<tag>

   (see `bioconductor-gcsscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcsscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcsscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcsscore
   :alt:   (downloads)
.. |docker_bioconductor-gcsscore| image:: https://quay.io/repository/biocontainers/bioconductor-gcsscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcsscore
.. _`bioconductor-gcsscore/tags`: https://quay.io/repository/biocontainers/bioconductor-gcsscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcsscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcsscore/README.html