:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminadatatestfiles'
.. highlight: bash

bioconductor-illuminadatatestfiles
==================================

.. conda:recipe:: bioconductor-illuminadatatestfiles
   :replaces_section_title:

   Illumina microarray files \(IDAT\) for testing

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/IlluminaDataTestFiles.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminadatatestfiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminadatatestfiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminadatatestfiles/meta.yaml>`_

   Example data for Illumina microarray output files\, for testing purposes


.. conda:package:: bioconductor-illuminadatatestfiles

   |downloads_bioconductor-illuminadatatestfiles| |docker_bioconductor-illuminadatatestfiles|

   :versions: 1.22.0-1, 1.22.0-0, 1.20.0-0
   
   :depends curl: >=7.65.2,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminadatatestfiles

   and update with::

      conda update bioconductor-illuminadatatestfiles

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminadatatestfiles:<tag>

   (see `bioconductor-illuminadatatestfiles/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminadatatestfiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminadatatestfiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminadatatestfiles
   :alt:   (downloads)
.. |docker_bioconductor-illuminadatatestfiles| image:: https://quay.io/repository/biocontainers/bioconductor-illuminadatatestfiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminadatatestfiles
.. _`bioconductor-illuminadatatestfiles/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminadatatestfiles?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminadatatestfiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminadatatestfiles/README.html