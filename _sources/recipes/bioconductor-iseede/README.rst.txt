:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseede'
.. highlight: bash

bioconductor-iseede
===================

.. conda:recipe:: bioconductor-iseede
   :replaces_section_title:
   :noindex:

   iSEE extension for panels related to differential expression analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iSEEde.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseede <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseede>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseede/meta.yaml>`_

   This package contains diverse functionality to extend the usage of the iSEE package\, including additional classes for the panels or modes facilitating the analysis of differential expression results. This package does not perform differential expression. Instead\, it provides methods to embed precomputed differential expression results in a SummarizedExperiment object\, in a manner that is compatible with interactive visualisation in iSEE applications.


.. conda:package:: bioconductor-iseede

   |downloads_bioconductor-iseede| |docker_bioconductor-iseede|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-isee: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-shiny: 
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

      mamba install bioconductor-iseede

   and update with::

      mamba update bioconductor-iseede

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseede

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseede:<tag>

   (see `bioconductor-iseede/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseede| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseede.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseede
   :alt:   (downloads)
.. |docker_bioconductor-iseede| image:: https://quay.io/repository/biocontainers/bioconductor-iseede/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseede
.. _`bioconductor-iseede/tags`: https://quay.io/repository/biocontainers/bioconductor-iseede?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseede";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseede/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseede/README.html