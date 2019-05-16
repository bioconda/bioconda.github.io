:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-generecommender'
.. highlight: bash

bioconductor-generecommender
============================

.. conda:recipe:: bioconductor-generecommender
   :replaces_section_title:

   This package contains a targeted clustering algorithm for the analysis of microarray data. The algorithm can aid in the discovery of new genes with similar functions to a given list of genes already known to have closely related functions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/geneRecommender.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-generecommender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generecommender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generecommender/meta.yaml>`_
   :links: biotools: :biotools:`generecommender`, doi: :doi:`10.1101/gr.1125403`

   


.. conda:package:: bioconductor-generecommender

   |downloads_bioconductor-generecommender| |docker_bioconductor-generecommender|

   :versions: 1.54.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-generecommender

   and update with::

      conda update bioconductor-generecommender

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-generecommender:<tag>

   (see `bioconductor-generecommender/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-generecommender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-generecommender.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-generecommender
   :alt:   (downloads)
.. |docker_bioconductor-generecommender| image:: https://quay.io/repository/biocontainers/bioconductor-generecommender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-generecommender
.. _`bioconductor-generecommender/tags`: https://quay.io/repository/biocontainers/bioconductor-generecommender?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-generecommender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-generecommender/README.html