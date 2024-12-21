:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggmsa'
.. highlight: bash

bioconductor-ggmsa
==================

.. conda:recipe:: bioconductor-ggmsa
   :replaces_section_title:
   :noindex:

   Plot Multiple Sequence Alignment using \'ggplot2\'

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ggmsa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmsa/meta.yaml>`_

   A visual exploration tool for multiple sequence alignment and associated data. Supports MSA of DNA\, RNA\, and protein sequences using \'ggplot2\'. Multiple sequence alignment can easily be combined with other \'ggplot2\' plots\, such as phylogenetic tree Visualized by \'ggtree\'\, boxplot\, genome map and so on. More features\: visualization of sequence logos\, sequence bundles\, RNA secondary structures and detection of sequence recombinations.


.. conda:package:: bioconductor-ggmsa

   |downloads_bioconductor-ggmsa| |docker_bioconductor-ggmsa|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends bioconductor-r4rna: ``>=1.34.0,<1.35.0``
   :depends r-aplot: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggalt: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-seqmagick: 
   :depends r-statebins: 
   :depends r-tidyr: 
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

      mamba install bioconductor-ggmsa

   and update with::

      mamba update bioconductor-ggmsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggmsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggmsa:<tag>

   (see `bioconductor-ggmsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggmsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggmsa
   :alt:   (downloads)
.. |docker_bioconductor-ggmsa| image:: https://quay.io/repository/biocontainers/bioconductor-ggmsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggmsa
.. _`bioconductor-ggmsa/tags`: https://quay.io/repository/biocontainers/bioconductor-ggmsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggmsa";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggmsa/README.html