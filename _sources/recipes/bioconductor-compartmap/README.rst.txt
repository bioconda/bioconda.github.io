:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compartmap'
.. highlight: bash

bioconductor-compartmap
=======================

.. conda:recipe:: bioconductor-compartmap
   :replaces_section_title:
   :noindex:

   Higher\-order chromatin domain inference in single cells from scRNA\-seq and scATAC\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/compartmap.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-compartmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap/meta.yaml>`_

   Compartmap performs direct inference of higher\-order chromatin from scRNA\-seq and scATAC\-seq. This package implements a James\-Stein estimator for computing single\-cell level higher\-order chromatin domains. Further\, we utilize random matrix theory as a method to de\-noise correlation matrices to achieve a similar \"plaid\-like\" patterning as observed in Hi\-C and scHi\-C data.


.. conda:package:: bioconductor-compartmap

   |downloads_bioconductor-compartmap| |docker_bioconductor-compartmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-raggedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-rmtstat: 
   :depends r-scales: 
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

      mamba install bioconductor-compartmap

   and update with::

      mamba update bioconductor-compartmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-compartmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compartmap:<tag>

   (see `bioconductor-compartmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compartmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compartmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compartmap
   :alt:   (downloads)
.. |docker_bioconductor-compartmap| image:: https://quay.io/repository/biocontainers/bioconductor-compartmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compartmap
.. _`bioconductor-compartmap/tags`: https://quay.io/repository/biocontainers/bioconductor-compartmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compartmap";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compartmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compartmap/README.html