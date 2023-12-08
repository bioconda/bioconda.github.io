:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicdistributions'
.. highlight: bash

bioconductor-genomicdistributions
=================================

.. conda:recipe:: bioconductor-genomicdistributions
   :replaces_section_title:
   :noindex:

   GenomicDistributions\: fast analysis of genomic intervals with Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GenomicDistributions.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-genomicdistributions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributions/meta.yaml>`_

   If you have a set of genomic ranges\, this package can help you with visualization and comparison. It produces several kinds of plots\, for example\: Chromosome distribution plots\, which visualize how your regions are distributed over chromosomes\; feature distance distribution plots\, which visualizes how your regions are distributed relative to a feature of interest\, like Transcription Start Sites \(TSSs\)\; genomic partition plots\, which visualize how your regions overlap given genomic features such as promoters\, introns\, exons\, or intergenic regions. It also makes it easy to compare one set of ranges to another.


.. conda:package:: bioconductor-genomicdistributions

   |downloads_bioconductor-genomicdistributions| |docker_bioconductor-genomicdistributions|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-scales: 
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

      mamba install bioconductor-genomicdistributions

   and update with::

      mamba update bioconductor-genomicdistributions

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicdistributions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicdistributions:<tag>

   (see `bioconductor-genomicdistributions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicdistributions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicdistributions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicdistributions
   :alt:   (downloads)
.. |docker_bioconductor-genomicdistributions| image:: https://quay.io/repository/biocontainers/bioconductor-genomicdistributions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicdistributions
.. _`bioconductor-genomicdistributions/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicdistributions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicdistributions";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicdistributions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicdistributions/README.html