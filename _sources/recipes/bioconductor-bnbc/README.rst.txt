:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bnbc'
.. highlight: bash

bioconductor-bnbc
=================

.. conda:recipe:: bioconductor-bnbc
   :replaces_section_title:
   :noindex:

   Bandwise normalization and batch correction of Hi\-C data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/bnbc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bnbc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnbc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnbc/meta.yaml>`_
   :links: biotools: :biotools:`bnbc`

   Tools to normalize \(several\) Hi\-C data from replicates.


.. conda:package:: bioconductor-bnbc

   |downloads_bioconductor-bnbc| |docker_bioconductor-bnbc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23.0-1</code>,  <code>1.23.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.23.0-1``,  ``1.23.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-matrixstats: 
   :depends r-rcpp: ``>=0.12.12``
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

      mamba install bioconductor-bnbc

   and update with::

      mamba update bioconductor-bnbc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bnbc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bnbc:<tag>

   (see `bioconductor-bnbc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bnbc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bnbc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bnbc
   :alt:   (downloads)
.. |docker_bioconductor-bnbc| image:: https://quay.io/repository/biocontainers/bioconductor-bnbc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bnbc
.. _`bioconductor-bnbc/tags`: https://quay.io/repository/biocontainers/bioconductor-bnbc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bnbc";
        var versions = ["1.23.0","1.23.0","1.22.0","1.20.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bnbc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bnbc/README.html