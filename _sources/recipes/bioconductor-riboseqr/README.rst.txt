:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-riboseqr'
.. highlight: bash

bioconductor-riboseqr
=====================

.. conda:recipe:: bioconductor-riboseqr
   :replaces_section_title:
   :noindex:

   Analysis of sequencing data from ribosome profiling experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/riboSeqR.html
   :license: GPL-3
   :recipe: /`bioconductor-riboseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboseqr/meta.yaml>`_

   Plotting functions\, frameshift detection and parsing of sequencing data from ribosome profiling experiments.


.. conda:package:: bioconductor-riboseqr

   |downloads_bioconductor-riboseqr| |docker_bioconductor-riboseqr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bayseq: ``>=2.40.0,<2.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-seqlogo: ``>=1.72.0,<1.73.0``
   :depends r-abind: 
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

      mamba install bioconductor-riboseqr

   and update with::

      mamba update bioconductor-riboseqr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-riboseqr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-riboseqr:<tag>

   (see `bioconductor-riboseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-riboseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-riboseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-riboseqr
   :alt:   (downloads)
.. |docker_bioconductor-riboseqr| image:: https://quay.io/repository/biocontainers/bioconductor-riboseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-riboseqr
.. _`bioconductor-riboseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-riboseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-riboseqr";
        var versions = ["1.40.0","1.36.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-riboseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-riboseqr/README.html