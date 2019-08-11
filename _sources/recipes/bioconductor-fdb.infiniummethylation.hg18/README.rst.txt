:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.infiniummethylation.hg18'
.. highlight: bash

bioconductor-fdb.infiniummethylation.hg18
=========================================

.. conda:recipe:: bioconductor-fdb.infiniummethylation.hg18
   :replaces_section_title:

   Compiled HumanMethylation27 and HumanMethylation450 annotations

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/FDb.InfiniumMethylation.hg18.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.infiniummethylation.hg18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg18/meta.yaml>`_

   


.. conda:package:: bioconductor-fdb.infiniummethylation.hg18

   |downloads_bioconductor-fdb.infiniummethylation.hg18| |docker_bioconductor-fdb.infiniummethylation.hg18|

   :versions: 2.2.0-2, 2.2.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: >=3.2.0,<3.3.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fdb.infiniummethylation.hg18

   and update with::

      conda update bioconductor-fdb.infiniummethylation.hg18

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.infiniummethylation.hg18:<tag>

   (see `bioconductor-fdb.infiniummethylation.hg18/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.infiniummethylation.hg18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.infiniummethylation.hg18.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.infiniummethylation.hg18
   :alt:   (downloads)
.. |docker_bioconductor-fdb.infiniummethylation.hg18| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18
.. _`bioconductor-fdb.infiniummethylation.hg18/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg18/README.html