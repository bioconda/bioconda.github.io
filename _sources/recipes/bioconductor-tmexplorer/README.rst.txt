:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tmexplorer'
.. highlight: bash

bioconductor-tmexplorer
=======================

.. conda:recipe:: bioconductor-tmexplorer
   :replaces_section_title:
   :noindex:

   A Collection of Tumour Microenvironment Single\-cell RNA Sequencing Datasets and Corresponding Metadata

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/TMExplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tmexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tmexplorer/meta.yaml>`_

   This package provides a tool to search and download a collection of tumour microenvironment single\-cell RNA sequencing datasets and their metadata. TMExplorer aims to act as a single point of entry for users looking to study the tumour microenvironment at the single cell level. Users can quickly search available datasets using the metadata table and then download the ones they are interested in for analysis.


.. conda:package:: bioconductor-tmexplorer

   |downloads_bioconductor-tmexplorer| |docker_bioconductor-tmexplorer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.1-0``,  ``0.99.6-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tmexplorer

   and update with::

      conda update bioconductor-tmexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tmexplorer:<tag>

   (see `bioconductor-tmexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tmexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tmexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tmexplorer
   :alt:   (downloads)
.. |docker_bioconductor-tmexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-tmexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tmexplorer
.. _`bioconductor-tmexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-tmexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tmexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tmexplorer/README.html