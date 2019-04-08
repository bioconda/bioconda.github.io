:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arraytv'
.. highlight: bash

bioconductor-arraytv
====================

.. conda:recipe:: bioconductor-arraytv
   :replaces_section_title:

   Wave correction for genotyping and copy number arrays

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ArrayTV.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-arraytv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraytv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraytv/meta.yaml>`_

   


.. conda:package:: bioconductor-arraytv

   |downloads_bioconductor-arraytv| |docker_bioconductor-arraytv|

   :versions: 1.20.0-0
   
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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