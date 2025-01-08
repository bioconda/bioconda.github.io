:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interest'
.. highlight: bash

bioconductor-interest
=====================

.. conda:recipe:: bioconductor-interest
   :replaces_section_title:
   :noindex:

   Intron\-Exon Retention Estimator

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IntEREst.html
   :license: GPL-2
   :recipe: /`bioconductor-interest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interest/meta.yaml>`_
   :links: doi: :doi:`10.18129/B9.bioc.IntEREst`

   This package performs Intron\-Exon Retention analysis on RNA\-seq data \(.bam files\).


.. conda:package:: bioconductor-interest

   |downloads_bioconductor-interest| |docker_bioconductor-interest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.2-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-dexseq: ``>=1.52.0,<1.53.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfiles: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-seqlogo: ``>=1.72.0,<1.73.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-rmariadb: 
   :depends r-seqinr: 
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

      mamba install bioconductor-interest

   and update with::

      mamba update bioconductor-interest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-interest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-interest:<tag>

   (see `bioconductor-interest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interest
   :alt:   (downloads)
.. |docker_bioconductor-interest| image:: https://quay.io/repository/biocontainers/bioconductor-interest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interest
.. _`bioconductor-interest/tags`: https://quay.io/repository/biocontainers/bioconductor-interest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interest";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.2","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interest/README.html