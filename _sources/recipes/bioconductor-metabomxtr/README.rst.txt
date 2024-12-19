:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabomxtr'
.. highlight: bash

bioconductor-metabomxtr
=======================

.. conda:recipe:: bioconductor-metabomxtr
   :replaces_section_title:
   :noindex:

   A package to run mixture models for truncated metabolomics data with normal or lognormal distributions

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/metabomxtr.html
   :license: GPL-2
   :recipe: /`bioconductor-metabomxtr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabomxtr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabomxtr/meta.yaml>`_

   The functions in this package return optimized parameter estimates and log likelihoods for mixture models of truncated data with normal or lognormal distributions.


.. conda:package:: bioconductor-metabomxtr

   |downloads_bioconductor-metabomxtr| |docker_bioconductor-metabomxtr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-formula: 
   :depends r-ggplot2: 
   :depends r-optimx: 
   :depends r-plyr: 
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

      mamba install bioconductor-metabomxtr

   and update with::

      mamba update bioconductor-metabomxtr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metabomxtr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabomxtr:<tag>

   (see `bioconductor-metabomxtr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabomxtr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabomxtr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabomxtr
   :alt:   (downloads)
.. |docker_bioconductor-metabomxtr| image:: https://quay.io/repository/biocontainers/bioconductor-metabomxtr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabomxtr
.. _`bioconductor-metabomxtr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabomxtr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabomxtr";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabomxtr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabomxtr/README.html