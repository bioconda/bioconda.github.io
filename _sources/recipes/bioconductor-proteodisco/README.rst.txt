:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteodisco'
.. highlight: bash

bioconductor-proteodisco
========================

.. conda:recipe:: bioconductor-proteodisco
   :replaces_section_title:
   :noindex:

   Generation of customized protein variant databases from genomic variants\, splice\-junctions and manual sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ProteoDisco.html
   :license: GPL-3
   :recipe: /`bioconductor-proteodisco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteodisco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteodisco/meta.yaml>`_

   ProteoDisco is an R package to facilitate proteogenomics studies. It houses functions to create customized \(variant\) protein databases based on user\-submitted genomic variants\, splice\-junctions\, fusion genes and manual transcript sequences. The flexible workflow can be adopted to suit a myriad of research and experimental settings.


.. conda:package:: bioconductor-proteodisco

   |downloads_bioconductor-proteodisco| |docker_bioconductor-proteodisco|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-cleaver: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: ``>=2.0.0``
   :depends r-dplyr: ``>=1.0.6``
   :depends r-parallellogger: ``>=2.0.1``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rlang: ``>=0.4.11``
   :depends r-tibble: ``>=3.1.2``
   :depends r-tidyr: ``>=1.1.3``
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

      mamba install bioconductor-proteodisco

   and update with::

      mamba update bioconductor-proteodisco

  To create a new environment, run::

      mamba create --name myenvname bioconductor-proteodisco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proteodisco:<tag>

   (see `bioconductor-proteodisco/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proteodisco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteodisco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteodisco
   :alt:   (downloads)
.. |docker_bioconductor-proteodisco| image:: https://quay.io/repository/biocontainers/bioconductor-proteodisco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteodisco
.. _`bioconductor-proteodisco/tags`: https://quay.io/repository/biocontainers/bioconductor-proteodisco?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proteodisco";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteodisco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteodisco/README.html