:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnainteractmapk'
.. highlight: bash

bioconductor-rnainteractmapk
============================

.. conda:recipe:: bioconductor-rnainteractmapk
   :replaces_section_title:
   :noindex:

   Mapping of Signalling Networks through Synthetic Genetic Interaction Analysis by RNAi

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RNAinteractMAPK.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnainteractmapk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteractmapk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteractmapk/meta.yaml>`_

   This package includes all data used in the paper \-Mapping of Signalling Networks through Synthetic Genetic Interaction Analysis by RNAi\- by Horn\, Sandmann\, Fischer et al..\, Nat. Methods\, 2011. The package vignette shows the R code to reproduce all figures in the paper.


.. conda:package:: bioconductor-rnainteractmapk

   |downloads_bioconductor-rnainteractmapk| |docker_bioconductor-rnainteractmapk|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-rnainteract: ``>=1.48.0,<1.49.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fields: 
   :depends r-gdata: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-sparselda: 
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

      mamba install bioconductor-rnainteractmapk

   and update with::

      mamba update bioconductor-rnainteractmapk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnainteractmapk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnainteractmapk:<tag>

   (see `bioconductor-rnainteractmapk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnainteractmapk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnainteractmapk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnainteractmapk
   :alt:   (downloads)
.. |docker_bioconductor-rnainteractmapk| image:: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk
.. _`bioconductor-rnainteractmapk/tags`: https://quay.io/repository/biocontainers/bioconductor-rnainteractmapk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnainteractmapk";
        var versions = ["1.38.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnainteractmapk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnainteractmapk/README.html