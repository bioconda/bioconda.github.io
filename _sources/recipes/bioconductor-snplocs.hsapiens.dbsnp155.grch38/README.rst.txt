:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp155.grch38'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp155.grch38
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp155.grch38
   :replaces_section_title:
   :noindex:

   Human SNP locations and alleles extracted from dbSNP Build 155 and placed on the GRCh38\/hg38 assembly

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/SNPlocs.Hsapiens.dbSNP155.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp155.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch38/meta.yaml>`_

   The 949\,021\,448 SNPs in this package were extracted from the RefSNP JSON files for chromosomes 1\-22\, X\, Y\, and MT\, located at https\:\/\/ftp.ncbi.nih.gov\/snp\/archive\/b155\/JSON\/ \(these files were created by NCBI in May 2021\). These SNPs can be \"injected\" in BSgenome.Hsapiens.NCBI.GRCh38 or BSgenome.Hsapiens.UCSC.hg38.


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp155.grch38

   |downloads_bioconductor-snplocs.hsapiens.dbsnp155.grch38| |docker_bioconductor-snplocs.hsapiens.dbsnp155.grch38|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-snplocs.hsapiens.dbsnp155.grch38

   and update with::

      mamba update bioconductor-snplocs.hsapiens.dbsnp155.grch38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snplocs.hsapiens.dbsnp155.grch38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch38:<tag>

   (see `bioconductor-snplocs.hsapiens.dbsnp155.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snplocs.hsapiens.dbsnp155.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp155.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp155.grch38
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp155.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch38
.. _`bioconductor-snplocs.hsapiens.dbsnp155.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snplocs.hsapiens.dbsnp155.grch38";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch38/README.html