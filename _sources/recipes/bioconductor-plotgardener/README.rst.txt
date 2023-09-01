:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plotgardener'
.. highlight: bash

bioconductor-plotgardener
=========================

.. conda:recipe:: bioconductor-plotgardener
   :replaces_section_title:
   :noindex:

   Coordinate\-Based Genomic Visualization Package for R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/plotgardener.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-plotgardener <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgardener>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plotgardener/meta.yaml>`_

   Coordinate\-based genomic visualization package for R. It grants users the ability to programmatically produce complex\, multi\-paneled figures. Tailored for genomics\, plotgardener allows users to visualize large complex genomic datasets and provides exquisite control over how plots are placed and arranged on a page.


.. conda:package:: bioconductor-plotgardener

   |downloads_bioconductor-plotgardener| |docker_bioconductor-plotgardener|

   :versions:
      
      

      ``1.6.2-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.0.17-0``,  ``1.0.14-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-plyranges: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplotify: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-strawr: 
   :depends r-withr: 
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

      mamba install bioconductor-plotgardener

   and update with::

      mamba update bioconductor-plotgardener

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plotgardener

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plotgardener:<tag>

   (see `bioconductor-plotgardener/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plotgardener| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plotgardener.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plotgardener
   :alt:   (downloads)
.. |docker_bioconductor-plotgardener| image:: https://quay.io/repository/biocontainers/bioconductor-plotgardener/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plotgardener
.. _`bioconductor-plotgardener/tags`: https://quay.io/repository/biocontainers/bioconductor-plotgardener?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plotgardener";
        var versions = ["1.6.2","1.4.1","1.4.1","1.0.17","1.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plotgardener/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plotgardener/README.html