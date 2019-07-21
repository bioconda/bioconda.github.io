:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aneufinderdata'
.. highlight: bash

bioconductor-aneufinderdata
===========================

.. conda:recipe:: bioconductor-aneufinderdata
   :replaces_section_title:

   Whole\-genome single cell sequencing data for demonstration purposes in the AneuFinder package.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/AneuFinderData.html
   :license: file LICENSE
   :recipe: /`bioconductor-aneufinderdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinderdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aneufinderdata/meta.yaml>`_

   


.. conda:package:: bioconductor-aneufinderdata

   |downloads_bioconductor-aneufinderdata| |docker_bioconductor-aneufinderdata|

   :versions: 1.12.0-1, 1.12.0-0, 1.10.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aneufinderdata

   and update with::

      conda update bioconductor-aneufinderdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aneufinderdata:<tag>

   (see `bioconductor-aneufinderdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aneufinderdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aneufinderdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aneufinderdata
   :alt:   (downloads)
.. |docker_bioconductor-aneufinderdata| image:: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata
.. _`bioconductor-aneufinderdata/tags`: https://quay.io/repository/biocontainers/bioconductor-aneufinderdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aneufinderdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aneufinderdata/README.html