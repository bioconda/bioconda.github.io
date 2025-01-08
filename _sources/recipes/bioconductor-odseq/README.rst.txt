:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-odseq'
.. highlight: bash

bioconductor-odseq
==================

.. conda:recipe:: bioconductor-odseq
   :replaces_section_title:
   :noindex:

   Outlier detection in multiple sequence alignments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/odseq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-odseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-odseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-odseq/meta.yaml>`_

   Performs outlier detection of sequences in a multiple sequence alignment using bootstrap of predefined distance metrics. Outlier sequences can make downstream analyses unreliable or make the alignments less accurate while they are being constructed. This package implements the OD\-seq algorithm proposed by Jehl et al \(doi 10.1186\/s12859\-015\-0702\-1\) for aligned sequences and a variant using string kernels for unaligned sequences.


.. conda:package:: bioconductor-odseq

   |downloads_bioconductor-odseq| |docker_bioconductor-odseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-kebabs: ``>=1.40.0,<1.41.0``
   :depends bioconductor-msa: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mclust: ``>=5.1``
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

      mamba install bioconductor-odseq

   and update with::

      mamba update bioconductor-odseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-odseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-odseq:<tag>

   (see `bioconductor-odseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-odseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-odseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-odseq
   :alt:   (downloads)
.. |docker_bioconductor-odseq| image:: https://quay.io/repository/biocontainers/bioconductor-odseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-odseq
.. _`bioconductor-odseq/tags`: https://quay.io/repository/biocontainers/bioconductor-odseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-odseq";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-odseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-odseq/README.html