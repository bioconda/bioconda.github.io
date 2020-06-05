:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cmapr'
.. highlight: bash

bioconductor-cmapr
==================

.. conda:recipe:: bioconductor-cmapr
   :replaces_section_title:
   :noindex:

   CMap Tools in R

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cmapR.html
   :license: file LICENSE
   :recipe: /`bioconductor-cmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmapr/meta.yaml>`_

   The Connectivity Map \(CMap\) is a massive resource of perturbational gene expression profiles built by researchers at the Broad Institute and funded by the NIH Library of Integrated Network\-Based Cellular Signatures \(LINCS\) program. Please visit https\:\/\/clue.io for more information. The cmapR package implements methods to parse\, manipulate\, and write common \(CMap\) data objects\, such as annotated matrices and collections of gene sets.


.. conda:package:: bioconductor-cmapr

   |downloads_bioconductor-cmapr| |docker_bioconductor-cmapr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-prada: ``>=1.63.0,<1.64.0``
   :depends bioconductor-rhdf5: ``>=2.32.0,<2.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cmapr

   and update with::

      conda update bioconductor-cmapr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cmapr:<tag>

   (see `bioconductor-cmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cmapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cmapr
   :alt:   (downloads)
.. |docker_bioconductor-cmapr| image:: https://quay.io/repository/biocontainers/bioconductor-cmapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cmapr
.. _`bioconductor-cmapr/tags`: https://quay.io/repository/biocontainers/bioconductor-cmapr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cmapr/README.html