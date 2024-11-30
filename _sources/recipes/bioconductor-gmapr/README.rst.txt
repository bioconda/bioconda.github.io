:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmapr'
.. highlight: bash

bioconductor-gmapr
==================

.. conda:recipe:: bioconductor-gmapr
   :replaces_section_title:
   :noindex:

   An R interface to the GMAP\/GSNAP\/GSTRUCT suite

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gmapR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmapr/meta.yaml>`_
   :links: biotools: :biotools:`gmapr`

   GSNAP and GMAP are a pair of tools to align short\-read data written by Tom Wu.  This package provides convenience methods to work with GMAP and GSNAP from within R. In addition\, it provides methods to tally alignment results on a per\-nucleotide basis using the bam\_tally tool.


.. conda:package:: bioconductor-gmapr

   |downloads_bioconductor-gmapr| |docker_bioconductor-gmapr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.1,<1.71.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends bioconductor-variantannotation: ``>=1.48.1,<1.49.0a0``
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

      mamba install bioconductor-gmapr

   and update with::

      mamba update bioconductor-gmapr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gmapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gmapr:<tag>

   (see `bioconductor-gmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gmapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmapr
   :alt:   (downloads)
.. |docker_bioconductor-gmapr| image:: https://quay.io/repository/biocontainers/bioconductor-gmapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmapr
.. _`bioconductor-gmapr/tags`: https://quay.io/repository/biocontainers/bioconductor-gmapr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gmapr";
        var versions = ["1.44.0","1.44.0","1.42.0","1.40.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmapr/README.html