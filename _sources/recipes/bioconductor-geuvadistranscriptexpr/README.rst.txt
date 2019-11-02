:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geuvadistranscriptexpr'
.. highlight: bash

bioconductor-geuvadistranscriptexpr
===================================

.. conda:recipe:: bioconductor-geuvadistranscriptexpr
   :replaces_section_title:

   Provides transcript expression and bi\-allelic genotypes corresponding to the chromosome 19 for CEU individuals from the GEUVADIS project\, Lappalainen et al.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/GeuvadisTranscriptExpr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-geuvadistranscriptexpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvadistranscriptexpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geuvadistranscriptexpr/meta.yaml>`_

   


.. conda:package:: bioconductor-geuvadistranscriptexpr

   |downloads_bioconductor-geuvadistranscriptexpr| |docker_bioconductor-geuvadistranscriptexpr|

   :versions: 1.13.0-0, 1.12.0-1, 1.12.0-0, 1.10.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geuvadistranscriptexpr

   and update with::

      conda update bioconductor-geuvadistranscriptexpr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geuvadistranscriptexpr:<tag>

   (see `bioconductor-geuvadistranscriptexpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geuvadistranscriptexpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geuvadistranscriptexpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geuvadistranscriptexpr
   :alt:   (downloads)
.. |docker_bioconductor-geuvadistranscriptexpr| image:: https://quay.io/repository/biocontainers/bioconductor-geuvadistranscriptexpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geuvadistranscriptexpr
.. _`bioconductor-geuvadistranscriptexpr/tags`: https://quay.io/repository/biocontainers/bioconductor-geuvadistranscriptexpr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geuvadistranscriptexpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geuvadistranscriptexpr/README.html