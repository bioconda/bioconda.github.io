:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genefilter'
.. highlight: bash

bioconductor-genefilter
=======================

.. conda:recipe:: bioconductor-genefilter
   :replaces_section_title:
   :noindex:

   genefilter\: methods for filtering genes from high\-throughput experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/genefilter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genefilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefilter/meta.yaml>`_
   :links: biotools: :biotools:`genefilter`, doi: :doi:`10.1038/nmeth.3252`

   Some basic functions for filtering genes.


.. conda:package:: bioconductor-genefilter

   |downloads_bioconductor-genefilter| |docker_bioconductor-genefilter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.88.0-1</code>,  <code>1.88.0-0</code>,  <code>1.84.0-1</code>,  <code>1.84.0-0</code>,  <code>1.82.1-0</code>,  <code>1.80.0-1</code>,  <code>1.80.0-0</code>,  <code>1.76.0-2</code>,  <code>1.76.0-1</code>,  </span></summary>
      

      ``1.88.0-1``,  ``1.88.0-0``,  ``1.84.0-1``,  ``1.84.0-0``,  ``1.82.1-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.76.0-2``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.1-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.1-0``,  ``1.56.0-0``,  ``1.54.2-0``,  ``1.52.1-0``,  ``1.52.0-0``,  ``1.51.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.84.0,<1.85.0``
   :depends bioconductor-annotate: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-survival: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genefilter

   and update with::

      mamba update bioconductor-genefilter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genefilter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genefilter:<tag>

   (see `bioconductor-genefilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genefilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genefilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genefilter
   :alt:   (downloads)
.. |docker_bioconductor-genefilter| image:: https://quay.io/repository/biocontainers/bioconductor-genefilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genefilter
.. _`bioconductor-genefilter/tags`: https://quay.io/repository/biocontainers/bioconductor-genefilter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genefilter";
        var versions = ["1.88.0","1.88.0","1.84.0","1.84.0","1.82.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genefilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genefilter/README.html