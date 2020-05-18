:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.athaliana.tair.tair9'
.. highlight: bash

bioconductor-bsgenome.athaliana.tair.tair9
==========================================

.. conda:recipe:: bioconductor-bsgenome.athaliana.tair.tair9
   :replaces_section_title:

   Full genome sequences for Arabidopsis thaliana \(TAIR9\)

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/BSgenome.Athaliana.TAIR.TAIR9.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.athaliana.tair.tair9 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.athaliana.tair.tair9>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.athaliana.tair.tair9/meta.yaml>`_

   Full genome sequences for Arabidopsis thaliana as provided by TAIR \(TAIR9 Genome Release\) and stored in Biostrings objects. Note that TAIR10 is an \"annotation release\" based on the same genome assembly as TAIR9.


.. conda:package:: bioconductor-bsgenome.athaliana.tair.tair9

   |downloads_bioconductor-bsgenome.athaliana.tair.tair9| |docker_bioconductor-bsgenome.athaliana.tair.tair9|

   :versions: 1.3.1000-4, 1.3.1000-3, 1.3.1000-2, 1.3.1000-0
   
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.athaliana.tair.tair9

   and update with::

      conda update bioconductor-bsgenome.athaliana.tair.tair9

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.athaliana.tair.tair9:<tag>

   (see `bioconductor-bsgenome.athaliana.tair.tair9/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.athaliana.tair.tair9| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.athaliana.tair.tair9.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.athaliana.tair.tair9
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.athaliana.tair.tair9| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.athaliana.tair.tair9/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.athaliana.tair.tair9
.. _`bioconductor-bsgenome.athaliana.tair.tair9/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.athaliana.tair.tair9?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.athaliana.tair.tair9/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.athaliana.tair.tair9/README.html