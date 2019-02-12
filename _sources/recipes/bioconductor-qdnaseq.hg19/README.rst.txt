:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qdnaseq.hg19'
.. highlight: bash

bioconductor-qdnaseq.hg19
=========================

.. conda:recipe:: bioconductor-qdnaseq.hg19
   :replaces_section_title:

   This package provides QDNAseq bin annotations for the human genome build hg19.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/QDNAseq.hg19.html
   :license: GPL
   :recipe: /`bioconductor-qdnaseq.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qdnaseq.hg19/meta.yaml>`_

   


.. conda:package:: bioconductor-qdnaseq.hg19

   |downloads_bioconductor-qdnaseq.hg19| |docker_bioconductor-qdnaseq.hg19|

   :versions: 1.12.0-0
   
   :depends bioconductor-qdnaseq: >=1.18.0,<1.19.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qdnaseq.hg19

   and update with::

      conda update bioconductor-qdnaseq.hg19

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19:<tag>

   (see `bioconductor-qdnaseq.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qdnaseq.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qdnaseq.hg19.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qdnaseq.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19
.. _`bioconductor-qdnaseq.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-qdnaseq.hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qdnaseq.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qdnaseq.hg19/README.html