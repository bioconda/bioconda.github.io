:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-girafe'
.. highlight: bash

bioconductor-girafe
===================

.. conda:recipe:: bioconductor-girafe
   :replaces_section_title:
   :noindex:

   Genome Intervals and Read Alignments for Functional Exploration

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/girafe.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-girafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-girafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-girafe/meta.yaml>`_
   :links: biotools: :biotools:`girafe`

   The package \'girafe\' deals with the genome\-level representation of aligned reads from next\-generation sequencing data. It contains an object class for enabling a detailed description of genome intervals with aligned reads and functions for comparing\, visualising\, exporting and working with such intervals and the aligned reads. As such\, the package interacts with and provides a link between the packages ShortRead\, IRanges and genomeIntervals.


.. conda:package:: bioconductor-girafe

   |downloads_bioconductor-girafe| |docker_bioconductor-girafe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeintervals: ``>=1.56.0,<1.57.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-intervals: ``>=0.13.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-girafe

   and update with::

      mamba update bioconductor-girafe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-girafe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-girafe:<tag>

   (see `bioconductor-girafe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-girafe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-girafe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-girafe
   :alt:   (downloads)
.. |docker_bioconductor-girafe| image:: https://quay.io/repository/biocontainers/bioconductor-girafe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-girafe
.. _`bioconductor-girafe/tags`: https://quay.io/repository/biocontainers/bioconductor-girafe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-girafe";
        var versions = ["1.52.0","1.50.0","1.50.0","1.46.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-girafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-girafe/README.html