:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg18'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg18
========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg18
   :replaces_section_title:

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg18\, Mar. 2006\) and stored in Biostrings objects.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/BSgenome.Hsapiens.UCSC.hg18.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg18/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg18

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg18| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg18|

   :versions: 1.3.1000-5, 1.3.1000-3, 1.3.1000-2, 1.3.1000-0
   
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg18

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg18

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg18:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg18/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg18.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg18
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg18| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg18
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg18/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg18?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg18/README.html