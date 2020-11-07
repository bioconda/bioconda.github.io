:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hcamatrixbrowser'
.. highlight: bash

bioconductor-hcamatrixbrowser
=============================

.. conda:recipe:: bioconductor-hcamatrixbrowser
   :replaces_section_title:
   :noindex:

   Extract and manage matrix data from the Human Cell Atlas project

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/HCAMatrixBrowser.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hcamatrixbrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcamatrixbrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcamatrixbrowser/meta.yaml>`_

   The HCAMatrixBrowser queries the HCA matrix endpoint to download expression data and returns a standard Bioconductor object. It uses the LoomExperiment package to serve matrix data that is downloaded as HDF5 loom format.


.. conda:package:: bioconductor-hcamatrixbrowser

   |downloads_bioconductor-hcamatrixbrowser| |docker_bioconductor-hcamatrixbrowser|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-anvil: ``>=1.2.0,<1.3.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-progress: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hcamatrixbrowser

   and update with::

      conda update bioconductor-hcamatrixbrowser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hcamatrixbrowser:<tag>

   (see `bioconductor-hcamatrixbrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hcamatrixbrowser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hcamatrixbrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hcamatrixbrowser
   :alt:   (downloads)
.. |docker_bioconductor-hcamatrixbrowser| image:: https://quay.io/repository/biocontainers/bioconductor-hcamatrixbrowser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hcamatrixbrowser
.. _`bioconductor-hcamatrixbrowser/tags`: https://quay.io/repository/biocontainers/bioconductor-hcamatrixbrowser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hcamatrixbrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hcamatrixbrowser/README.html