:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scvir'
.. highlight: bash

bioconductor-scvir
==================

.. conda:recipe:: bioconductor-scvir
   :replaces_section_title:
   :noindex:

   experimental inferface from R to scvi\-tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scviR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scvir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scvir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scvir/meta.yaml>`_

   This package defines interfaces from R to scvi\-tools.  A vignette works through the totalVI tutorial for analyzing CITE\-seq data.  Another vignette compares outputs of Chapter 12 of the OSCA book with analogous outputs based on totalVI quantifications. Future work will address other components of scvi\-tools\, with a focus on building understanding of probabilistic methods based on variational autoencoders.


.. conda:package:: bioconductor-scvir

   |downloads_bioconductor-scvir| |docker_bioconductor-scvir|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-pheatmap: 
   :depends r-reticulate: 
   :depends r-shiny: 
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

      mamba install bioconductor-scvir

   and update with::

      mamba update bioconductor-scvir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scvir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scvir:<tag>

   (see `bioconductor-scvir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scvir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scvir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scvir
   :alt:   (downloads)
.. |docker_bioconductor-scvir| image:: https://quay.io/repository/biocontainers/bioconductor-scvir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scvir
.. _`bioconductor-scvir/tags`: https://quay.io/repository/biocontainers/bioconductor-scvir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scvir";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scvir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scvir/README.html