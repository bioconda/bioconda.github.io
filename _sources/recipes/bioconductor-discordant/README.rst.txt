:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-discordant'
.. highlight: bash

bioconductor-discordant
=======================

.. conda:recipe:: bioconductor-discordant
   :replaces_section_title:
   :noindex:

   The Discordant Method\: A Novel Approach for Differential Correlation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/discordant.html
   :license: GPL-3
   :recipe: /`bioconductor-discordant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant/meta.yaml>`_

   Discordant is an R package that identifies pairs of features that correlate differently between phenotypic groups\, with application to \-omics data sets. Discordant uses a mixture model that “bins” molecular feature pairs based on their type of coexpression or coabbundance. Algorithm is explained further in \"Differential Correlation for Sequencing Data\"\" \(Siska et al. 2016\).


.. conda:package:: bioconductor-discordant

   |downloads_bioconductor-discordant| |docker_bioconductor-discordant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biwt: 
   :depends r-dplyr: 
   :depends r-gtools: 
   :depends r-mass: 
   :depends r-rcpp: 
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

      mamba install bioconductor-discordant

   and update with::

      mamba update bioconductor-discordant

  To create a new environment, run::

      mamba create --name myenvname bioconductor-discordant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-discordant:<tag>

   (see `bioconductor-discordant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-discordant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-discordant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-discordant
   :alt:   (downloads)
.. |docker_bioconductor-discordant| image:: https://quay.io/repository/biocontainers/bioconductor-discordant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-discordant
.. _`bioconductor-discordant/tags`: https://quay.io/repository/biocontainers/bioconductor-discordant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-discordant";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-discordant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-discordant/README.html