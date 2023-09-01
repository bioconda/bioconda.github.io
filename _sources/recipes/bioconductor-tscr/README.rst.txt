:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tscr'
.. highlight: bash

bioconductor-tscr
=================

.. conda:recipe:: bioconductor-tscr
   :replaces_section_title:
   :noindex:

   A time series clustering package combining slope and Frechet distances

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tscR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tscr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr/meta.yaml>`_

   Clustering for time series data using slope distance and\/or shape distance.


.. conda:package:: bioconductor-tscr

   |downloads_bioconductor-tscr| |docker_bioconductor-tscr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.11.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-class: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-dtw: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-kmlshape: 
   :depends r-knitr: 
   :depends r-latex2exp: 
   :depends r-prettydoc: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
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

      mamba install bioconductor-tscr

   and update with::

      mamba update bioconductor-tscr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tscr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tscr:<tag>

   (see `bioconductor-tscr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tscr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tscr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tscr
   :alt:   (downloads)
.. |docker_bioconductor-tscr| image:: https://quay.io/repository/biocontainers/bioconductor-tscr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tscr
.. _`bioconductor-tscr/tags`: https://quay.io/repository/biocontainers/bioconductor-tscr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tscr";
        var versions = ["1.11.0","1.10.0","1.10.0","1.6.1","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tscr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tscr/README.html