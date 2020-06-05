:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-npgsea'
.. highlight: bash

bioconductor-npgsea
===================

.. conda:recipe:: bioconductor-npgsea
   :replaces_section_title:
   :noindex:

   Permutation approximation methods for gene set enrichment analysis \(non\-permutation GSEA\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/npGSEA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-npgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-npgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-npgsea/meta.yaml>`_
   :links: biotools: :biotools:`npgsea`

   Current gene set enrichment methods rely upon permutations for inference.  These approaches are computationally expensive and have minimum achievable p\-values based on the number of permutations\, not on the actual observed statistics.  We have derived three parametric approximations to the permutation distributions of two gene set enrichment test statistics.  We are able to reduce the computational burden and granularity issues of permutation testing with our method\, which is implemented in this package. npGSEA calculates gene set enrichment statistics and p\-values without the computational cost of permutations.  It is applicable in settings where one or many gene sets are of interest.  There are also built\-in plotting functions to help users visualize results.


.. conda:package:: bioconductor-npgsea

   |downloads_bioconductor-npgsea| |docker_bioconductor-npgsea|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-gseabase: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-npgsea

   and update with::

      conda update bioconductor-npgsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-npgsea:<tag>

   (see `bioconductor-npgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-npgsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-npgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-npgsea
   :alt:   (downloads)
.. |docker_bioconductor-npgsea| image:: https://quay.io/repository/biocontainers/bioconductor-npgsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-npgsea
.. _`bioconductor-npgsea/tags`: https://quay.io/repository/biocontainers/bioconductor-npgsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-npgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-npgsea/README.html