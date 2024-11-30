:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylpipe'
.. highlight: bash

bioconductor-methylpipe
=======================

.. conda:recipe:: bioconductor-methylpipe
   :replaces_section_title:
   :noindex:

   Base resolution DNA methylation data analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/methylPipe.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-methylpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylpipe/meta.yaml>`_
   :links: biotools: :biotools:`methylpipe`

   Memory efficient analysis of base resolution DNA methylation data in both the CpG and non\-CpG sequence context. Integration of DNA methylation data derived from any methodology providing base\- or low\-resolution data.


.. conda:package:: bioconductor-methylpipe

   |downloads_bioconductor-methylpipe| |docker_bioconductor-methylpipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.1-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.27.0-1</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.27.0-1``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gviz: ``>=1.46.1,<1.47.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-gplots: 
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

      mamba install bioconductor-methylpipe

   and update with::

      mamba update bioconductor-methylpipe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylpipe:<tag>

   (see `bioconductor-methylpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylpipe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylpipe
   :alt:   (downloads)
.. |docker_bioconductor-methylpipe| image:: https://quay.io/repository/biocontainers/bioconductor-methylpipe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylpipe
.. _`bioconductor-methylpipe/tags`: https://quay.io/repository/biocontainers/bioconductor-methylpipe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylpipe";
        var versions = ["1.36.0","1.36.0","1.34.1","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylpipe/README.html