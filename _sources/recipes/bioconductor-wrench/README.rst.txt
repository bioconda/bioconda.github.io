:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wrench'
.. highlight: bash

bioconductor-wrench
===================

.. conda:recipe:: bioconductor-wrench
   :replaces_section_title:

   Wrench is a package for normalization sparse genomic count data\, like that arising from 16s metagenomic surveys.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Wrench.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wrench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wrench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wrench/meta.yaml>`_

   


.. conda:package:: bioconductor-wrench

   |downloads_bioconductor-wrench| |docker_bioconductor-wrench|

   :versions: 1.0.0-0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-locfit: 
   
   :depends r-matrixstats: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wrench

   and update with::

      conda update bioconductor-wrench

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wrench:<tag>

   (see `bioconductor-wrench/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wrench| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wrench.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-wrench| image:: https://quay.io/repository/biocontainers/bioconductor-wrench/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wrench
.. _`bioconductor-wrench/tags`: https://quay.io/repository/biocontainers/bioconductor-wrench?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wrench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wrench/README.html