:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.gnomadex.r2.1.grch38'
.. highlight: bash

bioconductor-mafdb.gnomadex.r2.1.grch38
=======================================

.. conda:recipe:: bioconductor-mafdb.gnomadex.r2.1.grch38
   :replaces_section_title:

   Minor allele frequency data from gnomAD exomes release 2.1 for GRCh38

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/MafDb.gnomADex.r2.1.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.gnomadex.r2.1.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.gnomadex.r2.1.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.gnomadex.r2.1.grch38/meta.yaml>`_

   Store minor allele frequency data from the Genome Aggregation Database \(gnomAD exomes release 2.1\) for the human genome version GRCh38.


.. conda:package:: bioconductor-mafdb.gnomadex.r2.1.grch38

   |downloads_bioconductor-mafdb.gnomadex.r2.1.grch38| |docker_bioconductor-mafdb.gnomadex.r2.1.grch38|

   :versions: 3.10.0-1, 3.10.0-0, 3.9.0-1
   
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-genomicscores: >=2.0.0,<2.1.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mafdb.gnomadex.r2.1.grch38

   and update with::

      conda update bioconductor-mafdb.gnomadex.r2.1.grch38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.gnomadex.r2.1.grch38:<tag>

   (see `bioconductor-mafdb.gnomadex.r2.1.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.gnomadex.r2.1.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.gnomadex.r2.1.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.gnomadex.r2.1.grch38
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.gnomadex.r2.1.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomadex.r2.1.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomadex.r2.1.grch38
.. _`bioconductor-mafdb.gnomadex.r2.1.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.gnomadex.r2.1.grch38?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.gnomadex.r2.1.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.gnomadex.r2.1.grch38/README.html