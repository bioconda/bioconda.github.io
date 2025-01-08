:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singler'
.. highlight: bash

bioconductor-singler
====================

.. conda:recipe:: bioconductor-singler
   :replaces_section_title:
   :noindex:

   Reference\-Based Single\-Cell RNA\-Seq Annotation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SingleR.html
   :license: GPL-3
   :recipe: /`bioconductor-singler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singler/meta.yaml>`_

   Performs unbiased cell type recognition from single\-cell RNA sequencing data\, by leveraging reference transcriptomic datasets of pure cell types to infer the cell of origin of each single cell independently.


.. conda:package:: bioconductor-singler

   |downloads_bioconductor-singler| |docker_bioconductor-singler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0``
   :depends bioconductor-assorthead: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0``
   :depends bioconductor-beachmat: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0``
   :depends bioconductor-biocneighbors: ``>=2.0.0,<2.1.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biocsingular: ``>=1.22.0,<1.23.0a0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
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

      mamba install bioconductor-singler

   and update with::

      mamba update bioconductor-singler

  To create a new environment, run::

      mamba create --name myenvname bioconductor-singler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singler:<tag>

   (see `bioconductor-singler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singler
   :alt:   (downloads)
.. |docker_bioconductor-singler| image:: https://quay.io/repository/biocontainers/bioconductor-singler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singler
.. _`bioconductor-singler/tags`: https://quay.io/repository/biocontainers/bioconductor-singler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singler";
        var versions = ["2.8.0","2.4.0","2.2.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singler/README.html