:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-descan2'
.. highlight: bash

bioconductor-descan2
====================

.. conda:recipe:: bioconductor-descan2
   :replaces_section_title:
   :noindex:

   Differential Enrichment Scan 2

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DEScan2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-descan2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-descan2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-descan2/meta.yaml>`_

   Integrated peak and differential caller\, specifically designed for broad epigenomic signals.


.. conda:package:: bioconductor-descan2

   |downloads_bioconductor-descan2| |docker_bioconductor-descan2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.1-1</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-chippeakanno: ``>=3.36.0,<3.37.0``
   :depends bioconductor-chippeakanno: ``>=3.36.0,<3.37.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-glue: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=0.12.13``
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-descan2

   and update with::

      mamba update bioconductor-descan2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-descan2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-descan2:<tag>

   (see `bioconductor-descan2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-descan2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-descan2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-descan2
   :alt:   (downloads)
.. |docker_bioconductor-descan2| image:: https://quay.io/repository/biocontainers/bioconductor-descan2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-descan2
.. _`bioconductor-descan2/tags`: https://quay.io/repository/biocontainers/bioconductor-descan2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-descan2";
        var versions = ["1.22.0","1.20.1","1.18.0","1.18.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-descan2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-descan2/README.html