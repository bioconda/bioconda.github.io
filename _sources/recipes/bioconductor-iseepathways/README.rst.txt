:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseepathways'
.. highlight: bash

bioconductor-iseepathways
=========================

.. conda:recipe:: bioconductor-iseepathways
   :replaces_section_title:
   :noindex:

   iSEE extension for panels related to pathway analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEpathways.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseepathways <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseepathways>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseepathways/meta.yaml>`_

   This package contains diverse functionality to extend the usage of the iSEE package\, including additional classes for the panels or modes facilitating the analysis of pathway analysis results. This package does not perform pathway analysis. Instead\, it provides methods to embed precomputed pathway analysis results in a SummarizedExperiment object\, in a manner that is compatible with interactive visualisation in iSEE applications.


.. conda:package:: bioconductor-iseepathways

   |downloads_bioconductor-iseepathways| |docker_bioconductor-iseepathways|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-isee: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
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

      mamba install bioconductor-iseepathways

   and update with::

      mamba update bioconductor-iseepathways

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseepathways

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseepathways:<tag>

   (see `bioconductor-iseepathways/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseepathways| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseepathways.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseepathways
   :alt:   (downloads)
.. |docker_bioconductor-iseepathways| image:: https://quay.io/repository/biocontainers/bioconductor-iseepathways/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseepathways
.. _`bioconductor-iseepathways/tags`: https://quay.io/repository/biocontainers/bioconductor-iseepathways?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseepathways";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseepathways/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseepathways/README.html