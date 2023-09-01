:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebseqhmm'
.. highlight: bash

bioconductor-ebseqhmm
=====================

.. conda:recipe:: bioconductor-ebseqhmm
   :replaces_section_title:
   :noindex:

   Bayesian analysis for identifying gene or isoform expression changes in ordered RNA\-seq experiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EBSeqHMM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ebseqhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseqhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseqhmm/meta.yaml>`_

   The EBSeqHMM package implements an auto\-regressive hidden Markov model for statistical analysis in ordered RNA\-seq experiments \(e.g. time course or spatial course data\). The EBSeqHMM package provides functions to identify genes and isoforms that have non\-constant expression profile over the time points\/positions\, and cluster them into expression paths.


.. conda:package:: bioconductor-ebseqhmm

   |downloads_bioconductor-ebseqhmm| |docker_bioconductor-ebseqhmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ebseq: ``>=1.40.0,<1.41.0``
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

      mamba install bioconductor-ebseqhmm

   and update with::

      mamba update bioconductor-ebseqhmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ebseqhmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebseqhmm:<tag>

   (see `bioconductor-ebseqhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebseqhmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebseqhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebseqhmm
   :alt:   (downloads)
.. |docker_bioconductor-ebseqhmm| image:: https://quay.io/repository/biocontainers/bioconductor-ebseqhmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebseqhmm
.. _`bioconductor-ebseqhmm/tags`: https://quay.io/repository/biocontainers/bioconductor-ebseqhmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ebseqhmm";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebseqhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebseqhmm/README.html