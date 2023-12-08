:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqpattern'
.. highlight: bash

bioconductor-seqpattern
=======================

.. conda:recipe:: bioconductor-seqpattern
   :replaces_section_title:
   :noindex:

   Visualising oligonucleotide patterns and motif occurrences across a set of sorted sequences

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/seqPattern.html
   :license: GPL-3
   :recipe: /`bioconductor-seqpattern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern/meta.yaml>`_
   :links: biotools: :biotools:`seqpattern`, doi: :doi:`10.1038/nmeth.3252`

   Visualising oligonucleotide patterns and sequence motifs occurrences across a large set of sequences centred at a common reference point and sorted by a user defined feature.


.. conda:package:: bioconductor-seqpattern

   |downloads_bioconductor-seqpattern| |docker_bioconductor-seqpattern|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
   :depends r-plotrix: 
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

      mamba install bioconductor-seqpattern

   and update with::

      mamba update bioconductor-seqpattern

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqpattern

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqpattern:<tag>

   (see `bioconductor-seqpattern/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqpattern| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqpattern.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqpattern
   :alt:   (downloads)
.. |docker_bioconductor-seqpattern| image:: https://quay.io/repository/biocontainers/bioconductor-seqpattern/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqpattern
.. _`bioconductor-seqpattern/tags`: https://quay.io/repository/biocontainers/bioconductor-seqpattern?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqpattern";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqpattern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqpattern/README.html