:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasillatranscriptexpr'
.. highlight: bash

bioconductor-pasillatranscriptexpr
==================================

.. conda:recipe:: bioconductor-pasillatranscriptexpr
   :replaces_section_title:

   Provides kallisto workflow and transcript expression of RNA\-Seq data from Brooks et al.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/PasillaTranscriptExpr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pasillatranscriptexpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillatranscriptexpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillatranscriptexpr/meta.yaml>`_

   


.. conda:package:: bioconductor-pasillatranscriptexpr

   |downloads_bioconductor-pasillatranscriptexpr| |docker_bioconductor-pasillatranscriptexpr|

   :versions: 1.10.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pasillatranscriptexpr

   and update with::

      conda update bioconductor-pasillatranscriptexpr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr:<tag>

   (see `bioconductor-pasillatranscriptexpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pasillatranscriptexpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasillatranscriptexpr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pasillatranscriptexpr| image:: https://quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr
.. _`bioconductor-pasillatranscriptexpr/tags`: https://quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasillatranscriptexpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasillatranscriptexpr/README.html