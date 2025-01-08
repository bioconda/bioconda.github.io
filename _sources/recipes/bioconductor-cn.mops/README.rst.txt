:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cn.mops'
.. highlight: bash

bioconductor-cn.mops
====================

.. conda:recipe:: bioconductor-cn.mops
   :replaces_section_title:
   :noindex:

   cn.mops \- Mixture of Poissons for CNV detection in NGS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cn.mops.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-cn.mops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cn.mops/meta.yaml>`_
   :links: biotools: :biotools:`cn.mops`

   cn.mops \(Copy Number estimation by a Mixture Of PoissonS\) is a data processing pipeline for copy number variations and aberrations \(CNVs and CNAs\) from next generation sequencing \(NGS\) data. The package supplies functions to convert BAM files into read count matrices or genomic ranges objects\, which are the input objects for cn.mops. cn.mops models the depths of coverage across samples at each genomic position. Therefore\, it does not suffer from read count biases along chromosomes. Using a Bayesian approach\, cn.mops decomposes read variations across samples into integer copy numbers and noise by its mixture components and Poisson distributions\, respectively. cn.mops guarantees a low FDR because wrong detections are indicated by high noise and filtered out. cn.mops is very fast and written in C\+\+.


.. conda:package:: bioconductor-cn.mops

   |downloads_bioconductor-cn.mops| |docker_bioconductor-cn.mops|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-cn.mops

   and update with::

      mamba update bioconductor-cn.mops

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cn.mops

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cn.mops:<tag>

   (see `bioconductor-cn.mops/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cn.mops| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cn.mops.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cn.mops
   :alt:   (downloads)
.. |docker_bioconductor-cn.mops| image:: https://quay.io/repository/biocontainers/bioconductor-cn.mops/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cn.mops
.. _`bioconductor-cn.mops/tags`: https://quay.io/repository/biocontainers/bioconductor-cn.mops?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cn.mops";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cn.mops/README.html