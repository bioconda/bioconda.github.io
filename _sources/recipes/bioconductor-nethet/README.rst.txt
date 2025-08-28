:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nethet'
.. highlight: bash

bioconductor-nethet
===================

.. conda:recipe:: bioconductor-nethet
   :replaces_section_title:
   :noindex:

   A bioconductor package for high\-dimensional exploration of biological network heterogeneity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/nethet.html
   :license: GPL-2
   :recipe: /`bioconductor-nethet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nethet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nethet/meta.yaml>`_

   Package nethet is an implementation of statistical solid methodology enabling the analysis of network heterogeneity from high\-dimensional data. It combines several implementations of recent statistical innovations useful for estimation and comparison of networks in a heterogeneous\, high\-dimensional setting. In particular\, we provide code for formal two\-sample testing in Gaussian graphical models \(differential network and GGM\-GSA\; Stadler and Mukherjee\, 2013\, 2014\) and make a novel network\-based clustering algorithm available \(mixed graphical lasso\, Stadler and Mukherjee\, 2013\).


.. conda:package:: bioconductor-nethet

   |downloads_bioconductor-nethet| |docker_bioconductor-nethet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0a0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-compquadform: 
   :depends r-genenet: 
   :depends r-ggm: 
   :depends r-ggplot2: 
   :depends r-glasso: 
   :depends r-glmnet: 
   :depends r-gsa: 
   :depends r-huge: 
   :depends r-icsnp: 
   :depends r-mclust: 
   :depends r-mvtnorm: 
   :depends r-network: 
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

      mamba install bioconductor-nethet

   and update with::

      mamba update bioconductor-nethet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nethet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nethet:<tag>

   (see `bioconductor-nethet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nethet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nethet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nethet
   :alt:   (downloads)
.. |docker_bioconductor-nethet| image:: https://quay.io/repository/biocontainers/bioconductor-nethet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nethet
.. _`bioconductor-nethet/tags`: https://quay.io/repository/biocontainers/bioconductor-nethet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nethet";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nethet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nethet/README.html