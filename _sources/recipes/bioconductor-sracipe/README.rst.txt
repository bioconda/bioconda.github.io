:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sracipe'
.. highlight: bash

bioconductor-sracipe
====================

.. conda:recipe:: bioconductor-sracipe
   :replaces_section_title:
   :noindex:

   Systems biology tool to simulate gene regulatory circuits

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sRACIPE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sracipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sracipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sracipe/meta.yaml>`_

   sRACIPE implements a randomization\-based method for gene circuit modeling. It allows us to study the effect of both the gene expression noise and the parametric variation on any gene regulatory circuit \(GRC\) using only its topology\, and simulates an ensemble of models with random kinetic parameters at multiple noise levels. Statistical analysis of the generated gene expressions reveals the basin of attraction and stability of various phenotypic states and their changes associated with intrinsic and extrinsic noises. sRACIPE provides a holistic picture to evaluate the effects of both the stochastic nature of cellular processes and the parametric variation.


.. conda:package:: bioconductor-sracipe

   |downloads_bioconductor-sracipe| |docker_bioconductor-sracipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-htmlwidgets: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-umap: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-sracipe

   and update with::

      mamba update bioconductor-sracipe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sracipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sracipe:<tag>

   (see `bioconductor-sracipe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sracipe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sracipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sracipe
   :alt:   (downloads)
.. |docker_bioconductor-sracipe| image:: https://quay.io/repository/biocontainers/bioconductor-sracipe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sracipe
.. _`bioconductor-sracipe/tags`: https://quay.io/repository/biocontainers/bioconductor-sracipe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sracipe";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sracipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sracipe/README.html