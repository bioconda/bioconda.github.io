:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-confess'
.. highlight: bash

bioconductor-confess
====================

.. conda:recipe:: bioconductor-confess
   :replaces_section_title:
   :noindex:

   Cell OrderiNg by FluorEScence Signal

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CONFESS.html
   :license: GPL-2
   :recipe: /`bioconductor-confess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confess/meta.yaml>`_

   Single Cell Fluidigm Spot Detector.


.. conda:package:: bioconductor-confess

   |downloads_bioconductor-confess| |docker_bioconductor-confess|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends bioconductor-flowclust: ``>=3.40.0,<3.41.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowmeans: ``>=1.62.0,<1.63.0``
   :depends bioconductor-flowmerge: ``>=2.50.0,<2.51.0``
   :depends bioconductor-flowpeaks: ``>=1.48.0,<1.49.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-samspectral: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-changepoint: 
   :depends r-cluster: 
   :depends r-contrast: 
   :depends r-data.table: ``>=1.9.7``
   :depends r-ecp: 
   :depends r-flexmix: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-moments: 
   :depends r-outliers: 
   :depends r-plotrix: 
   :depends r-raster: 
   :depends r-readbitmap: 
   :depends r-reshape2: 
   :depends r-waveslim: 
   :depends r-wavethresh: 
   :depends r-zoo: 
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

      mamba install bioconductor-confess

   and update with::

      mamba update bioconductor-confess

  To create a new environment, run::

      mamba create --name myenvname bioconductor-confess

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-confess:<tag>

   (see `bioconductor-confess/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-confess| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-confess.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-confess
   :alt:   (downloads)
.. |docker_bioconductor-confess| image:: https://quay.io/repository/biocontainers/bioconductor-confess/status
   :target: https://quay.io/repository/biocontainers/bioconductor-confess
.. _`bioconductor-confess/tags`: https://quay.io/repository/biocontainers/bioconductor-confess?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-confess";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-confess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-confess/README.html