:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rots'
.. highlight: bash

bioconductor-rots
=================

.. conda:recipe:: bioconductor-rots
   :replaces_section_title:
   :noindex:

   Reproducibility\-Optimized Test Statistic

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ROTS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rots/meta.yaml>`_
   :links: biotools: :biotools:`rots`, doi: :doi:`10.1109/tcbb.2007.1078`

   Calculates the Reproducibility\-Optimized Test Statistic \(ROTS\) for differential testing in omics data.


.. conda:package:: bioconductor-rots

   |downloads_bioconductor-rots| |docker_bioconductor-rots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rots

   and update with::

      mamba update bioconductor-rots

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rots:<tag>

   (see `bioconductor-rots/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rots
   :alt:   (downloads)
.. |docker_bioconductor-rots| image:: https://quay.io/repository/biocontainers/bioconductor-rots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rots
.. _`bioconductor-rots/tags`: https://quay.io/repository/biocontainers/bioconductor-rots?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rots";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rots/README.html