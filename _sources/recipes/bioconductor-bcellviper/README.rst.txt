:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcellviper'
.. highlight: bash

bioconductor-bcellviper
=======================

.. conda:recipe:: bioconductor-bcellviper
   :replaces_section_title:
   :noindex:

   Human B\-cell transcriptional interactome and normal human B\-cell expression data

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/bcellViper.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-bcellviper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcellviper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcellviper/meta.yaml>`_

   This package provides a human B\-cell context\-specific transcriptional regulatory network and a human normal B\-cells dataset for the examples in package viper.


.. conda:package:: bioconductor-bcellviper

   |downloads_bioconductor-bcellviper| |docker_bioconductor-bcellviper|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bcellviper

   and update with::

      conda update bioconductor-bcellviper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bcellviper:<tag>

   (see `bioconductor-bcellviper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bcellviper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcellviper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bcellviper
   :alt:   (downloads)
.. |docker_bioconductor-bcellviper| image:: https://quay.io/repository/biocontainers/bioconductor-bcellviper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcellviper
.. _`bioconductor-bcellviper/tags`: https://quay.io/repository/biocontainers/bioconductor-bcellviper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcellviper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcellviper/README.html