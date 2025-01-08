:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-melissa'
.. highlight: bash

bioconductor-melissa
====================

.. conda:recipe:: bioconductor-melissa
   :replaces_section_title:
   :noindex:

   Bayesian clustering and imputationa of single cell methylomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Melissa.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-melissa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-melissa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-melissa/meta.yaml>`_

   Melissa is a Baysian probabilistic model for jointly clustering and imputing single cell methylomes. This is done by taking into account local correlations via a Generalised Linear Model approach and global similarities using a mixture modelling approach.


.. conda:package:: bioconductor-melissa

   |downloads_bioconductor-melissa| |docker_bioconductor-melissa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-bprmeth: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrixcalc: 
   :depends r-mclust: 
   :depends r-mcmcpack: 
   :depends r-mvtnorm: 
   :depends r-rocr: 
   :depends r-truncnorm: 
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

      mamba install bioconductor-melissa

   and update with::

      mamba update bioconductor-melissa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-melissa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-melissa:<tag>

   (see `bioconductor-melissa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-melissa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-melissa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-melissa
   :alt:   (downloads)
.. |docker_bioconductor-melissa| image:: https://quay.io/repository/biocontainers/bioconductor-melissa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-melissa
.. _`bioconductor-melissa/tags`: https://quay.io/repository/biocontainers/bioconductor-melissa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-melissa";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-melissa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-melissa/README.html