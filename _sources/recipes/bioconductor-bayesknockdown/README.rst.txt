:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesknockdown'
.. highlight: bash

bioconductor-bayesknockdown
===========================

.. conda:recipe:: bioconductor-bayesknockdown
   :replaces_section_title:
   :noindex:

   BayesKnockdown\: Posterior Probabilities for Edges from Knockdown Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BayesKnockdown.html
   :license: GPL-3
   :recipe: /`bioconductor-bayesknockdown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesknockdown/meta.yaml>`_

   A simple\, fast Bayesian method for computing posterior probabilities for relationships between a single predictor variable and multiple potential outcome variables\, incorporating prior probabilities of relationships. In the context of knockdown experiments\, the predictor variable is the knocked\-down gene\, while the other genes are potential targets. Can also be used for differential expression\/2\-class data.


.. conda:package:: bioconductor-bayesknockdown

   |downloads_bioconductor-bayesknockdown| |docker_bioconductor-bayesknockdown|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bayesknockdown

   and update with::

      mamba update bioconductor-bayesknockdown

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bayesknockdown

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayesknockdown:<tag>

   (see `bioconductor-bayesknockdown/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayesknockdown| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesknockdown.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayesknockdown
   :alt:   (downloads)
.. |docker_bioconductor-bayesknockdown| image:: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown
.. _`bioconductor-bayesknockdown/tags`: https://quay.io/repository/biocontainers/bioconductor-bayesknockdown?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bayesknockdown";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayesknockdown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayesknockdown/README.html