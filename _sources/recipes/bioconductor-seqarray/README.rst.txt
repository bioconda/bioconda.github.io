:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarray'
.. highlight: bash

bioconductor-seqarray
=====================

.. conda:recipe:: bioconductor-seqarray
   :replaces_section_title:
   :noindex:

   Data Management of Large\-Scale Whole\-Genome Sequence Variant Calls

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SeqArray.html
   :license: GPL-3
   :recipe: /`bioconductor-seqarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray/meta.yaml>`_

   Data management of large\-scale whole\-genome sequencing variant calls with thousands of individuals\: genotypic data \(e.g.\, SNVs\, indels and structural variation calls\) and annotations in SeqArray GDS files are stored in an array\-oriented and compressed manner\, with efficient data access using the R programming language.


.. conda:package:: bioconductor-seqarray

   |downloads_bioconductor-seqarray| |docker_bioconductor-seqarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.1-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.1-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0``
   :depends bioconductor-gdsfmt: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-seqarray

   and update with::

      mamba update bioconductor-seqarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqarray:<tag>

   (see `bioconductor-seqarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarray
   :alt:   (downloads)
.. |docker_bioconductor-seqarray| image:: https://quay.io/repository/biocontainers/bioconductor-seqarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarray
.. _`bioconductor-seqarray/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarray";
        var versions = ["1.42.0","1.40.1","1.38.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarray/README.html