:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bladderbatch'
.. highlight: bash

bioconductor-bladderbatch
=========================

.. conda:recipe:: bioconductor-bladderbatch
   :replaces_section_title:

   This package contains microarray gene expression data on 57 bladder samples from 5 batches. The data are used as an illustrative example for the sva package.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/bladderbatch.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bladderbatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bladderbatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bladderbatch/meta.yaml>`_

   


.. conda:package:: bioconductor-bladderbatch

   |downloads_bioconductor-bladderbatch| |docker_bioconductor-bladderbatch|

   :versions: 1.22.0-1, 1.20.0-0, 1.18.0-0, 1.14.0-1, 1.14.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bladderbatch

   and update with::

      conda update bioconductor-bladderbatch

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bladderbatch:<tag>

   (see `bioconductor-bladderbatch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bladderbatch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bladderbatch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bladderbatch
   :alt:   (downloads)
.. |docker_bioconductor-bladderbatch| image:: https://quay.io/repository/biocontainers/bioconductor-bladderbatch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bladderbatch
.. _`bioconductor-bladderbatch/tags`: https://quay.io/repository/biocontainers/bioconductor-bladderbatch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bladderbatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bladderbatch/README.html