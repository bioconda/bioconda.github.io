:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epistack'
.. highlight: bash

bioconductor-epistack
=====================

.. conda:recipe:: bioconductor-epistack
   :replaces_section_title:
   :noindex:

   Heatmaps of Stack Profiles from Epigenetic Signals

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epistack.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epistack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistack/meta.yaml>`_

   The epistack package main objective is the visualizations of stacks of genomic tracks \(such as\, but not restricted to\, ChIP\-seq\, ATAC\-seq\, DNA methyation or genomic conservation data\) centered at genomic regions of interest. epistack needs three different inputs\: 1\) a genomic score objects\, such as ChIP\-seq coverage or DNA methylation values\, provided as a \`GRanges\` \(easily obtained from \`bigwig\` or \`bam\` files\). 2\) a list of feature of interest\, such as peaks or transcription start sites\, provided as a \`GRanges\` \(easily obtained from \`gtf\` or \`bed\` files\). 3\) a score to sort the features\, such as peak height or gene expression value.


.. conda:package:: bioconductor-epistack

   |downloads_bioconductor-epistack| |docker_bioconductor-epistack|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-plotrix: 
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

      mamba install bioconductor-epistack

   and update with::

      mamba update bioconductor-epistack

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epistack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epistack:<tag>

   (see `bioconductor-epistack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epistack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epistack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epistack
   :alt:   (downloads)
.. |docker_bioconductor-epistack| image:: https://quay.io/repository/biocontainers/bioconductor-epistack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epistack
.. _`bioconductor-epistack/tags`: https://quay.io/repository/biocontainers/bioconductor-epistack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epistack";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epistack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epistack/README.html