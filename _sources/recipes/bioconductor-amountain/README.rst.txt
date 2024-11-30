:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amountain'
.. highlight: bash

bioconductor-amountain
======================

.. conda:recipe:: bioconductor-amountain
   :replaces_section_title:
   :noindex:

   Active modules for multilayer weighted gene co\-expression networks\: a continuous optimization approach

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AMOUNTAIN.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-amountain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amountain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amountain/meta.yaml>`_
   :links: biotools: :biotools:`amountain`, doi: :doi:`10.1101/056952`

   A pure data\-driven gene network\, weighted gene co\-expression network \(WGCN\) could be constructed only from expression profile. Different layers in such networks may represent different time points\, multiple conditions or various species. AMOUNTAIN aims to search active modules in multi\-layer WGCN using a continuous optimization approach.


.. conda:package:: bioconductor-amountain

   |downloads_bioconductor-amountain| |docker_bioconductor-amountain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-3</code>,  <code>1.20.0-2</code>,  </span></summary>
      

      ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-3``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-amountain

   and update with::

      mamba update bioconductor-amountain

  To create a new environment, run::

      mamba create --name myenvname bioconductor-amountain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amountain:<tag>

   (see `bioconductor-amountain/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amountain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amountain.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amountain
   :alt:   (downloads)
.. |docker_bioconductor-amountain| image:: https://quay.io/repository/biocontainers/bioconductor-amountain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amountain
.. _`bioconductor-amountain/tags`: https://quay.io/repository/biocontainers/bioconductor-amountain?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-amountain";
        var versions = ["1.28.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amountain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amountain/README.html