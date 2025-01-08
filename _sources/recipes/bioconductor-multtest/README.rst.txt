:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multtest'
.. highlight: bash

bioconductor-multtest
=====================

.. conda:recipe:: bioconductor-multtest
   :replaces_section_title:
   :noindex:

   Resampling\-based multiple hypothesis testing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multtest.html
   :license: LGPL
   :recipe: /`bioconductor-multtest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multtest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multtest/meta.yaml>`_
   :links: biotools: :biotools:`multtest`, doi: :doi:`10.1007/0-387-29362-0_15`

   Non\-parametric bootstrap and permutation resampling\-based multiple testing procedures \(including empirical Bayes methods\) for controlling the family\-wise error rate \(FWER\)\, generalized family\-wise error rate \(gFWER\)\, tail probability of the proportion of false positives \(TPPFP\)\, and false discovery rate \(FDR\).  Several choices of bootstrap\-based null distribution are implemented \(centered\, centered and scaled\, quantile\-transformed\). Single\-step and step\-wise methods are available. Tests based on a variety of t\- and F\-statistics \(including t\-statistics based on regression parameters from linear and survival models as well as those based on correlation parameters\) are included.  When probing hypotheses with t\-statistics\, users may also select a potentially faster null distribution which is multivariate normal with mean zero and variance covariance matrix derived from the vector influence function.  Results are reported in terms of adjusted p\-values\, confidence regions and test statistic cutoffs. The procedures are directly applicable to identifying differentially expressed genes in DNA microarray experiments.


.. conda:package:: bioconductor-multtest

   |downloads_bioconductor-multtest| |docker_bioconductor-multtest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-1</code>,  <code>2.54.0-0</code>,  <code>2.50.0-2</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.50.0-2``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mass: 
   :depends r-survival: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-multtest

   and update with::

      mamba update bioconductor-multtest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multtest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multtest:<tag>

   (see `bioconductor-multtest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multtest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multtest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multtest
   :alt:   (downloads)
.. |docker_bioconductor-multtest| image:: https://quay.io/repository/biocontainers/bioconductor-multtest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multtest
.. _`bioconductor-multtest/tags`: https://quay.io/repository/biocontainers/bioconductor-multtest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multtest";
        var versions = ["2.62.0","2.58.0","2.58.0","2.56.0","2.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multtest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multtest/README.html