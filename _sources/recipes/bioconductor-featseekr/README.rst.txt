:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-featseekr'
.. highlight: bash

bioconductor-featseekr
======================

.. conda:recipe:: bioconductor-featseekr
   :replaces_section_title:
   :noindex:

   FeatSeekR an R package for unsupervised feature selection

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FeatSeekR.html
   :license: GPL-3
   :recipe: /`bioconductor-featseekr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-featseekr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-featseekr/meta.yaml>`_

   FeatSeekR performs unsupervised feature selection using replicated measurements. It iteratively selects features with the highest reproducibility across replicates\, after projecting out those dimensions from the data that are spanned by the previously selected features. The selected a set of features has a high replicate reproducibility and a high degree of uniqueness.


.. conda:package:: bioconductor-featseekr

   |downloads_bioconductor-featseekr| |docker_bioconductor-featseekr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-pheatmap: 
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

      mamba install bioconductor-featseekr

   and update with::

      mamba update bioconductor-featseekr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-featseekr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-featseekr:<tag>

   (see `bioconductor-featseekr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-featseekr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-featseekr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-featseekr
   :alt:   (downloads)
.. |docker_bioconductor-featseekr| image:: https://quay.io/repository/biocontainers/bioconductor-featseekr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-featseekr
.. _`bioconductor-featseekr/tags`: https://quay.io/repository/biocontainers/bioconductor-featseekr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-featseekr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-featseekr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-featseekr/README.html