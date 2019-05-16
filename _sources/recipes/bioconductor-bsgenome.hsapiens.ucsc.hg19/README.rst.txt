:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg19'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg19
========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg19
   :replaces_section_title:

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg19\, Feb. 2009\) and stored in Biostrings objects.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/BSgenome.Hsapiens.UCSC.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg19

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg19| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg19|

   :versions: 1.4.0-5, 1.4.0-4, 1.4.0-2, 1.4.0-1, 1.4.0-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg19

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg19
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19/README.html