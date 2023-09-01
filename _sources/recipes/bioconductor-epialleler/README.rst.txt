:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epialleler'
.. highlight: bash

bioconductor-epialleler
=======================

.. conda:recipe:: bioconductor-epialleler
   :replaces_section_title:
   :noindex:

   Fast\, Epiallele\-Aware Methylation Reporter

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/epialleleR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epialleler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epialleler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epialleler/meta.yaml>`_

   Epialleles are specific DNA methylation patterns that are mitotically and\/or meiotically inherited. This package calls hypermethylated epiallele frequencies at the level of genomic regions or individual cytosines in next\-generation sequencing data using binary alignment map \(BAM\) files as an input. Other functionality includes extracting methylation patterns\, computing the empirical cumulative distribution function for per\-read beta values\, and testing the significance of the association between epiallele methylation status and base frequencies at particular genomic positions \(SNPs\).


.. conda:package:: bioconductor-epialleler

   |downloads_bioconductor-epialleler| |docker_bioconductor-epialleler|

   :versions:
      
      

      ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rhtslib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends bioconductor-zlibbioc: ``>=1.46.0,<1.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-data.table: 
   :depends r-rcpp: 
   :depends r-stringi: 
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

      mamba install bioconductor-epialleler

   and update with::

      mamba update bioconductor-epialleler

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epialleler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epialleler:<tag>

   (see `bioconductor-epialleler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epialleler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epialleler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epialleler
   :alt:   (downloads)
.. |docker_bioconductor-epialleler| image:: https://quay.io/repository/biocontainers/bioconductor-epialleler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epialleler
.. _`bioconductor-epialleler/tags`: https://quay.io/repository/biocontainers/bioconductor-epialleler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epialleler";
        var versions = ["1.8.1","1.8.0","1.6.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epialleler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epialleler/README.html