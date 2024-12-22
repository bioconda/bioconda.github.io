:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normr'
.. highlight: bash

bioconductor-normr
==================

.. conda:recipe:: bioconductor-normr
   :replaces_section_title:
   :noindex:

   Normalization and difference calling in ChIP\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/normr.html
   :license: GPL-2
   :recipe: /`bioconductor-normr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normr/meta.yaml>`_

   Robust normalization and difference calling procedures for ChIP\-seq and alike data. Read counts are modeled jointly as a binomial mixture model with a user\-specified number of components. A fitted background estimate accounts for the effect of enrichment in certain regions and\, therefore\, represents an appropriate null hypothesis. This robust background is used to identify significantly enriched or depleted regions.


.. conda:package:: bioconductor-normr

   |downloads_bioconductor-normr| |docker_bioconductor-normr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bamsignals: ``>=1.38.0,<1.39.0``
   :depends bioconductor-bamsignals: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: ``>=0.11``
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

      mamba install bioconductor-normr

   and update with::

      mamba update bioconductor-normr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-normr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-normr:<tag>

   (see `bioconductor-normr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normr
   :alt:   (downloads)
.. |docker_bioconductor-normr| image:: https://quay.io/repository/biocontainers/bioconductor-normr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normr
.. _`bioconductor-normr/tags`: https://quay.io/repository/biocontainers/bioconductor-normr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-normr";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normr/README.html