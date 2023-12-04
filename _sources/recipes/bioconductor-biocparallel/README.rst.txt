:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocparallel'
.. highlight: bash

bioconductor-biocparallel
=========================

.. conda:recipe:: bioconductor-biocparallel
   :replaces_section_title:
   :noindex:

   Bioconductor facilities for parallel evaluation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocParallel.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-biocparallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocparallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocparallel/meta.yaml>`_
   :links: biotools: :biotools:`biocparallel`, doi: :doi:`10.1214/14-STS476`

   This package provides modified versions and novel implementation of functions for parallel evaluation\, tailored to use with Bioconductor objects.


.. conda:package:: bioconductor-biocparallel

   |downloads_bioconductor-biocparallel| |docker_bioconductor-biocparallel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.2-0</code>,  <code>1.32.5-1</code>,  <code>1.32.5-0</code>,  <code>1.32.0-0</code>,  <code>1.28.3-1</code>,  <code>1.28.3-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.2-0``,  ``1.32.5-1``,  ``1.32.5-0``,  ``1.32.0-0``,  ``1.28.3-1``,  ``1.28.3-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.6-0``,  ``1.16.2-1``,  ``1.16.2-0``,  ``1.14.2-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.6.6-1``,  ``1.6.6-0``,  ``1.5.0-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.2.22-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-codetools: 
   :depends r-cpp11: 
   :depends r-futile.logger: 
   :depends r-snow: 
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

      mamba install bioconductor-biocparallel

   and update with::

      mamba update bioconductor-biocparallel

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocparallel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocparallel:<tag>

   (see `bioconductor-biocparallel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocparallel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocparallel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocparallel
   :alt:   (downloads)
.. |docker_bioconductor-biocparallel| image:: https://quay.io/repository/biocontainers/bioconductor-biocparallel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocparallel
.. _`bioconductor-biocparallel/tags`: https://quay.io/repository/biocontainers/bioconductor-biocparallel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocparallel";
        var versions = ["1.36.0","1.36.0","1.34.2","1.32.5","1.32.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocparallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocparallel/README.html