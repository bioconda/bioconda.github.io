:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hummingbird'
.. highlight: bash

bioconductor-hummingbird
========================

.. conda:recipe:: bioconductor-hummingbird
   :replaces_section_title:
   :noindex:

   Bayesian Hidden Markov Model for the detection of differentially methylated regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hummingbird.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-hummingbird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hummingbird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hummingbird/meta.yaml>`_

   A package for detecting differential methylation. It exploits a Bayesian hidden Markov model that incorporates location dependence among genomic loci\, unlike most existing methods that assume independence among observations. Bayesian priors are applied to permit information sharing across an entire chromosome for improved power of detection. The direct output of our software package is the best sequence of methylation states\, eliminating the use of a subjective\, and most of the time an arbitrary\, threshold of p\-value for determining significance. At last\, our methodology does not require replication in either or both of the two comparison groups.


.. conda:package:: bioconductor-hummingbird

   |downloads_bioconductor-hummingbird| |docker_bioconductor-hummingbird|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: 
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

      mamba install bioconductor-hummingbird

   and update with::

      mamba update bioconductor-hummingbird

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hummingbird

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hummingbird:<tag>

   (see `bioconductor-hummingbird/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hummingbird| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hummingbird.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hummingbird
   :alt:   (downloads)
.. |docker_bioconductor-hummingbird| image:: https://quay.io/repository/biocontainers/bioconductor-hummingbird/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hummingbird
.. _`bioconductor-hummingbird/tags`: https://quay.io/repository/biocontainers/bioconductor-hummingbird?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hummingbird";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hummingbird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hummingbird/README.html