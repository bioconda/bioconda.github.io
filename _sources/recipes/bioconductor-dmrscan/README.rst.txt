:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrscan'
.. highlight: bash

bioconductor-dmrscan
====================

.. conda:recipe:: bioconductor-dmrscan
   :replaces_section_title:
   :noindex:

   Detection of Differentially Methylated Regions

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DMRScan.html
   :license: GPL-3
   :recipe: /`bioconductor-dmrscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrscan/meta.yaml>`_

   This package detects significant differentially methylated regions \(for both qualitative and quantitative traits\)\, using a scan statistic with underlying Poisson heuristics. The scan statistic will depend on a sequence of window sizes \(\# of CpGs within each window\) and on a threshold for each window size. This threshold can be calculated by three different means\: i\) analytically using Siegmund et.al \(2012\) solution \(preferred\)\, ii\) an important sampling as suggested by Zhang \(2008\)\, and a iii\) full MCMC modeling of the data\, choosing between a number of different options for modeling the dependency between each CpG.


.. conda:package:: bioconductor-dmrscan

   |downloads_bioconductor-dmrscan| |docker_bioconductor-dmrscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :depends r-rcpproll: 
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

      mamba install bioconductor-dmrscan

   and update with::

      mamba update bioconductor-dmrscan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmrscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmrscan:<tag>

   (see `bioconductor-dmrscan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmrscan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrscan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrscan
   :alt:   (downloads)
.. |docker_bioconductor-dmrscan| image:: https://quay.io/repository/biocontainers/bioconductor-dmrscan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrscan
.. _`bioconductor-dmrscan/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrscan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmrscan";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrscan/README.html