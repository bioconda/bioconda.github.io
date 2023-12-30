:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepsnmr'
.. highlight: bash

bioconductor-pepsnmr
====================

.. conda:recipe:: bioconductor-pepsnmr
   :replaces_section_title:
   :noindex:

   Pre\-process 1H\-NMR FID signals

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PepsNMR.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-pepsnmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmr/meta.yaml>`_

   This package provides R functions for common pre\-procssing steps that are applied on 1H\-NMR data. It also provides a function to read the FID signals directly in the Bruker format.


.. conda:package:: bioconductor-pepsnmr

   |downloads_bioconductor-pepsnmr| |docker_bioconductor-pepsnmr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-ptw: 
   :depends r-reshape2: 
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

      mamba install bioconductor-pepsnmr

   and update with::

      mamba update bioconductor-pepsnmr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pepsnmr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepsnmr:<tag>

   (see `bioconductor-pepsnmr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepsnmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsnmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepsnmr
   :alt:   (downloads)
.. |docker_bioconductor-pepsnmr| image:: https://quay.io/repository/biocontainers/bioconductor-pepsnmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsnmr
.. _`bioconductor-pepsnmr/tags`: https://quay.io/repository/biocontainers/bioconductor-pepsnmr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pepsnmr";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsnmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsnmr/README.html