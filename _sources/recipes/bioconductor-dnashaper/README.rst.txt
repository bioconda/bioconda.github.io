:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnashaper'
.. highlight: bash

bioconductor-dnashaper
======================

.. conda:recipe:: bioconductor-dnashaper
   :replaces_section_title:
   :noindex:

   High\-throughput prediction of DNA shape features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DNAshapeR.html
   :license: GPL-2
   :recipe: /`bioconductor-dnashaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnashaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnashaper/meta.yaml>`_
   :links: biotools: :biotools:`dnashaper`

   DNAhapeR is an R\/BioConductor package for ultra\-fast\, high\-throughput predictions of DNA shape features. The package allows to predict\, visualize and encode DNA shape features for statistical learning.


.. conda:package:: bioconductor-dnashaper

   |downloads_bioconductor-dnashaper| |docker_bioconductor-dnashaper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fields: 
   :depends r-rcpp: ``>=0.12.1``
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

      mamba install bioconductor-dnashaper

   and update with::

      mamba update bioconductor-dnashaper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dnashaper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnashaper:<tag>

   (see `bioconductor-dnashaper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnashaper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnashaper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnashaper
   :alt:   (downloads)
.. |docker_bioconductor-dnashaper| image:: https://quay.io/repository/biocontainers/bioconductor-dnashaper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnashaper
.. _`bioconductor-dnashaper/tags`: https://quay.io/repository/biocontainers/bioconductor-dnashaper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnashaper";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnashaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnashaper/README.html