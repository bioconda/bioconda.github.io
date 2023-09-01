:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atacseqtfea'
.. highlight: bash

bioconductor-atacseqtfea
========================

.. conda:recipe:: bioconductor-atacseqtfea
   :replaces_section_title:
   :noindex:

   Transcription Factor Enrichment Analysis for ATAC\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ATACseqTFEA.html
   :license: GPL-3
   :recipe: /`bioconductor-atacseqtfea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqtfea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqtfea/meta.yaml>`_

   Assay for Transpose\-Accessible Chromatin using sequencing \(ATAC\-seq\) is a technique to assess genome\-wide chromatin accessibility by probing open chromatin with hyperactive mutant Tn5 Transposase that inserts sequencing adapters into open regions of the genome. ATACseqTFEA is an improvement of the current computational method that detects differential activity of transcription factors \(TFs\). ATACseqTFEA not only uses the difference of open region information\, but also \(or emphasizes\) the difference of TFs footprints \(cutting sites or insertion sites\). ATACseqTFEA provides an easy\, rigorous way to broadly assess TF activity changes between two conditions.


.. conda:package:: bioconductor-atacseqtfea

   |downloads_bioconductor-atacseqtfea| |docker_bioconductor-atacseqtfea|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-motifmatchr: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tfbstools: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrix: 
   :depends r-pracma: 
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

      mamba install bioconductor-atacseqtfea

   and update with::

      mamba update bioconductor-atacseqtfea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-atacseqtfea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-atacseqtfea:<tag>

   (see `bioconductor-atacseqtfea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-atacseqtfea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atacseqtfea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atacseqtfea
   :alt:   (downloads)
.. |docker_bioconductor-atacseqtfea| image:: https://quay.io/repository/biocontainers/bioconductor-atacseqtfea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atacseqtfea
.. _`bioconductor-atacseqtfea/tags`: https://quay.io/repository/biocontainers/bioconductor-atacseqtfea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-atacseqtfea";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atacseqtfea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atacseqtfea/README.html