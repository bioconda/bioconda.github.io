:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arraytv'
.. highlight: bash

bioconductor-arraytv
====================

.. conda:recipe:: bioconductor-arraytv
   :replaces_section_title:

   Implementation of wave correction for arrays

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ArrayTV.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-arraytv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraytv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraytv/meta.yaml>`_

   Wave correction for genotyping and copy number arrays


.. conda:package:: bioconductor-arraytv

   |downloads_bioconductor-arraytv| |docker_bioconductor-arraytv|

   :versions: 1.25.0-0, 1.24.0-0, 1.22.0-1, 1.20.0-0
   
   :depends bioconductor-dnacopy: >=1.62.0,<1.63.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-oligoclasses: >=1.50.0,<1.51.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-foreach: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arraytv

   and update with::

      conda update bioconductor-arraytv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arraytv:<tag>

   (see `bioconductor-arraytv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arraytv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arraytv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arraytv
   :alt:   (downloads)
.. |docker_bioconductor-arraytv| image:: https://quay.io/repository/biocontainers/bioconductor-arraytv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arraytv
.. _`bioconductor-arraytv/tags`: https://quay.io/repository/biocontainers/bioconductor-arraytv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arraytv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arraytv/README.html