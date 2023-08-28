:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomepeak2'
.. highlight: bash

bioconductor-exomepeak2
=======================

.. conda:recipe:: bioconductor-exomepeak2
   :replaces_section_title:
   :noindex:

   Peak Calling and differential analysis for MeRIP\-Seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/exomePeak2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-exomepeak2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomepeak2/meta.yaml>`_

   exomePeak2 provides peak detection and differential methylation for Methylated RNA Immunoprecipitation Sequencing \(MeRIP\-Seq\) data. MeRIP\-Seq is a commonly applied sequencing assay that measures the location and abundance of RNA modification sites under specific cellular conditions. In practice\, the technique is sensitive to PCR amplification biases commonly found in NGS data. In addition\, the efficiency of immunoprecipitation often varies between different IP samples. exomePeak2 can perform peak calling and differential analysis independent of GC content bias and IP efficiency changes.


.. conda:package:: bioconductor-exomepeak2

   |downloads_bioconductor-exomepeak2| |docker_bioconductor-exomepeak2|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mclust: 
   :depends r-speedglm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-exomepeak2

   and update with::

      mamba update bioconductor-exomepeak2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-exomepeak2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-exomepeak2:<tag>

   (see `bioconductor-exomepeak2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-exomepeak2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exomepeak2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-exomepeak2
   :alt:   (downloads)
.. |docker_bioconductor-exomepeak2| image:: https://quay.io/repository/biocontainers/bioconductor-exomepeak2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exomepeak2
.. _`bioconductor-exomepeak2/tags`: https://quay.io/repository/biocontainers/bioconductor-exomepeak2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-exomepeak2";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exomepeak2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exomepeak2/README.html