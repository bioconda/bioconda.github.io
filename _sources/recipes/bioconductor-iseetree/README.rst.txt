:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseetree'
.. highlight: bash

bioconductor-iseetree
=====================

.. conda:recipe:: bioconductor-iseetree
   :replaces_section_title:
   :noindex:

   Interactive visualisation for microbiome data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEtree.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseetree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseetree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseetree/meta.yaml>`_

   iSEEtree is an extension of iSEE for the TreeSummarizedExperiment. It leverages the functionality from the miaViz package for microbiome data visualisation to create panels that are specific for TreeSummarizedExperiment objects. Not surprisingly\, it also depends on the generic panels from iSEE.


.. conda:package:: bioconductor-iseetree

   |downloads_bioconductor-iseetree| |docker_bioconductor-iseetree|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-isee: ``>=2.18.0,<2.19.0``
   :depends bioconductor-mia: ``>=1.14.0,<1.15.0``
   :depends bioconductor-miaviz: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-shiny: 
   :depends r-shinywidgets: 
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

      mamba install bioconductor-iseetree

   and update with::

      mamba update bioconductor-iseetree

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseetree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseetree:<tag>

   (see `bioconductor-iseetree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseetree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseetree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseetree
   :alt:   (downloads)
.. |docker_bioconductor-iseetree| image:: https://quay.io/repository/biocontainers/bioconductor-iseetree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseetree
.. _`bioconductor-iseetree/tags`: https://quay.io/repository/biocontainers/bioconductor-iseetree?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseetree";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseetree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseetree/README.html