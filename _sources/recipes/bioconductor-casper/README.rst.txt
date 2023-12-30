:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-casper'
.. highlight: bash

bioconductor-casper
===================

.. conda:recipe:: bioconductor-casper
   :replaces_section_title:
   :noindex:

   Characterization of Alternative Splicing based on Paired\-End Reads

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/casper.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-casper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper/meta.yaml>`_

   Infer alternative splicing from paired\-end RNA\-seq data. The model is based on counting paths across exons\, rather than pairwise exon connections\, and estimates the fragment size and start distributions non\-parametrically\, which improves estimation precision.


.. conda:package:: bioconductor-casper

   |downloads_bioconductor-casper| |docker_bioconductor-casper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.0-2</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.23.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.0-2``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.23.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-ebarrays: ``>=2.66.0,<2.67.0``
   :depends bioconductor-ebarrays: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-gaga: ``>=2.48.0,<2.49.0``
   :depends bioconductor-gaga: ``>=2.48.0,<2.49.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coda: 
   :depends r-gtools: 
   :depends r-mgcv: 
   :depends r-sqldf: 
   :depends r-survival: 
   :depends r-vgam: 
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

      mamba install bioconductor-casper

   and update with::

      mamba update bioconductor-casper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-casper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-casper:<tag>

   (see `bioconductor-casper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-casper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-casper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-casper
   :alt:   (downloads)
.. |docker_bioconductor-casper| image:: https://quay.io/repository/biocontainers/bioconductor-casper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-casper
.. _`bioconductor-casper/tags`: https://quay.io/repository/biocontainers/bioconductor-casper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-casper";
        var versions = ["2.36.0","2.34.0","2.32.0","2.32.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-casper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-casper/README.html