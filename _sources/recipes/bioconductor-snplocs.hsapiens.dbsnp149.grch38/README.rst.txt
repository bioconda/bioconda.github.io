:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp149.grch38'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp149.grch38
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp149.grch38
   :replaces_section_title:
   :noindex:

   SNP locations for Homo sapiens \(dbSNP Build 149\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/SNPlocs.Hsapiens.dbSNP149.GRCh38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp149.grch38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp149.grch38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp149.grch38/meta.yaml>`_

   SNP locations and alleles for Homo sapiens extracted from NCBI dbSNP Build 149. The source data files used for this package were created by NCBI between November 8\-12\, 2016\, and contain SNPs mapped to reference genome GRCh38.p7 \(a patched version of GRCh38 that doesn\'t alter chromosomes 1\-22\, X\, Y\, MT\). Note that these SNPs can be \"injected\" in BSgenome.Hsapiens.NCBI.GRCh38 or in BSgenome.Hsapiens.UCSC.hg38.


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp149.grch38

   |downloads_bioconductor-snplocs.hsapiens.dbsnp149.grch38| |docker_bioconductor-snplocs.hsapiens.dbsnp149.grch38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.20-12</code>,  <code>0.99.20-11</code>,  <code>0.99.20-10</code>,  <code>0.99.20-9</code>,  <code>0.99.20-8</code>,  <code>0.99.20-7</code>,  <code>0.99.20-6</code>,  <code>0.99.20-5</code>,  <code>0.99.20-4</code>,  </span></summary>
      

      ``0.99.20-12``,  ``0.99.20-11``,  ``0.99.20-10``,  ``0.99.20-9``,  ``0.99.20-8``,  ``0.99.20-7``,  ``0.99.20-6``,  ``0.99.20-5``,  ``0.99.20-4``,  ``0.99.20-3``,  ``0.99.20-2``,  ``0.99.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-snplocs.hsapiens.dbsnp149.grch38

   and update with::

      mamba update bioconductor-snplocs.hsapiens.dbsnp149.grch38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snplocs.hsapiens.dbsnp149.grch38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp149.grch38:<tag>

   (see `bioconductor-snplocs.hsapiens.dbsnp149.grch38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snplocs.hsapiens.dbsnp149.grch38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp149.grch38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp149.grch38
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp149.grch38| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp149.grch38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp149.grch38
.. _`bioconductor-snplocs.hsapiens.dbsnp149.grch38/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp149.grch38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snplocs.hsapiens.dbsnp149.grch38";
        var versions = ["0.99.20","0.99.20","0.99.20","0.99.20","0.99.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp149.grch38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp149.grch38/README.html