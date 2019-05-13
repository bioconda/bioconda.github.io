:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ncbi.grch38'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ncbi.grch38
==========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ncbi.grch38
   :replaces_section_title:

   Full genome sequences for Homo sapiens \(Human\) as provided by NCBI \(GRCh38\, 2013\-12\-17\) and stored in Biostrings objects.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Hsapiens.NCBI.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ncbi.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.hsapiens.ncbi.grch38

   |downloads_bioconductor-bsgenome.hsapiens.ncbi.grch38| |docker_bioconductor-bsgenome.hsapiens.ncbi.grch38|

   :versions: 1.3.1000-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ncbi.grch38

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ncbi.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38:<tag>

   (see `bioconductor-bsgenome.hsapiens.ncbi.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ncbi.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ncbi.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ncbi.grch38
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ncbi.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38
.. _`bioconductor-bsgenome.hsapiens.ncbi.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.grch38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ncbi.grch38/README.html