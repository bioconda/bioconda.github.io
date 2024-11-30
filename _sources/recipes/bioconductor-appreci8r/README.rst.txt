:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-appreci8r'
.. highlight: bash

bioconductor-appreci8r
======================

.. conda:recipe:: bioconductor-appreci8r
   :replaces_section_title:
   :noindex:

   appreci8R\: an R\/Bioconductor package for filtering SNVs and short indels with high sensitivity and high PPV

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/appreci8R.html
   :license: LGPL-3
   :recipe: /`bioconductor-appreci8r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-appreci8r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-appreci8r/meta.yaml>`_

   The appreci8R is an R version of our appreci8\-algorithm \- A Pipeline for PREcise variant Calling Integrating 8 tools. Variant calling results of our standard appreci8\-tools \(GATK\, Platypus\, VarScan\, FreeBayes\, LoFreq\, SNVer\, samtools and VarDict\)\, as well as up to 5 additional tools is combined\, evaluated and filtered.


.. conda:package:: bioconductor-appreci8r

   |downloads_bioconductor-appreci8r| |docker_bioconductor-appreci8r|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-cosmic.67: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicscores: ``>=2.10.0,<2.11.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-mafdb.1kgenomes.phase3.hs37d5: ``>=3.10.0,<3.11.0``
   :depends bioconductor-mafdb.exac.r1.0.hs37d5: ``>=3.10.0,<3.11.0``
   :depends bioconductor-mafdb.gnomadex.r2.1.hs37d5: ``>=3.10.0,<3.11.0``
   :depends bioconductor-polyphen.hsapiens.dbsnp131: ``>=1.0.0,<1.1.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-sift.hsapiens.dbsnp137: ``>=1.0.0,<1.1.0``
   :depends bioconductor-snplocs.hsapiens.dbsnp144.grch37: ``>=0.99.0,<0.100.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37: ``>=0.99.0,<0.100.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dt: 
   :depends r-openxlsx: 
   :depends r-rentrez: 
   :depends r-rsnps: 
   :depends r-seqinr: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-stringr: 
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

      mamba install bioconductor-appreci8r

   and update with::

      mamba update bioconductor-appreci8r

  To create a new environment, run::

      mamba create --name myenvname bioconductor-appreci8r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-appreci8r:<tag>

   (see `bioconductor-appreci8r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-appreci8r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-appreci8r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-appreci8r
   :alt:   (downloads)
.. |docker_bioconductor-appreci8r| image:: https://quay.io/repository/biocontainers/bioconductor-appreci8r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-appreci8r
.. _`bioconductor-appreci8r/tags`: https://quay.io/repository/biocontainers/bioconductor-appreci8r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-appreci8r";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-appreci8r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-appreci8r/README.html