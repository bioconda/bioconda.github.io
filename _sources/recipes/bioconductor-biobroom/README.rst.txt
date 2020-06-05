:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobroom'
.. highlight: bash

bioconductor-biobroom
=====================

.. conda:recipe:: bioconductor-biobroom
   :replaces_section_title:
   :noindex:

   Turn Bioconductor objects into tidy data frames

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/biobroom.html
   :license: LGPL
   :recipe: /`bioconductor-biobroom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobroom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobroom/meta.yaml>`_

   This package contains methods for converting standard objects constructed by bioinformatics packages\, especially those in Bioconductor\, and converting them to tidy data. It thus serves as a complement to the broom package\, and follows the same the tidy\, augment\, glance division of tidying methods. Tidying data makes it easy to recombine\, reshape and visualize bioinformatics analyses.


.. conda:package:: bioconductor-biobroom

   |downloads_bioconductor-biobroom| |docker_bioconductor-biobroom|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biobroom

   and update with::

      conda update bioconductor-biobroom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biobroom:<tag>

   (see `bioconductor-biobroom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biobroom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobroom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobroom
   :alt:   (downloads)
.. |docker_bioconductor-biobroom| image:: https://quay.io/repository/biocontainers/bioconductor-biobroom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobroom
.. _`bioconductor-biobroom/tags`: https://quay.io/repository/biocontainers/bioconductor-biobroom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobroom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobroom/README.html