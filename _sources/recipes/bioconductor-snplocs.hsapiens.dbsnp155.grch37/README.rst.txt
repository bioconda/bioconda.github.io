:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp155.grch37'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp155.grch37
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp155.grch37
   :replaces_section_title:
   :noindex:

   Human SNP locations and alleles extracted from dbSNP Build 155 and placed on the GRCh37\/hg19 assembly

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/SNPlocs.Hsapiens.dbSNP155.GRCh37.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp155.grch37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37/meta.yaml>`_

   The 929\,496\,192 SNPs in this package were extracted from the RefSNP JSON files for chromosomes 1\-22\, X\, Y\, and MT\, located at https\:\/\/ftp.ncbi.nih.gov\/snp\/archive\/b155\/JSON\/ \(these files were created by NCBI in May 2021\). These SNPs can be \"injected\" in BSgenome.Hsapiens.UCSC.hg19.


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp155.grch37

   |downloads_bioconductor-snplocs.hsapiens.dbsnp155.grch37| |docker_bioconductor-snplocs.hsapiens.dbsnp155.grch37|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-snplocs.hsapiens.dbsnp155.grch37

   and update with::

      mamba update bioconductor-snplocs.hsapiens.dbsnp155.grch37

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snplocs.hsapiens.dbsnp155.grch37

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37:<tag>

   (see `bioconductor-snplocs.hsapiens.dbsnp155.grch37/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snplocs.hsapiens.dbsnp155.grch37| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp155.grch37.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp155.grch37
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp155.grch37| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37
.. _`bioconductor-snplocs.hsapiens.dbsnp155.grch37/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snplocs.hsapiens.dbsnp155.grch37";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37/README.html