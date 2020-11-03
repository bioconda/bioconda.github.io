:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scthi.data'
.. highlight: bash

bioconductor-scthi.data
=======================

.. conda:recipe:: bioconductor-scthi.data
   :replaces_section_title:
   :noindex:

   The package contains examples of single cell data used in vignettes and examples of the scTHI package\; data contain both tumor cells and immune cells from public dataset of glioma

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/scTHI.data.html
   :license: GPL-2
   :recipe: /`bioconductor-scthi.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scthi.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scthi.data/meta.yaml>`_

   Data for the vignette and tutorial of the package scTHI.


.. conda:package:: bioconductor-scthi.data

   |downloads_bioconductor-scthi.data| |docker_bioconductor-scthi.data|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scthi.data

   and update with::

      conda update bioconductor-scthi.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scthi.data:<tag>

   (see `bioconductor-scthi.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scthi.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scthi.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scthi.data
   :alt:   (downloads)
.. |docker_bioconductor-scthi.data| image:: https://quay.io/repository/biocontainers/bioconductor-scthi.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scthi.data
.. _`bioconductor-scthi.data/tags`: https://quay.io/repository/biocontainers/bioconductor-scthi.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scthi.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scthi.data/README.html