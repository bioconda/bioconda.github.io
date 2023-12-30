:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlinterfaces'
.. highlight: bash

bioconductor-mlinterfaces
=========================

.. conda:recipe:: bioconductor-mlinterfaces
   :replaces_section_title:
   :noindex:

   Uniform interfaces to R machine learning procedures for data in Bioconductor containers

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MLInterfaces.html
   :license: LGPL
   :recipe: /`bioconductor-mlinterfaces <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlinterfaces>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlinterfaces/meta.yaml>`_
   :links: biotools: :biotools:`mlinterfaces`, doi: :doi:`10.1038/nmeth.3252`

   This package provides uniform interfaces to machine learning code for data in R and Bioconductor containers.


.. conda:package:: bioconductor-mlinterfaces

   |downloads_bioconductor-mlinterfaces| |docker_bioconductor-mlinterfaces|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.80.0-0</code>,  <code>1.78.0-1</code>,  <code>1.78.0-0</code>,  <code>1.74.0-2</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-1</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.80.0-0``,  ``1.78.0-1``,  ``1.78.0-0``,  ``1.74.0-2``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.62.0-0``,  ``1.60.1-0``,  ``1.58.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-fpc: 
   :depends r-gbm: 
   :depends r-gdata: 
   :depends r-ggvis: 
   :depends r-hwriter: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-mlbench: 
   :depends r-pls: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rpart: 
   :depends r-sfsmisc: 
   :depends r-shiny: 
   :depends r-threejs: ``>=0.2.2``
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

      mamba install bioconductor-mlinterfaces

   and update with::

      mamba update bioconductor-mlinterfaces

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mlinterfaces

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mlinterfaces:<tag>

   (see `bioconductor-mlinterfaces/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mlinterfaces| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlinterfaces.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mlinterfaces
   :alt:   (downloads)
.. |docker_bioconductor-mlinterfaces| image:: https://quay.io/repository/biocontainers/bioconductor-mlinterfaces/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlinterfaces
.. _`bioconductor-mlinterfaces/tags`: https://quay.io/repository/biocontainers/bioconductor-mlinterfaces?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mlinterfaces";
        var versions = ["1.82.0","1.80.0","1.78.0","1.78.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlinterfaces/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlinterfaces/README.html