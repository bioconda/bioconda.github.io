:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-slalom'
.. highlight: bash

bioconductor-slalom
===================

.. conda:recipe:: bioconductor-slalom
   :replaces_section_title:
   :noindex:

   Factorial Latent Variable Modeling of Single\-Cell RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/slalom.html
   :license: GPL-2
   :recipe: /`bioconductor-slalom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slalom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slalom/meta.yaml>`_

   slalom is a scalable modelling framework for single\-cell RNA\-seq data that uses gene set annotations to dissect single\-cell transcriptome heterogeneity\, thereby allowing to identify biological drivers of cell\-to\-cell variability and model confounding factors. The method uses Bayesian factor analysis with a latent variable model to identify active pathways \(selected by the user\, e.g. KEGG pathways\) that explain variation in a single\-cell RNA\-seq dataset. This an R\/C\+\+ implementation of the f\-scLVM Python package. See the publication describing the method at https\:\/\/doi.org\/10.1186\/s13059\-017\-1334\-8.


.. conda:package:: bioconductor-slalom

   |downloads_bioconductor-slalom| |docker_bioconductor-slalom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: 
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=0.12.8``
   :depends r-rcpparmadillo: 
   :depends r-rsvd: 
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

      mamba install bioconductor-slalom

   and update with::

      mamba update bioconductor-slalom

  To create a new environment, run::

      mamba create --name myenvname bioconductor-slalom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-slalom:<tag>

   (see `bioconductor-slalom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-slalom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slalom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-slalom
   :alt:   (downloads)
.. |docker_bioconductor-slalom| image:: https://quay.io/repository/biocontainers/bioconductor-slalom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slalom
.. _`bioconductor-slalom/tags`: https://quay.io/repository/biocontainers/bioconductor-slalom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-slalom";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slalom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slalom/README.html