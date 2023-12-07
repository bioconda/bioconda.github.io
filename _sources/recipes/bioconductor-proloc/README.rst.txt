:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proloc'
.. highlight: bash

bioconductor-proloc
===================

.. conda:recipe:: bioconductor-proloc
   :replaces_section_title:
   :noindex:

   A unifying bioinformatics framework for spatial proteomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pRoloc.html
   :license: GPL-2
   :recipe: /`bioconductor-proloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proloc/meta.yaml>`_
   :links: biotools: :biotools:`proloc`

   The pRoloc package implements machine learning and visualisation methods for the analysis and interogation of quantitiative mass spectrometry data to reliably infer protein sub\-cellular localisation.


.. conda:package:: bioconductor-proloc

   |downloads_bioconductor-proloc| |docker_bioconductor-proloc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.1-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.1-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-mlinterfaces: ``>=1.82.0,<1.83.0``
   :depends bioconductor-mlinterfaces: ``>=1.82.0,<1.83.0a0``
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-msnbase: ``>=2.28.1,<2.29.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-class: 
   :depends r-coda: 
   :depends r-dendextend: 
   :depends r-e1071: 
   :depends r-fnn: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-hexbin: 
   :depends r-kernlab: 
   :depends r-knitr: 
   :depends r-laplacesdemon: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-mclust: ``>=4.3``
   :depends r-mixtools: 
   :depends r-mvtnorm: 
   :depends r-nnet: 
   :depends r-plyr: 
   :depends r-proxy: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.10.3``
   :depends r-rcpparmadillo: 
   :depends r-sampling: 
   :depends r-scales: 
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

      mamba install bioconductor-proloc

   and update with::

      mamba update bioconductor-proloc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-proloc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proloc:<tag>

   (see `bioconductor-proloc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proloc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proloc
   :alt:   (downloads)
.. |docker_bioconductor-proloc| image:: https://quay.io/repository/biocontainers/bioconductor-proloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proloc
.. _`bioconductor-proloc/tags`: https://quay.io/repository/biocontainers/bioconductor-proloc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proloc";
        var versions = ["1.42.0","1.40.1","1.38.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proloc/README.html