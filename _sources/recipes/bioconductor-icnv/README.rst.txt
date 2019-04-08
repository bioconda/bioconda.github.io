:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icnv'
.. highlight: bash

bioconductor-icnv
=================

.. conda:recipe:: bioconductor-icnv
   :replaces_section_title:

   Integrative copy number variation \(CNV\) detection from multiple platform and experimental design.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iCNV.html
   :license: GPL-2
   :recipe: /`bioconductor-icnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icnv/meta.yaml>`_

   


.. conda:package:: bioconductor-icnv

   |downloads_bioconductor-icnv| |docker_bioconductor-icnv|

   :versions: 1.2.1-0, 1.2.0-0
   
   :depends bioconductor-codex: >=1.14.0,<1.15.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-truncnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icnv

   and update with::

      conda update bioconductor-icnv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icnv:<tag>

   (see `bioconductor-icnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icnv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-icnv| image:: https://quay.io/repository/biocontainers/bioconductor-icnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icnv
.. _`bioconductor-icnv/tags`: https://quay.io/repository/biocontainers/bioconductor-icnv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icnv/README.html